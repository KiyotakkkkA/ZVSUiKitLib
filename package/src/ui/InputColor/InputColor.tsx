"use client";

import { Icon } from "@iconify/react";
import {
    forwardRef,
    useId,
    useMemo,
    useRef,
    useState,
    type PointerEvent,
} from "react";
import { cn } from "../../lib/utils";
import type { InputColorProps, InputColorSize } from "./types";
import { Dropdown } from "../Dropdown/Dropdown";

const DEFAULT_COLOR = "#6366F1";

const controlSizeClasses: Record<InputColorSize, string> = {
    sm: "h-9 gap-2 rounded-lg px-2",
    md: "h-11 gap-2.5 rounded-xl px-2.5",
    lg: "h-12 gap-3 rounded-xl px-3",
};

const pickerSizeClasses: Record<InputColorSize, string> = {
    sm: "h-6 w-6 rounded-md",
    md: "h-8 w-8 rounded-lg",
    lg: "h-9 w-9 rounded-lg",
};

const valueSizeClasses: Record<InputColorSize, string> = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
};

const clamp = (value: number, min: number, max: number) =>
    Math.min(Math.max(value, min), max);

const parseHexColor = (color?: string) => {
    if (!color) return null;

    const value = color.trim().replace(/^#/, "");
    const expandedValue =
        value.length === 3 || value.length === 4
            ? value
                  .split("")
                  .map((character) => character.repeat(2))
                  .join("")
            : value;

    if (!/^(?:[0-9a-f]{6}|[0-9a-f]{8})$/i.test(expandedValue)) return null;

    const normalizedValue = expandedValue.toUpperCase();

    if (normalizedValue.length === 8 && normalizedValue.endsWith("FF")) {
        return `#${normalizedValue.slice(0, 6)}`;
    }

    return `#${normalizedValue}`;
};

const hexToRgb = (color: string) => ({
    red: Number.parseInt(color.slice(1, 3), 16),
    green: Number.parseInt(color.slice(3, 5), 16),
    blue: Number.parseInt(color.slice(5, 7), 16),
});

const hexToAlpha = (color: string) =>
    color.length === 9 ? Number.parseInt(color.slice(7, 9), 16) / 255 : 1;

const withAlpha = (color: string, alpha: number) => {
    const opaqueColor = color.slice(0, 7).toUpperCase();
    const clampedAlpha = clamp(alpha, 0, 1);

    if (clampedAlpha >= 1) return opaqueColor;

    const alphaHex = Math.round(clampedAlpha * 255)
        .toString(16)
        .padStart(2, "0")
        .toUpperCase();

    return `${opaqueColor}${alphaHex}`;
};

const rgbToHsv = (red: number, green: number, blue: number) => {
    const normalizedRed = red / 255;
    const normalizedGreen = green / 255;
    const normalizedBlue = blue / 255;
    const max = Math.max(normalizedRed, normalizedGreen, normalizedBlue);
    const min = Math.min(normalizedRed, normalizedGreen, normalizedBlue);
    const delta = max - min;
    let hue = 0;

    if (delta !== 0) {
        if (max === normalizedRed) {
            hue = 60 * (((normalizedGreen - normalizedBlue) / delta) % 6);
        } else if (max === normalizedGreen) {
            hue = 60 * ((normalizedBlue - normalizedRed) / delta + 2);
        } else {
            hue = 60 * ((normalizedRed - normalizedGreen) / delta + 4);
        }
    }

    if (hue < 0) hue += 360;

    return {
        hue,
        saturation: max === 0 ? 0 : (delta / max) * 100,
        brightness: max * 100,
    };
};

const hsvToHex = (hue: number, saturation: number, brightness: number) => {
    const normalizedSaturation = saturation / 100;
    const normalizedBrightness = brightness / 100;
    const chroma = normalizedBrightness * normalizedSaturation;
    const secondary = chroma * (1 - Math.abs(((hue / 60) % 2) - 1));
    const match = normalizedBrightness - chroma;
    let red = 0;
    let green = 0;
    let blue = 0;

    if (hue < 60) {
        red = chroma;
        green = secondary;
    } else if (hue < 120) {
        red = secondary;
        green = chroma;
    } else if (hue < 180) {
        green = chroma;
        blue = secondary;
    } else if (hue < 240) {
        green = secondary;
        blue = chroma;
    } else if (hue < 300) {
        red = secondary;
        blue = chroma;
    } else {
        red = chroma;
        blue = secondary;
    }

    return `#${[red, green, blue]
        .map((channel) =>
            Math.round((channel + match) * 255)
                .toString(16)
                .padStart(2, "0"),
        )
        .join("")}`.toUpperCase();
};

export const InputColor = forwardRef<HTMLInputElement, InputColorProps>(
    function InputColor(
        {
            value,
            defaultValue = DEFAULT_COLOR,
            onChange,
            label,
            showValue = true,
            size = "md",
            palettePresets = null,
            valueFormatter,
            disabled = false,
            readOnly = false,
            id,
            className,
            classNames,
            ...props
        },
        ref,
    ) {
        const generatedId = useId();
        const inputId = id ?? generatedId;
        const triggerId = `${inputId}-trigger`;
        const colorAreaRef = useRef<HTMLDivElement | null>(null);
        const [innerValue, setInnerValue] = useState(
            () => parseHexColor(defaultValue) ?? DEFAULT_COLOR,
        );
        const isControlled = value !== undefined;
        const currentValue =
            parseHexColor(isControlled ? value : innerValue) ?? DEFAULT_COLOR;
        const opaqueColor = currentValue.slice(0, 7);
        const alpha = hexToAlpha(currentValue);
        const isInteractive = !disabled && !readOnly;

        const visibleValue = valueFormatter
            ? valueFormatter(currentValue)
            : currentValue;
        const hsv = useMemo(() => {
            const { red, green, blue } = hexToRgb(currentValue);
            return rgbToHsv(red, green, blue);
        }, [currentValue]);
        const [selectedHue, setSelectedHue] = useState(hsv.hue);
        const activeHue = hsv.saturation > 0 ? hsv.hue : selectedHue;

        const updateValue = (nextValue: string) => {
            if (!isInteractive) return;

            const normalizedValue = parseHexColor(nextValue);

            if (!normalizedValue) return;

            const { red, green, blue } = hexToRgb(normalizedValue);
            const nextHsv = rgbToHsv(red, green, blue);

            if (nextHsv.saturation > 0) {
                setSelectedHue(nextHsv.hue);
            }

            if (!isControlled) {
                setInnerValue(normalizedValue);
            }

            onChange?.(normalizedValue);
        };

        const updateColorArea = (event: PointerEvent<HTMLDivElement>) => {
            if (!isInteractive || !colorAreaRef.current) return;

            const rect = colorAreaRef.current.getBoundingClientRect();
            const saturation = clamp(
                ((event.clientX - rect.left) / rect.width) * 100,
                0,
                100,
            );
            const brightness = clamp(
                100 - ((event.clientY - rect.top) / rect.height) * 100,
                0,
                100,
            );

            updateValue(
                withAlpha(hsvToHex(activeHue, saturation, brightness), alpha),
            );
        };

        return (
            <div
                className={cn(
                    "flex w-full flex-col gap-2",
                    disabled && "opacity-60",
                    className,
                )}
            >
                {label && (
                    <label
                        htmlFor={triggerId}
                        className={cn(
                            "w-fit text-sm font-medium text-main-200",
                            isInteractive ? "cursor-pointer" : "cursor-default",
                            classNames?.label,
                        )}
                    >
                        {label}
                    </label>
                )}

                <Dropdown
                    disabled={!isInteractive}
                    menuPlacement="bottom-left"
                    menuWidth={288}
                    className="w-full"
                >
                    <Dropdown.Trigger
                        id={triggerId}
                        aria-label={
                            props["aria-label"] ??
                            (typeof label === "string" ? label : "Выбрать цвет")
                        }
                        className={cn(
                            "w-full border border-main-700 bg-main-800 text-main-100",
                            "hover:border-main-600 hover:bg-main-800/80",
                            "focus-visible:border-main-500/70 focus-visible:ring-main-500/25",
                            controlSizeClasses[size],
                            classNames?.control,
                        )}
                        icon={
                            <Icon
                                icon="mdi:palette-outline"
                                className="shrink-0 text-lg text-main-400"
                                aria-hidden
                            />
                        }
                    >
                        <span className="flex min-w-0 items-center gap-2.5">
                            <span
                                className={cn(
                                    "relative shrink-0 overflow-hidden border border-main-600 bg-main-900",
                                    pickerSizeClasses[size],
                                    classNames?.picker,
                                )}
                            >
                                <span
                                    className={cn(
                                        "absolute inset-0.5",
                                        classNames?.preview,
                                    )}
                                    style={{
                                        backgroundColor: currentValue,
                                        borderRadius: "inherit",
                                    }}
                                />
                            </span>

                            {showValue && (
                                <span
                                    className={cn(
                                        "min-w-0 truncate font-mono tracking-wide text-main-200",
                                        valueSizeClasses[size],
                                        classNames?.value,
                                    )}
                                >
                                    {visibleValue}
                                </span>
                            )}
                        </span>
                    </Dropdown.Trigger>

                    <Dropdown.Menu
                        className={cn(
                            "rounded-2xl border border-main-700 bg-main-900 p-3 shadow-2xl",
                            classNames?.panel,
                        )}
                    >
                        <div className="mb-3 flex items-center gap-2.5">
                            <span
                                className="h-8 w-8 rounded-lg border border-main-600 shadow-inner"
                                style={{ backgroundColor: currentValue }}
                            />
                            <div className="min-w-0">
                                <p className="text-sm font-medium text-main-100">
                                    Настройка цвета
                                </p>
                                <p className="font-mono text-xs text-main-400">
                                    {currentValue}
                                </p>
                            </div>
                        </div>

                        <div
                            ref={colorAreaRef}
                            className={cn(
                                "relative h-44 w-full touch-none cursor-crosshair overflow-hidden rounded-xl",
                                "border border-white/10 shadow-inner",
                                classNames?.colorArea,
                            )}
                            style={{
                                backgroundColor: `hsl(${activeHue} 100% 50%)`,
                                backgroundImage:
                                    "linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent)",
                            }}
                            onPointerDown={(event) => {
                                event.currentTarget.setPointerCapture(
                                    event.pointerId,
                                );
                                updateColorArea(event);
                            }}
                            onPointerMove={(event) => {
                                if (
                                    event.currentTarget.hasPointerCapture(
                                        event.pointerId,
                                    )
                                ) {
                                    updateColorArea(event);
                                }
                            }}
                            onPointerUp={(event) => {
                                if (
                                    event.currentTarget.hasPointerCapture(
                                        event.pointerId,
                                    )
                                ) {
                                    event.currentTarget.releasePointerCapture(
                                        event.pointerId,
                                    );
                                }
                            }}
                            onPointerCancel={(event) => {
                                if (
                                    event.currentTarget.hasPointerCapture(
                                        event.pointerId,
                                    )
                                ) {
                                    event.currentTarget.releasePointerCapture(
                                        event.pointerId,
                                    );
                                }
                            }}
                        >
                            <span
                                className={cn(
                                    "pointer-events-none absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full",
                                    "border-2 border-white shadow-[0_1px_5px_rgba(0,0,0,0.8)]",
                                    classNames?.colorAreaThumb,
                                )}
                                style={{
                                    left: `${hsv.saturation}%`,
                                    top: `${100 - hsv.brightness}%`,
                                    backgroundColor: currentValue,
                                }}
                            />
                        </div>

                        <div className="mt-3 flex items-center gap-2.5">
                            <Icon
                                icon="mdi:palette"
                                className="text-lg text-main-400"
                                aria-hidden
                            />
                            <div
                                className={cn(
                                    "relative h-3 flex-1 rounded-full",
                                    "bg-[linear-gradient(to_right,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00)]",
                                    classNames?.hueTrack,
                                )}
                            >
                                <span
                                    className={cn(
                                        "pointer-events-none absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full",
                                        "border-2 border-white shadow-[0_1px_4px_rgba(0,0,0,0.7)]",
                                        classNames?.hueThumb,
                                    )}
                                    style={{
                                        left: `${(activeHue / 360) * 100}%`,
                                    }}
                                />
                                <input
                                    type="range"
                                    min={0}
                                    max={360}
                                    step={1}
                                    value={Math.round(activeHue)}
                                    aria-label="Цветовой тон"
                                    onChange={(event) => {
                                        const nextHue = Number(
                                            event.target.value,
                                        );

                                        setSelectedHue(nextHue);
                                        updateValue(
                                            withAlpha(
                                                hsvToHex(
                                                    nextHue,
                                                    hsv.saturation,
                                                    hsv.brightness,
                                                ),
                                                alpha,
                                            ),
                                        );
                                    }}
                                    className="absolute inset-0 h-full w-full cursor-pointer appearance-none opacity-0"
                                />
                            </div>
                        </div>

                        <div className="mt-3 flex items-center gap-2.5">
                            <Icon
                                icon="mdi:opacity"
                                className="shrink-0 text-lg text-main-400"
                                aria-hidden
                            />
                            <div
                                className={cn(
                                    "relative h-3 flex-1 rounded-full",
                                    classNames?.alphaTrack,
                                )}
                                style={{
                                    backgroundImage:
                                        "linear-gradient(45deg, #64748b 25%, transparent 25%), linear-gradient(-45deg, #64748b 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #64748b 75%), linear-gradient(-45deg, transparent 75%, #64748b 75%)",
                                    backgroundPosition:
                                        "0 0, 0 4px, 4px -4px, -4px 0px",
                                    backgroundSize: "8px 8px",
                                }}
                            >
                                <span
                                    className="absolute inset-0 rounded-full"
                                    style={{
                                        backgroundImage: `linear-gradient(to right, transparent, ${opaqueColor})`,
                                    }}
                                />
                                <span
                                    className={cn(
                                        "pointer-events-none absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full",
                                        "border-2 border-white shadow-[0_1px_4px_rgba(0,0,0,0.7)]",
                                        classNames?.alphaThumb,
                                    )}
                                    style={{
                                        left: `${alpha * 100}%`,
                                        backgroundColor: currentValue,
                                    }}
                                />
                                <input
                                    type="range"
                                    min={0}
                                    max={100}
                                    step={1}
                                    value={Math.round(alpha * 100)}
                                    aria-label="Прозрачность цвета"
                                    onChange={(event) =>
                                        updateValue(
                                            withAlpha(
                                                opaqueColor,
                                                Number(event.target.value) /
                                                    100,
                                            ),
                                        )
                                    }
                                    className="absolute inset-0 h-full w-full cursor-pointer appearance-none opacity-0"
                                />
                            </div>
                            <span className="w-9 text-right font-mono text-xs text-main-400">
                                {Math.round(alpha * 100)}%
                            </span>
                        </div>

                        {palettePresets && palettePresets.length > 0 && (
                            <div
                                className={cn(
                                    "mt-3 border-t border-main-700/70 pt-3",
                                    classNames?.palette,
                                )}
                            >
                                <div className="grid grid-cols-8 gap-1.5">
                                    {palettePresets.map((preset, index) => {
                                        const color = parseHexColor(preset);

                                        if (!color) return null;

                                        const isSelected =
                                            color === currentValue;

                                        return (
                                            <button
                                                key={`${preset}-${index}`}
                                                type="button"
                                                aria-label={`Выбрать цвет ${color}`}
                                                aria-pressed={isSelected}
                                                onClick={() =>
                                                    updateValue(color)
                                                }
                                                className={cn(
                                                    "aspect-square rounded-md border border-white/15 shadow-sm outline-none",
                                                    "transition-transform hover:scale-110 focus-visible:ring-2 focus-visible:ring-main-200",
                                                    isSelected &&
                                                        "ring-2 ring-main-100 ring-offset-2 ring-offset-main-900",
                                                    classNames?.preset,
                                                )}
                                                style={{
                                                    backgroundColor: color,
                                                }}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </Dropdown.Menu>
                </Dropdown>

                <input
                    {...props}
                    ref={ref}
                    id={inputId}
                    type="hidden"
                    value={currentValue}
                    disabled={disabled}
                    readOnly
                    className={classNames?.input}
                />
            </div>
        );
    },
);

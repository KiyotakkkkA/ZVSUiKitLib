"use client";

import styles from "./InputColor.module.css";

import { Icon } from "../_shared/icons";
import {
    forwardRef,
    useId,
    useMemo,
    useRef,
    useState,
    type PointerEvent,
} from "react";
import { cn } from "../../lib/utils";
import { useLocale } from "../../hooks/useLocale";
import {
    clamp,
    hexToAlpha,
    hexToRgb,
    hsvToHex,
    parseHexColor,
    rgbToHsv,
    withAlpha,
} from "../../lib/color";
import type { InputColorProps } from "./types";
import { Dropdown } from "../Dropdown/Dropdown";
import type { SizeVariants } from "../_shared/types";

const DEFAULT_COLOR = "#6366F1";

const controlSizeClasses: Record<SizeVariants, string> = {
    sm: styles.s0,
    md: styles.s1,
    lg: styles.s2,
};

const pickerSizeClasses: Record<SizeVariants, string> = {
    sm: styles.s3,
    md: styles.s4,
    lg: styles.s5,
};

const valueSizeClasses: Record<SizeVariants, string> = {
    sm: styles.s6,
    md: styles.s7,
    lg: styles.s8,
};

export const InputColor = forwardRef<HTMLInputElement, InputColorProps>(
    function InputColor(
        {
            rounded = "rounded-full",
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
        const t = useLocale().inputColor;
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
            <div className={cn(styles.s9, disabled && styles.s10, className)}>
                {label && (
                    <label
                        htmlFor={triggerId}
                        className={cn(
                            styles.s11,
                            isInteractive ? styles.s12 : styles.s13,
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
                    className={styles.s14}
                >
                    <Dropdown.Trigger
                        rounded={rounded}
                        style={{ paddingLeft: "0.25rem" }}
                        id={triggerId}
                        aria-label={
                            props["aria-label"] ??
                            (typeof label === "string" ? label : t.pick)
                        }
                        className={cn(
                            styles.s15,
                            styles.s16,
                            styles.s17,
                            controlSizeClasses[size],
                            classNames?.control,
                        )}
                        icon={
                            <Icon
                                icon="palette-outline"
                                className={styles.s18}
                                aria-hidden
                            />
                        }
                    >
                        <span className={styles.s19}>
                            <span
                                className={cn(
                                    styles.s20,
                                    pickerSizeClasses[size],
                                    rounded && `zvs-${rounded}`,
                                    classNames?.picker,
                                )}
                            >
                                <span
                                    className={cn(
                                        styles.s21,
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
                                        styles.s22,
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
                        className={cn(styles.s23, classNames?.panel)}
                    >
                        <div className={styles.s24}>
                            <span
                                className={styles.s25}
                                style={{ backgroundColor: currentValue }}
                            />
                            <div className={styles.s26}>
                                <p className={styles.s27}>{t.title}</p>
                                <p className={styles.s28}>{currentValue}</p>
                            </div>
                        </div>

                        <div
                            ref={colorAreaRef}
                            className={cn(
                                styles.s29,
                                styles.s30,
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
                                    styles.s31,
                                    styles.s32,
                                    classNames?.colorAreaThumb,
                                )}
                                style={{
                                    left: `${hsv.saturation}%`,
                                    top: `${100 - hsv.brightness}%`,
                                    backgroundColor: currentValue,
                                }}
                            />
                        </div>

                        <div className={styles.s33}>
                            <Icon
                                icon="palette"
                                className={styles.s34}
                                aria-hidden
                            />
                            <div
                                className={cn(
                                    styles.s35,
                                    styles.s36,
                                    classNames?.hueTrack,
                                )}
                            >
                                <span
                                    className={cn(
                                        styles.s37,
                                        styles.s38,
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
                                    aria-label={t.hue}
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
                                    className={styles.s39}
                                />
                            </div>
                        </div>

                        <div className={styles.s40}>
                            <Icon
                                icon="opacity"
                                className={styles.s41}
                                aria-hidden
                            />
                            <div
                                className={cn(
                                    styles.s42,
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
                                    className={styles.s43}
                                    style={{
                                        backgroundImage: `linear-gradient(to right, transparent, ${opaqueColor})`,
                                    }}
                                />
                                <span
                                    className={cn(
                                        styles.s44,
                                        styles.s45,
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
                                    aria-label={t.alpha}
                                    onChange={(event) =>
                                        updateValue(
                                            withAlpha(
                                                opaqueColor,
                                                Number(event.target.value) /
                                                    100,
                                            ),
                                        )
                                    }
                                    className={styles.s46}
                                />
                            </div>
                            <span className={styles.s47}>
                                {Math.round(alpha * 100)}%
                            </span>
                        </div>

                        {palettePresets && palettePresets.length > 0 && (
                            <div
                                className={cn(styles.s48, classNames?.palette)}
                            >
                                <div className={styles.s49}>
                                    {palettePresets.map((preset, index) => {
                                        const color = parseHexColor(preset);

                                        if (!color) return null;

                                        const isSelected =
                                            color === currentValue;

                                        return (
                                            <button
                                                key={`${preset}-${index}`}
                                                type="button"
                                                aria-label={t.pickSwatch(color)}
                                                aria-pressed={isSelected}
                                                onClick={() =>
                                                    updateValue(color)
                                                }
                                                className={cn(
                                                    styles.s50,
                                                    styles.s51,
                                                    isSelected && styles.s52,
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

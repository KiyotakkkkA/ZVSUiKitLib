import styles from "./InputSlider.module.css";
import { useMemo, useRef, type PointerEvent } from "react";
import { cn } from "../../lib/utils";
import type { InputSliderProps } from "./types";

const clamp = (value: number, min: number, max: number) => {
    if (max < min) return min;

    return Math.min(Math.max(value, min), max);
};

const snapToStep = (value: number, min: number, step: number) => {
    const snapped = Math.round((value - min) / step) * step + min;
    const precision = step.toString().split(".")[1]?.length ?? 0;

    return Number(snapped.toFixed(precision));
};

export const InputSlider = ({
    value,
    onChange,
    min = 0,
    max = 100,
    step = 1,
    disabled = false,
    className,
    classNames,
    showValue = false,
    valueFormatter,
    ...props
}: InputSliderProps) => {
    const trackRef = useRef<HTMLDivElement | null>(null);

    const percent = useMemo(() => {
        if (max === min) return 0;

        const clampedValue = clamp(value, min, max);

        return ((clampedValue - min) / (max - min)) * 100;
    }, [value, min, max]);

    const formattedValue = valueFormatter ? valueFormatter(value) : value;

    const updateValueFromPointer = (event: PointerEvent<HTMLDivElement>) => {
        if (disabled || !trackRef.current) {
            return;
        }

        const rect = trackRef.current.getBoundingClientRect();
        const pointerPercent = clamp(
            (event.clientX - rect.left) / rect.width,
            0,
            1,
        );
        const nextValue = snapToStep(
            min + pointerPercent * (max - min),
            min,
            step,
        );

        onChange(clamp(nextValue, min, max));
    };

    return (
        <div
            className={cn(
                styles.s0,
                disabled ? styles.s1 : styles.s2,
                className,
            )}
        >
            <div
                ref={trackRef}
                className={styles.s3}
                onPointerDown={(event) => {
                    if (disabled) {
                        return;
                    }

                    event.currentTarget.setPointerCapture(event.pointerId);
                    updateValueFromPointer(event);
                }}
                onPointerMove={(event) => {
                    if (
                        !event.currentTarget.hasPointerCapture(event.pointerId)
                    ) {
                        return;
                    }

                    updateValueFromPointer(event);
                }}
                onPointerUp={(event) => {
                    if (
                        event.currentTarget.hasPointerCapture(event.pointerId)
                    ) {
                        event.currentTarget.releasePointerCapture(
                            event.pointerId,
                        );
                    }
                }}
                onPointerCancel={(event) => {
                    if (
                        event.currentTarget.hasPointerCapture(event.pointerId)
                    ) {
                        event.currentTarget.releasePointerCapture(
                            event.pointerId,
                        );
                    }
                }}
            >
                <input
                    {...props}
                    type="range"
                    value={value}
                    min={min}
                    max={max}
                    step={step}
                    disabled={disabled}
                    onChange={(event) => onChange(Number(event.target.value))}
                    className={cn(
                        styles.s4,
                        disabled ? styles.s5 : styles.s6,
                        classNames?.input,
                    )}
                />

                <div
                    className={cn(
                        styles.s7,
                        styles.s8,
                        classNames?.track,
                    )}
                >
                    <div
                        className={cn(
                            styles.s9,
                            classNames?.fill,
                        )}
                        style={{ width: `${percent}%` }}
                    />
                </div>

                <span
                    className={cn(
                        styles.s10,
                        styles.s11,
                        styles.s12,
                        disabled ? styles.s13 : styles.s14,
                        classNames?.thumb,
                    )}
                    style={{ left: `${percent}%` }}
                />
            </div>

            {showValue && (
                <span
                    className={cn(
                        styles.s15,
                        classNames?.value,
                    )}
                >
                    {formattedValue}
                </span>
            )}
        </div>
    );
};

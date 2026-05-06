import { useMemo } from "react";
import { cn } from "../../lib/utils";
import type { InputSliderProps } from "./types";

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
    const percent = useMemo(() => {
        if (max === min) return 0;

        const clampedValue = Math.min(Math.max(value, min), max);

        return ((clampedValue - min) / (max - min)) * 100;
    }, [value, min, max]);

    const formattedValue = valueFormatter ? valueFormatter(value) : value;

    return (
        <div
            className={cn(
                "group inline-flex w-full items-center gap-3",
                disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer",
                className,
            )}
        >
            <div className="relative h-6 w-full">
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
                        "absolute inset-0 z-20 h-full w-full appearance-none bg-transparent opacity-0",
                        disabled ? "cursor-not-allowed" : "cursor-pointer",
                        classNames?.input,
                    )}
                />

                <div
                    className={cn(
                        "absolute left-0 top-1/2 h-2 w-full -translate-y-1/2 overflow-hidden rounded-full border border-main-600 bg-main-800",
                        "transition-colors duration-200",
                        classNames?.track,
                    )}
                >
                    <div
                        className={cn(
                            "h-full rounded-full bg-main-500/70 transition-all duration-200",
                            classNames?.fill,
                        )}
                        style={{ width: `${percent}%` }}
                    />
                </div>

                <span
                    className={cn(
                        "pointer-events-none absolute top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-main-100",
                        "shadow-sm transition-all duration-200",
                        "group-focus-within:ring-2 group-focus-within:ring-main-300/60",
                        disabled ? "bg-main-300" : "group-hover:scale-110",
                        classNames?.thumb,
                    )}
                    style={{ left: `${percent}%` }}
                />
            </div>

            {showValue && (
                <span
                    className={cn(
                        "min-w-8 text-right text-sm text-main-300",
                        classNames?.value,
                    )}
                >
                    {formattedValue}
                </span>
            )}
        </div>
    );
};

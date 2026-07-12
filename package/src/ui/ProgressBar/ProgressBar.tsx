import { cn } from "../../lib/utils";
import type { ColorVariantsBase } from "../_shared/types";
import type { ProgressBarProps } from "./types";

const variantClasses: Record<ColorVariantsBase, string> = {
    primary: "bg-main-200",
    secondary: "bg-main-700",
    tertiary: "bg-accent-dark",
    success: "bg-success-dark",
    warning: "bg-warning-dark",
    danger: "bg-danger-dark",
    info: "bg-info-dark",
};

export const ProgressBar = ({
    variant = "primary",
    value,
    max = 100,
    label,
    showValue = false,
    className,
    classNames,
}: ProgressBarProps) => {
    const normalizedValue = Math.min(Math.max(value, 0), max);
    const percent = max === 0 ? 0 : Math.round((normalizedValue / max) * 100);

    return (
        <div className={cn("w-full", className)}>
            {(label || showValue) && (
                <div
                    className={cn(
                        "mb-1.5 flex items-center justify-between gap-3",
                        classNames?.header,
                    )}
                >
                    {label && (
                        <span
                            className={cn(
                                "truncate text-sm font-medium text-main-200",
                                classNames?.label,
                            )}
                        >
                            {label}
                        </span>
                    )}

                    {showValue && (
                        <span
                            className={cn(
                                "shrink-0 text-xs text-main-400",
                                classNames?.value,
                            )}
                        >
                            {percent}%
                        </span>
                    )}
                </div>
            )}

            <div
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={max}
                aria-valuenow={normalizedValue}
                className={cn(
                    "h-2 w-full overflow-hidden rounded-full bg-main-800",
                    classNames?.track,
                )}
            >
                <div
                    className={cn(
                        "h-full rounded-full transition-all duration-300",
                        variantClasses[variant],
                        classNames?.indicator,
                    )}
                    style={{ width: `${percent}%` }}
                />
            </div>
        </div>
    );
};

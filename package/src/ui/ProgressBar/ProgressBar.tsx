import styles from "./ProgressBar.module.css";
import { cn } from "../../lib/utils";
import type { ColorVariantsBase } from "../_shared/types";
import type { ProgressBarProps } from "./types";

const variantClasses: Record<ColorVariantsBase, string> = {
    primary: styles.s0,
    secondary: styles.s1,
    tertiary: styles.s2,
    success: styles.s3,
    warning: styles.s4,
    danger: styles.s5,
    info: styles.s6,
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
        <div className={cn(styles.s7, className)}>
            {(label || showValue) && (
                <div className={cn(styles.s8, classNames?.header)}>
                    {label && (
                        <span className={cn(styles.s9, classNames?.label)}>
                            {label}
                        </span>
                    )}

                    {showValue && (
                        <span className={cn(styles.s10, classNames?.value)}>
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
                className={cn(styles.s11, classNames?.track)}
            >
                <div
                    className={cn(
                        styles.s12,
                        variantClasses[variant],
                        classNames?.indicator,
                    )}
                    style={{ width: `${percent}%` }}
                />
            </div>
        </div>
    );
};

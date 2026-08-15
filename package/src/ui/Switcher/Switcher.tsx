import styles from "./Switcher.module.css";
import { cn } from "../../lib/utils";
import type { SwitcherProps } from "./types";

export const Switcher = ({
    value,
    options,
    onChange,
    className,
    classNames,
    rounded = "rounded-full",
}: SwitcherProps) => {
    return (
        <div
            className={cn(
                styles.s0,
                `zvs-${rounded}`,
                className,
            )}
            role="tablist"
            aria-label="Switcher"
        >
            {options.map((option) => {
                const isActive = option.value === value;

                return (
                    <button
                        key={option.value}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => onChange(option.value)}
                        className={cn(
                            styles.s1,
                            `zvs-${rounded}`,
                            isActive
                                ? styles.s2
                                : styles.s3,
                            classNames?.tab,
                        )}
                    >
                        {option.label}
                    </button>
                );
            })}
        </div>
    );
};

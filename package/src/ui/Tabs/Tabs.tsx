import styles from "./Tabs.module.css";
import { cn } from "../../lib/utils";
import type { TabsProps } from "./types";

export function Tabs({
    value,
    onChange,
    options,
    className,
    classNames,
    tabProps,
    ...props
}: TabsProps) {
    return (
        <div className={cn(styles.s0, className)} {...props}>
            <div
                role="tablist"
                className={cn(
                    styles.s1,
                    classNames?.list,
                )}
            >
                {options.map((option) => {
                    const active = option.value === value;

                    return (
                        <button
                            key={option.value}
                            {...tabProps}
                            type="button"
                            role="tab"
                            aria-selected={active}
                            disabled={option.disabled}
                            onClick={() => onChange(option.value)}
                            className={cn(
                                styles.s2,
                                styles.s3,
                                styles.s4,
                                active &&
                                    styles.s5,
                                classNames?.tab,
                                active && classNames?.activeTab,
                                tabProps?.className,
                            )}
                        >
                            {option.label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

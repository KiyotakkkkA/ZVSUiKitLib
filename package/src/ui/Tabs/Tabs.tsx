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
        <div className={cn("w-fit", className)} {...props}>
            <div
                role="tablist"
                className={cn(
                    "flex items-end gap-4 border-b border-main-700",
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
                                "relative -mb-px px-4 py-3 text-sm font-medium text-main-300 transition-colors",
                                "hover:text-main-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main-400/40",
                                "disabled:cursor-not-allowed disabled:opacity-50",
                                active &&
                                    "border-b border-main-100 text-main-50",
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

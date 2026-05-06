import { cn } from "../../lib/utils";
import type { SwitcherProps } from "./types";

export const Switcher = ({
    value,
    options,
    onChange,
    className,
    classNames,
}: SwitcherProps) => {
    return (
        <div
            className={cn(
                "inline-flex items-center gap-1 rounded-xl border border-main-700/70 bg-main-900/55 p-1",
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
                            "cursor-pointer rounded-lg px-3 py-1.5 text-xs font-medium transition-colors",
                            isActive
                                ? "bg-main-700/80 text-main-100"
                                : "text-main-300 hover:bg-main-800/70 hover:text-main-100",
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

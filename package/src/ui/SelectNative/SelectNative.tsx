import { Icon } from "@iconify/react";
import { cn } from "../../lib/utils";
import type { SelectNativeProps } from "./types";

export function SelectNative({
    options,
    onChange,
    placeholder,
    className,
    classNames,
    value,
    defaultValue,
    disabled,
    rounded = "rounded-full",
    ...props
}: SelectNativeProps) {
    const hasPlaceholder = placeholder !== undefined;

    return (
        <div className={cn("relative inline-flex min-w-40", className)}>
            <select
                {...props}
                value={value}
                defaultValue={defaultValue ?? (hasPlaceholder ? "" : undefined)}
                disabled={disabled}
                onChange={(event) => onChange?.(event.target.value)}
                className={cn(
                    "h-10 w-full appearance-none border border-main-700 bg-main-800",
                    rounded && `zvs-${rounded}`,
                    "py-2 pl-3 pr-9 text-sm text-main-100 outline-none transition-colors",
                    "hover:border-main-600 focus-visible:border-main-500/70 focus-visible:ring-2 focus-visible:ring-main-500/25",
                    "disabled:cursor-not-allowed disabled:opacity-60",
                    classNames?.select,
                )}
            >
                {hasPlaceholder && (
                    <option value="" disabled>
                        {placeholder}
                    </option>
                )}
                {options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                        disabled={option.disabled}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
            <Icon
                icon="mdi:chevron-down"
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-main-400"
                aria-hidden
            />
        </div>
    );
}

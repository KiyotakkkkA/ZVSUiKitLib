import { cn } from "../../lib/utils";
import type { InputCheckSlidedProps } from "./types";

export const InputCheckSlided = ({
    checked,
    onChange,
    disabled = false,
    className,
    classNames,
    children,
}: InputCheckSlidedProps) => {
    return (
        <label
            className={cn(
                "inline-flex min-w-0 items-center gap-2 text-sm text-main-200",
                disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer",
                className,
            )}
        >
            <span
                className={cn(
                    "relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border border-main-600 transition-colors duration-200",
                    checked ? "bg-main-500/70" : "bg-main-800",
                    classNames?.control,
                )}
            >
                <input
                    type="checkbox"
                    role="switch"
                    checked={checked}
                    disabled={disabled}
                    onChange={(event) => onChange(event.target.checked)}
                    className={cn("peer sr-only", classNames?.input)}
                />
                <span
                    className={cn(
                        "inline-block h-4 w-4 transform rounded-full bg-main-100 transition-transform duration-200",
                        "peer-focus-visible:ring-2 peer-focus-visible:ring-main-300/50 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-main-800",
                        checked ? "translate-x-6" : "translate-x-1",
                        classNames?.thumb,
                    )}
                />
            </span>

            {children && (
                <span className={cn("min-w-0", classNames?.content)}>
                    {children}
                </span>
            )}
        </label>
    );
};

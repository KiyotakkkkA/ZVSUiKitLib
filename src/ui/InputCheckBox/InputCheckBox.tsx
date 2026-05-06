import { cn } from "../../lib/utils";
import type { InputCheckBoxProps } from "./types";

export const InputCheckBox = ({
    checked,
    onChange,
    disabled = false,
    className,
    classNames,
    ...props
}: InputCheckBoxProps) => {
    return (
        <label
            className={cn(
                "relative inline-flex h-5 w-5 items-center justify-center rounded-md",
                disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer",
                className,
            )}
        >
            <input
                {...props}
                type="checkbox"
                checked={checked}
                disabled={disabled}
                onChange={() => onChange(!checked)}
                className={cn("peer sr-only", classNames?.input)}
            />

            <span
                className={cn(
                    "absolute inset-0 rounded-md border border-main-600 bg-main-800",
                    "transition-colors duration-200",
                    "peer-checked:bg-main-700",
                    "peer-focus-visible:ring-2 peer-focus-visible:ring-main-300/50",
                    classNames?.indicator,
                )}
            />

            <span
                className={cn(
                    "relative h-2.5 w-2.5 rounded-sm bg-main-100",
                    "scale-0 opacity-0 transition-all duration-200",
                    "peer-checked:scale-100 peer-checked:opacity-100",
                    classNames?.mark,
                )}
            />
        </label>
    );
};

import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../lib/utils";

type BaseInputProps = Omit<
    ComponentPropsWithoutRef<"input">,
    "type" | "checked" | "onChange" | "className"
>;

type InputRadioProps = BaseInputProps & {
    checked: boolean;
    onChange: (checked: boolean) => void;
    className?: string;
    classNames?: {
        input?: string;
        dot?: string;
        indicator?: string;
    };
};

export const InputRadio = ({
    checked,
    onChange,
    disabled = false,
    className,
    classNames,
    ...props
}: InputRadioProps) => {
    return (
        <label
            className={cn(
                "relative inline-flex h-5 w-5 items-center justify-center rounded-full ",
                disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer",
                className,
            )}
        >
            <input
                type="radio"
                checked={checked}
                disabled={disabled}
                onChange={() => onChange(!checked)}
                className={cn("peer sr-only", classNames?.input)}
                {...props}
            />

            <span
                className={cn(
                    "absolute inset-0 rounded-full border border-main-600 bg-main-800",
                    "transition-colors duration-200",
                    "peer-checked:bg-main-700",
                    "peer-focus-visible:ring-2 peer-focus-visible:ring-main-300/50",
                    classNames?.indicator,
                )}
            />

            <span
                className={cn(
                    "relative h-2.5 w-2.5 rounded-full bg-main-100",
                    "scale-0 opacity-0 transition-all duration-200",
                    "peer-checked:scale-100 peer-checked:opacity-100",
                    classNames?.dot,
                )}
            />
        </label>
    );
};

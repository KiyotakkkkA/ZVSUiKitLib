import { cn } from "../../lib/utils";
import { useInputRadioGroup } from "../InputRadioGroup";
import type { InputRadioProps } from "./types";

export const InputRadio = ({
    checked,
    onChange,
    disabled = false,
    className,
    classNames,
    modelValue,
    ...props
}: InputRadioProps) => {
    const group = useInputRadioGroup();
    const isGrouped = Boolean(group && modelValue);
    const isChecked = isGrouped ? Boolean(group?.model[modelValue!]) : checked;
    const isDisabled = disabled || Boolean(group?.disabled);

    return (
        <label
            className={cn(
                "relative inline-flex h-5 w-5 items-center justify-center rounded-full ",
                isDisabled ? "cursor-not-allowed opacity-60" : "cursor-pointer",
                className,
            )}
        >
            <input
                {...props}
                type="radio"
                checked={Boolean(isChecked)}
                disabled={isDisabled}
                name={group?.name ?? props.name}
                value={modelValue}
                onChange={() => {
                    if (isGrouped) group?.select(modelValue!);
                    onChange?.(true);
                }}
                className={cn("peer sr-only", classNames?.input)}
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

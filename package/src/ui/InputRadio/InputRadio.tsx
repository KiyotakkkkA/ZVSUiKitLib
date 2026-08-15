import styles from "./InputRadio.module.css";
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
    children,
    ...props
}: InputRadioProps) => {
    const group = useInputRadioGroup();
    const isGrouped = Boolean(group && modelValue);
    const isChecked = isGrouped ? Boolean(group?.model[modelValue!]) : checked;
    const isDisabled = disabled || Boolean(group?.disabled);

    return (
        <label
            className={cn(
                styles.s0,
                isDisabled ? styles.s1 : styles.s2,
                className,
            )}
        >
            <span
                className={cn(
                    styles.s3,
                    classNames?.control,
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
                    className={cn(styles.s4, classNames?.input)}
                />
                <span
                    className={cn(
                        styles.s5,
                        styles.s6,
                        classNames?.indicator,
                    )}
                />
                <span
                    className={cn(
                        styles.s7,
                        styles.s8,
                        classNames?.dot,
                    )}
                />
            </span>

            {children && (
                <span className={cn(styles.s9, classNames?.content)}>
                    {children}
                </span>
            )}
        </label>
    );
};

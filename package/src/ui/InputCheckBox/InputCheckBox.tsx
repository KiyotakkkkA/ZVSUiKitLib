import styles from "./InputCheckBox.module.css";
import { cn } from "../../lib/utils";
import { useInputCheckBoxGroup } from "../InputCheckBoxGroup";
import type { InputCheckBoxProps } from "./types";

export const InputCheckBox = ({
    checked,
    onChange,
    disabled = false,
    className,
    classNames,
    modelValue,
    children,
    ...props
}: InputCheckBoxProps) => {
    const group = useInputCheckBoxGroup();
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
            <span className={cn(styles.s3, classNames?.control)}>
                <input
                    {...props}
                    type="checkbox"
                    checked={Boolean(isChecked)}
                    disabled={isDisabled}
                    value={modelValue}
                    onChange={() => {
                        const nextChecked = !isChecked;
                        if (isGrouped) group?.toggle(modelValue!);
                        onChange?.(nextChecked);
                    }}
                    className={cn(styles.s4, classNames?.input)}
                />
                <span
                    className={cn(styles.s5, styles.s6, classNames?.indicator)}
                />
                <span className={cn(styles.s7, styles.s8, classNames?.mark)} />
            </span>

            {children && (
                <span className={cn(styles.s9, classNames?.content)}>
                    {children}
                </span>
            )}
        </label>
    );
};

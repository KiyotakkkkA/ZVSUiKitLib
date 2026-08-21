import styles from "./InputCheckSlided.module.css";
import { cn } from "../../lib/utils";
import type { InputCheckSlidedProps } from "./types";

export const InputCheckSlided = ({
    checked,
    onChange,
    disabled = false,
    className,
    classNames,
    children,
    ref,
}: InputCheckSlidedProps) => {
    return (
        <label
            className={cn(
                styles.s0,
                disabled ? styles.s1 : styles.s2,
                className,
            )}
        >
            <span
                className={cn(
                    styles.s3,
                    checked ? styles.s4 : styles.s5,
                    classNames?.control,
                )}
            >
                <input
                    ref={ref}
                    type="checkbox"
                    role="switch"
                    checked={checked}
                    disabled={disabled}
                    onChange={(event) => onChange(event.target.checked)}
                    className={cn(styles.s6, classNames?.input)}
                />
                <span
                    className={cn(
                        styles.s7,
                        styles.s8,
                        checked ? styles.s9 : styles.s10,
                        classNames?.thumb,
                    )}
                />
            </span>

            {children && (
                <span className={cn(styles.s11, classNames?.content)}>
                    {children}
                </span>
            )}
        </label>
    );
};

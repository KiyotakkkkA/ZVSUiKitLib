import styles from "./SelectNative.module.css";
import { Icon } from "../_shared/icons";
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
        <div className={cn(styles.s0, className)}>
            <select
                {...props}
                value={value}
                defaultValue={defaultValue ?? (hasPlaceholder ? "" : undefined)}
                disabled={disabled}
                onChange={(event) => onChange?.(event.target.value)}
                className={cn(
                    styles.s1,
                    `zvs-${rounded}`,
                    styles.s2,
                    styles.s3,
                    styles.s4,
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
            <Icon icon="chevron-down" className={styles.s5} aria-hidden />
        </div>
    );
}

import styles from "./Field.module.css";
import { useId } from "react";
import { cn } from "../../lib/utils";
import type { FieldProps } from "./types";

/**
 * Wraps any control with a label, a description and an error message, and
 * hands the control the ids and ARIA attributes that tie the three together.
 */
export function Field({
    children,
    label,
    description,
    error,
    required,
    id,
    requiredMarker = "*",
    className,
    classNames,
    ref,
}: FieldProps) {
    const generatedId = useId();
    const controlId = id ?? generatedId;
    const descriptionId = `${controlId}-description`;
    const errorId = `${controlId}-error`;
    const invalid = Boolean(error);

    const describedBy =
        [description ? descriptionId : null, error ? errorId : null]
            .filter(Boolean)
            .join(" ") || undefined;

    return (
        <div ref={ref} className={cn(styles.root, className)}>
            {label && (
                <label
                    htmlFor={controlId}
                    className={cn(styles.label, classNames?.label)}
                >
                    {label}
                    {required && (
                        <span
                            aria-hidden
                            className={cn(
                                styles.requiredMarker,
                                classNames?.requiredMarker,
                            )}
                        >
                            {requiredMarker}
                        </span>
                    )}
                </label>
            )}

            {description && (
                <p
                    id={descriptionId}
                    className={cn(styles.description, classNames?.description)}
                >
                    {description}
                </p>
            )}

            <div className={cn(styles.control, classNames?.control)}>
                {children(
                    {
                        id: controlId,
                        "aria-describedby": describedBy,
                        "aria-invalid": invalid || undefined,
                        required: required || undefined,
                    },
                    { invalid },
                )}
            </div>

            {error && (
                <p
                    id={errorId}
                    role="alert"
                    className={cn(styles.error, classNames?.error)}
                >
                    {error}
                </p>
            )}
        </div>
    );
}

import styles from "./Button.module.css";
import { forwardRef } from "react";
import { cn } from "../../lib/utils";
import { Loader } from "../Loader/Loader";
import type { ButtonProps, ButtonVariants } from "./types";

const variants: Record<ButtonVariants, string> = {
    ghost: styles.ghost,
    primary: styles.primary,
    secondary: styles.secondary,
    tertiary: styles.tertiary,
    danger: styles.danger,
    success: styles.success,
    warning: styles.warning,
    info: styles.info,
    "primary-outline": styles.primaryOutline,
    "tertiary-outline": styles.tertiaryOutline,
    "danger-outline": styles.dangerOutline,
    "success-outline": styles.successOutline,
    "warning-outline": styles.warningOutline,
    "info-outline": styles.infoOutline,
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    function Button(
        {
            children,
            label,
            loading = false,
            loadingText,
            variant = "secondary",
            rounded = "rounded-full",
            className,
            classNames,
            disabled,
            ...props
        }: ButtonProps,
        ref,
    ) {
        const isDisabled = disabled || loading;

        return (
            <button
                ref={ref}
                type="button"
                aria-label={label}
                aria-busy={loading}
                disabled={isDisabled}
                className={cn(
                    styles.s0,
                    styles.s1,
                    `zvs-${rounded}`,
                    variant ? variants[variant] : "",
                    className,
                )}
                {...props}
            >
                {loading ? (
                    <>
                        <Loader
                            className={cn(styles.loaderIcon, classNames?.loaderIcon)}
                        />
                        {loadingText && (
                            <span className={classNames?.loaderText}>
                                {loadingText}
                            </span>
                        )}
                    </>
                ) : (
                    children
                )}
            </button>
        );
    },
);

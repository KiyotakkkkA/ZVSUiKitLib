import styles from "./Button.module.css";
import { cn } from "../../lib/utils";
import { Loader } from "../Loader/Loader";
import type { ButtonProps, ButtonVariants } from "./types";
import type { SizeVariants } from "../_shared/types";

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

const sizes: Record<SizeVariants, string> = {
    sm: styles.sizeSm,
    md: styles.sizeMd,
    lg: styles.sizeLg,
};

export function Button({
    children,
    label,
    loading = false,
    loadingText,
    variant = "secondary",
    rounded = "rounded-full",
    size,
    className,
    classNames,
    disabled,
    ref,
    ...props
}: ButtonProps) {
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
                size ? sizes[size] : "",
                variant ? variants[variant] : "",
                className,
            )}
            {...props}
        >
            {loading ? (
                <>
                    <Loader
                        className={cn(
                            styles.loaderIcon,
                            classNames?.loaderIcon,
                        )}
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
}

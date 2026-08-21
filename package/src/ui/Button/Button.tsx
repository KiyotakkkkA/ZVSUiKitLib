import { cn } from "../../lib/utils";
import { Loader } from "../Loader/Loader";
import type { ButtonProps, ButtonVariants } from "./types";
import type { SizeVariants } from "../_shared/types";

const variants: Record<ButtonVariants, string> = {
    ghost: "border-transparent bg-transparent text-main-50",
    primary: "border-transparent bg-main-50 text-main-900 hover:opacity-80",
    secondary: "border-transparent bg-main-700 text-main-50 hover:bg-main-600",
    tertiary: "border-transparent bg-accent-medium text-main-900 hover:bg-accent-dark",
    danger: "border-transparent bg-danger-medium text-main-50 hover:bg-danger-dark",
    success: "border-transparent bg-success-medium text-main-50 hover:bg-success-dark",
    warning: "border-transparent bg-warning-medium text-main-50 hover:bg-warning-dark",
    info: "border-transparent bg-info-medium text-main-50 hover:bg-info-dark",
    "primary-outline": "border-main-50 bg-transparent text-main-50 hover:bg-main-50 hover:text-main-900",
    "tertiary-outline": "border-accent-medium bg-transparent text-accent-medium hover:bg-accent-medium hover:text-main-900",
    "danger-outline": "border-danger-medium bg-transparent text-danger-medium hover:bg-danger-medium hover:text-main-900",
    "success-outline": "border-success-medium bg-transparent text-success-medium hover:bg-success-medium hover:text-main-900",
    "warning-outline": "border-warning-medium bg-transparent text-warning-medium hover:bg-warning-medium hover:text-main-900",
    "info-outline": "border-info-medium bg-transparent text-info-medium hover:bg-info-medium hover:text-main-900",
};

const sizes: Record<SizeVariants, string> = {
    sm: "px-2.5 py-1 text-xs",
    md: "px-3.5 py-2 text-sm",
    lg: "px-5 py-2.5 text-base",
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
                "inline-flex items-center justify-center gap-2 border transition-[color,background-color,border-color,opacity,transform,box-shadow] duration-150 ease-out motion-reduce:duration-[0.01ms]",
                "cursor-pointer p-1 disabled:cursor-not-allowed disabled:opacity-70",
                rounded,
                size ? sizes[size] : "",
                variant ? variants[variant] : "",
                className,
            )}
            {...props}
        >
            {loading ? (
                <>
                    <Loader
                        className={cn("h-4 w-4", classNames?.loaderIcon)}
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

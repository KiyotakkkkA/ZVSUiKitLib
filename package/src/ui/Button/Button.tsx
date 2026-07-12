import { forwardRef } from "react";
import { cn } from "../../lib/utils";
import { Loader } from "../Loader/Loader";
import type { ButtonVariants, ButtonProps } from "./types";

const variants: Record<ButtonVariants, string> = {
    ghost: "bg-transparent border-transparent text-main-50",
    primary:
        "bg-main-50 hover:opacity-80 border-transparent text-main-900 transition-opacity",
    secondary: "bg-main-700 hover:bg-main-600 border-transparent text-main-50",
    tertiary:
        "bg-accent-medium hover:bg-accent-dark border-transparent text-main-900",
    danger:
        "bg-danger-medium hover:bg-danger-dark border-transparent text-main-50",
    success:
        "bg-success-medium hover:bg-success-dark border-transparent text-main-50",
    warning:
        "bg-warning-medium hover:bg-warning-dark border-transparent text-main-50",
    "primary-outline":
        "bg-transparent hover:bg-main-50 hover:text-main-900 border-main-50 text-main-50",
    "tertiary-outline":
        "bg-transparent hover:bg-accent-medium hover:text-main-900 border-accent-medium text-accent-medium",
    "danger-outline":
        "bg-transparent hover:bg-danger-medium hover:text-main-900 border-danger-medium text-danger-medium",
    "success-outline":
        "bg-transparent hover:bg-success-medium hover:text-main-900 border-success-medium text-success-medium",
    "warning-outline":
        "bg-transparent hover:bg-warning-medium hover:text-main-900 border-warning-medium text-warning-medium",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    function Button(
        {
            children,
            label,
            loading = false,
            loadingText,
            variant = "secondary",
            shape = "rounded-md",
            className,
            classNames = {
                loaderIcon: "w-4 h-4",
                loaderText: "",
            },
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
                    "inline-flex items-center justify-center gap-2 border transition-colors",
                    "cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 p-1",
                    shape,
                    variant ? variants[variant] : "",
                    className,
                )}
                {...props}
            >
                {loading ? (
                    <>
                        <Loader className={classNames?.loaderIcon} />
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

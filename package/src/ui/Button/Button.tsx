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
    danger: "bg-red-500 hover:bg-red-600 border-transparent text-main-50",
    success: "bg-green-500 hover:bg-green-600 border-transparent text-main-50",
    warning:
        "bg-yellow-500 hover:bg-yellow-600 border-transparent text-main-50",
    "primary-outline":
        "bg-transparent hover:bg-main-50 hover:text-main-900 border-main-50 text-main-50",
    "tertiary-outline":
        "bg-transparent hover:bg-accent-medium hover:text-main-900 border-accent-medium text-accent-medium",
    "danger-outline":
        "bg-transparent hover:bg-red-500 hover:text-main-900 border-red-500 text-red-500",
    "success-outline":
        "bg-transparent hover:bg-green-500 hover:text-main-900 border-green-500 text-green-500",
    "warning-outline":
        "bg-transparent hover:bg-yellow-500 hover:text-main-900 border-yellow-500 text-yellow-500",
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

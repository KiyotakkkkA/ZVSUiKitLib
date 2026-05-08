import { forwardRef } from "react";
import { cn } from "../../lib/utils";
import type { ButtonVariants, ButtonProps } from "./types";

const variants: Record<ButtonVariants, string> = {
    ghost: "bg-transparent border-transparent text-main-50",
    primary:
        "bg-main-50 hover:opacity-80 border-transparent text-main-900 transition-opacity",
    secondary: "bg-main-700 hover:bg-main-600 border-transparent text-main-50",
    danger: "bg-red-500 hover:bg-red-600 border-transparent text-main-50",
    success: "bg-green-500 hover:bg-green-600 border-transparent text-main-50",
    warning:
        "bg-yellow-500 hover:bg-yellow-600 border-transparent text-main-50",
    "primary-outline":
        "bg-transparent hover:bg-main-50 hover:text-main-900 border-main-50 text-main-50",
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
            variant = "secondary",
            shape = "rounded-md",
            className,
            ...props
        }: ButtonProps,
        ref,
    ) {
        return (
            <button
                ref={ref}
                type="button"
                aria-label={label}
                className={cn(
                    "inline-flex items-center justify-center border transition-colors",
                    "cursor-pointer disabled:cursor-not-allowed disabled:opacity-70",
                    shape,
                    variant ? variants[variant] : "",
                    className,
                )}
                {...props}
            >
                {children}
            </button>
        );
    },
);

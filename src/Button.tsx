import { forwardRef, type ReactNode } from "react";
import { cn } from "./lib/utils";

type ButtonVariants =
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "warning";
type ButtonShape =
    | "rounded-none"
    | "rounded-sm"
    | "rounded-md"
    | "rounded-lg"
    | "rounded-full"
    | "rounded-l-full"
    | "rounded-r-full";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    label?: string;
    variant?: ButtonVariants | "";
    shape?: ButtonShape | "";
    className?: string;
}

const variants: Record<ButtonVariants, string> = {
    primary:
        "bg-white hover:opacity-80 border-transparent text-black transition-opacity",
    secondary: "bg-main-700 hover:bg-main-600 border-transparent text-white",
    danger: "bg-red-500 hover:bg-red-600 border-transparent text-white",
    success: "bg-green-500 hover:bg-green-600 border-transparent text-white",
    warning: "bg-yellow-500 hover:bg-yellow-600 border-transparent text-white",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    function Button(
        {
            children,
            label,
            variant = "secondary",
            shape = "rounded-full",
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

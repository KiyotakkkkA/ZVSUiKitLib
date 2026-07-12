import type { ColorVariantsBase } from "../..";
import { cn } from "../../lib/utils";
import type { BadgeProps } from "./types";

const variantClasses: Record<ColorVariantsBase, string> = {
    primary: "bg-main-100 text-main-800",
    secondary: "border-main-600/70 bg-main-700/60 text-main-100",
    tertiary: "border-accent-dark/60 bg-accent-medium/15 text-accent-light",
    success: "border-success-dark/60 bg-success-dark/40 text-success-light",
    warning: "border-warning-dark/60 bg-warning-dark/35 text-warning-light",
    danger: "border-danger-dark/60 bg-danger-dark/35 text-danger-light",
    info: "border-info-dark/60 bg-info-dark/35 text-info-light",
};

export function Badge({
    variant = "secondary",
    className,
    children,
    ...props
}: BadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium",
                variantClasses[variant],
                className,
            )}
            {...props}
        >
            {children}
        </span>
    );
}

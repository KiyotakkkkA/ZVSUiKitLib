import { cn } from "../../lib/utils";
import type { BadgeVariant, BadgeProps } from "./types";

const variantClasses: Record<BadgeVariant, string> = {
    neutral: "border-main-600/70 bg-main-700/60 text-main-100",
    success: "border-emerald-600/60 bg-emerald-700/40 text-emerald-100",
    warning: "border-amber-600/60 bg-amber-700/35 text-amber-100",
    danger: "border-rose-600/60 bg-rose-700/35 text-rose-100",
    info: "border-sky-600/60 bg-sky-700/35 text-sky-100",
};

export function Badge({
    variant = "neutral",
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

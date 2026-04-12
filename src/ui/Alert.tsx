import { Icon } from "@iconify/react";
import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/utils";

type AlertVariant = "neutral" | "success" | "warning" | "danger" | "info";

type AlertProps = HTMLAttributes<HTMLDivElement> & {
    variant?: AlertVariant;
    title?: ReactNode;
    icon?: ReactNode;
};

const variantStyles: Record<
    AlertVariant,
    { box: string; icon: string; defaultIcon: string }
> = {
    neutral: {
        box: "border-main-700/70 bg-main-900/60 text-main-100",
        icon: "text-main-300",
        defaultIcon: "mdi:information-outline",
    },
    success: {
        box: "border-emerald-700/50 bg-emerald-900/25 text-emerald-100",
        icon: "text-emerald-300",
        defaultIcon: "mdi:check-circle-outline",
    },
    warning: {
        box: "border-amber-700/50 bg-amber-900/25 text-amber-100",
        icon: "text-amber-300",
        defaultIcon: "mdi:alert-outline",
    },
    danger: {
        box: "border-rose-700/50 bg-rose-900/25 text-rose-100",
        icon: "text-rose-300",
        defaultIcon: "mdi:alert-circle-outline",
    },
    info: {
        box: "border-sky-700/50 bg-sky-900/25 text-sky-100",
        icon: "text-sky-300",
        defaultIcon: "mdi:information-outline",
    },
};

export function Alert({
    variant = "neutral",
    title,
    icon,
    className,
    children,
    ...props
}: AlertProps) {
    const variantStyle = variantStyles[variant];

    return (
        <div
            role="status"
            className={cn(
                "flex items-start gap-3 rounded-xl border px-3 py-2.5",
                variantStyle.box,
                className,
            )}
            {...props}
        >
            <span className={cn("mt-0.5 shrink-0", variantStyle.icon)}>
                {icon ?? (
                    <Icon
                        icon={variantStyle.defaultIcon}
                        width="16"
                        height="16"
                    />
                )}
            </span>
            <div className="min-w-0">
                {title && <p className="text-sm font-semibold">{title}</p>}
                {children && (
                    <div className="text-sm opacity-95">{children}</div>
                )}
            </div>
        </div>
    );
}

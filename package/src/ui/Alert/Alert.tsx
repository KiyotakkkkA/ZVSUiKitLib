import { Icon } from "@iconify/react";
import { cn } from "../../lib/utils";
import type { AlertProps } from "./types";
import type { ColorVariantsBase } from "../..";

const variantStyles: Record<
    ColorVariantsBase,
    { box: string; icon: string; defaultIcon: string }
> = {
    primary: {
        box: "bg-main-100 text-main-800",
        icon: "text-main-800",
        defaultIcon: "mdi:information",
    },
    secondary: {
        box: "border-main-700/70 bg-main-900/60 text-main-100",
        icon: "text-main-300",
        defaultIcon: "mdi:information-outline",
    },
    tertiary: {
        box: "border-accent-dark/50 bg-accent-medium/10 text-accent-light",
        icon: "text-accent-medium",
        defaultIcon: "mdi:sparkles-outline",
    },
    success: {
        box: "border-success-dark/50 bg-success-dark/25 text-success-light",
        icon: "text-success-light",
        defaultIcon: "mdi:check-circle-outline",
    },
    warning: {
        box: "border-warning-dark/50 bg-warning-dark/25 text-warning-light",
        icon: "text-warning-light",
        defaultIcon: "mdi:alert-outline",
    },
    danger: {
        box: "border-danger-dark/50 bg-danger-dark/25 text-danger-light",
        icon: "text-danger-light",
        defaultIcon: "mdi:close-octagon",
    },
    info: {
        box: "border-info-dark/50 bg-info-dark/25 text-info-light",
        icon: "text-info-light",
        defaultIcon: "mdi:information-outline",
    },
};

export function Alert({
    variant = "secondary",
    title,
    icon,
    className,
    classNames,
    children,
    rounded = "rounded-lg",
    ...props
}: AlertProps) {
    const variantStyle = variantStyles[variant];

    return (
        <div
            role="status"
            className={cn(
                "flex items-start gap-3 border px-3 py-2.5",
                rounded && `zvs-${rounded}`,
                variantStyle.box,
                className,
            )}
            {...props}
        >
            <span
                className={cn(
                    "mt-0.5 shrink-0",
                    variantStyle.icon,
                    classNames?.icon,
                )}
            >
                {icon ?? (
                    <Icon
                        icon={variantStyle.defaultIcon}
                        width="16"
                        height="16"
                    />
                )}
            </span>
            <div className={cn("min-w-0", classNames?.content)}>
                {title && (
                    <p
                        className={cn(
                            "text-sm font-semibold",
                            classNames?.title,
                        )}
                    >
                        {title}
                    </p>
                )}
                {children && (
                    <div className={cn("text-sm opacity-95", classNames?.body)}>
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
}

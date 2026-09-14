import { cn } from "../../lib/utils";
import type { ColorVariantsBase } from "../_shared/types";
import type { InputCheckSlidedProps } from "./types";

const variantStyles: Record<
    ColorVariantsBase,
    { control: string; thumb: string }
> = {
    primary: {
        control: "border-main-100 bg-main-100",
        thumb: "bg-main-900",
    },
    secondary: {
        control: "border-main-600 bg-main-500/70",
        thumb: "bg-main-100",
    },
    tertiary: {
        control: "border-accent-medium bg-accent-medium",
        thumb: "bg-main-900",
    },
    success: {
        control: "border-success-medium bg-success-medium",
        thumb: "bg-main-100",
    },
    warning: {
        control: "border-warning-medium bg-warning-medium",
        thumb: "bg-main-900",
    },
    danger: {
        control: "border-danger-medium bg-danger-medium",
        thumb: "bg-main-100",
    },
    info: {
        control: "border-info-medium bg-info-medium",
        thumb: "bg-main-100",
    },
};

export const InputCheckSlided = ({
    checked,
    onChange,
    disabled = false,
    className,
    classNames,
    children,
    ref,
    variant = "secondary",
}: InputCheckSlidedProps) => {
    const variantStyle = variantStyles[variant];

    return (
        <label
            className={cn(
                "inline-flex min-w-0 items-center gap-2 text-sm text-main-200",
                disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer",
                className,
            )}
        >
            <span
                className={cn(
                    "relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border transition-colors duration-200",
                    checked
                        ? variantStyle.control
                        : "border-main-600 bg-main-800",
                    classNames?.control,
                )}
            >
                <input
                    ref={ref}
                    type="checkbox"
                    role="switch"
                    checked={checked}
                    disabled={disabled}
                    onChange={(event) => onChange(event.target.checked)}
                    className={cn("peer sr-only", classNames?.input)}
                />
                <span
                    className={cn(
                        "inline-block h-4 w-4 transform rounded-full transition-[transform,background-color] duration-200",
                        checked ? variantStyle.thumb : "bg-main-100",
                        "peer-focus-visible:shadow-[0_0_0_2px_var(--color-main-800),0_0_0_4px_color-mix(in_srgb,var(--color-main-300)_50%,transparent)]",
                        checked ? "translate-x-6" : "translate-x-1",
                        classNames?.thumb,
                    )}
                />
            </span>

            {children && (
                <span className={cn("min-w-0", classNames?.content)}>
                    {children}
                </span>
            )}
        </label>
    );
};

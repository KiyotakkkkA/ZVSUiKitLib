import styles from "./Badge.module.css";
import type { ColorVariantsBase } from "../..";
import { cn } from "../../lib/utils";
import type { BadgeProps } from "./types";

const variantClasses: Record<ColorVariantsBase, string> = {
    primary: styles.s0,
    secondary: styles.s1,
    tertiary: styles.s2,
    success: styles.s3,
    warning: styles.s4,
    danger: styles.s5,
    info: styles.s6,
};

export function Badge({
    variant = "secondary",
    className,
    children,
    rounded = "rounded-lg",
    ...props
}: BadgeProps) {
    return (
        <span
            className={cn(
                styles.s7,
                `zvs-${rounded}`,
                variantClasses[variant],
                className,
            )}
            {...props}
        >
            {children}
        </span>
    );
}

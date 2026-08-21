import styles from "./Alert.module.css";
import { Icon, type IconName } from "../_shared/icons";
import { cn } from "../../lib/utils";
import type { AlertProps } from "./types";
import type { ColorVariantsBase } from "../..";

const variantStyles: Record<
    ColorVariantsBase,
    { box: string; icon: string; defaultIcon: IconName }
> = {
    primary: {
        box: styles.primary,
        icon: styles.primaryIcon,
        defaultIcon: "information",
    },
    secondary: {
        box: styles.secondary,
        icon: styles.secondaryIcon,
        defaultIcon: "information-outline",
    },
    tertiary: {
        box: styles.tertiary,
        icon: styles.tertiaryIcon,
        defaultIcon: "sparkles-outline",
    },
    success: {
        box: styles.success,
        icon: styles.successIcon,
        defaultIcon: "check-circle-outline",
    },
    warning: {
        box: styles.warning,
        icon: styles.warningIcon,
        defaultIcon: "alert-outline",
    },
    danger: {
        box: styles.danger,
        icon: styles.dangerIcon,
        defaultIcon: "close-octagon",
    },
    info: {
        box: styles.info,
        icon: styles.infoIcon,
        defaultIcon: "information-outline",
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
                styles.s0,
                `zvs-${rounded}`,
                variantStyle.box,
                className,
            )}
            {...props}
        >
            <span
                className={cn(styles.s1, variantStyle.icon, classNames?.icon)}
            >
                {icon ?? (
                    <Icon
                        icon={variantStyle.defaultIcon}
                        width="16"
                        height="16"
                    />
                )}
            </span>
            <div className={cn(styles.s2, classNames?.content)}>
                {title && (
                    <p className={cn(styles.s3, classNames?.title)}>{title}</p>
                )}
                {children && (
                    <div className={cn(styles.s4, classNames?.body)}>
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
}

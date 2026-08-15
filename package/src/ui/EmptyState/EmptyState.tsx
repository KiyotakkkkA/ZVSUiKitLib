import styles from "./EmptyState.module.css";
import { cn } from "../../lib/utils";
import type { EmptyStateProps } from "./types";

export const EmptyState = ({
    icon,
    title,
    description,
    action,
    className,
    classNames,
}: EmptyStateProps) => {
    return (
        <div className={cn(styles.s0, className)}>
            {icon && (
                <div className={cn(styles.s1, classNames?.icon)}>{icon}</div>
            )}

            <div className={cn(styles.s2, classNames?.title)}>{title}</div>

            {description && (
                <div className={cn(styles.s3, classNames?.description)}>
                    {description}
                </div>
            )}

            {action && (
                <div className={cn(styles.s4, classNames?.action)}>
                    {action}
                </div>
            )}
        </div>
    );
};

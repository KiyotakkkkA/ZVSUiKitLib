import styles from "./Skeleton.module.css";
import { cn } from "../../lib/utils";
import "./Skeleton.css";
import type { SkeletonProps, SkeletonRadius, SkeletonTone } from "./types";

const roundedClassName: Record<SkeletonRadius, string> = {
    none: styles.radiusNone,
    sm: styles.radiusSm,
    md: styles.radiusMd,
    lg: styles.radiusLg,
    xl: styles.radiusXl,
    full: styles.radiusFull,
};

const toneClassName: Record<SkeletonTone, string> = {
    default: styles.toneDefault,
    subtle: styles.toneSubtle,
    strong: styles.toneStrong,
};

export const Skeleton = ({
    animated = true,
    className,
    rounded = "md",
    tone = "default",
    "aria-hidden": ariaHidden = true,
    ...props
}: SkeletonProps) => {
    return (
        <div
            aria-hidden={ariaHidden}
            {...props}
            className={cn(
                styles.s0,
                toneClassName[tone],
                roundedClassName[rounded],
                animated && styles.s1,
                className,
            )}
        />
    );
};

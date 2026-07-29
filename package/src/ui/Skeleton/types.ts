import type { HTMLAttributes } from "react";

export type SkeletonRadius = "none" | "sm" | "md" | "lg" | "xl" | "full";

export type SkeletonTone = "default" | "subtle" | "strong";

export type SkeletonProps = HTMLAttributes<HTMLDivElement> & {
    /** The animated used by the component. */
    animated?: boolean;
    /** The border-radius preset applied to the component. */
    rounded?: SkeletonRadius;
    /** The color tone applied to the component. */
    tone?: SkeletonTone;
};

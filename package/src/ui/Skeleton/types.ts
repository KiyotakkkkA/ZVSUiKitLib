import type { HTMLAttributes } from "react";

export type SkeletonRadius = "none" | "sm" | "md" | "lg" | "xl" | "full";

export type SkeletonTone = "default" | "subtle" | "strong";

export type SkeletonProps = HTMLAttributes<HTMLDivElement> & {
    animated?: boolean;
    rounded?: SkeletonRadius;
    tone?: SkeletonTone;
};
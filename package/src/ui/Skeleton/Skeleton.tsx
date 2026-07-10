import { cn } from "../../lib/utils";
import "./Skeleton.css";
import type { SkeletonProps, SkeletonRadius, SkeletonTone } from "./types";

const roundedClassName: Record<SkeletonRadius, string> = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
};

const toneClassName: Record<SkeletonTone, string> = {
    default: "bg-main-700/75",
    subtle: "bg-main-800/80",
    strong: "bg-main-600/80",
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
                "relative block shrink-0 overflow-hidden",
                toneClassName[tone],
                roundedClassName[rounded],
                animated && "skeleton-shimmer",
                className,
            )}
        />
    );
};

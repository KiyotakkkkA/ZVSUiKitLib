import { cn } from "../../lib/utils";
import type { HeadingLevel, HeadingProps } from "./types";
const levelClasses: Record<HeadingLevel, string> = {
    1: "text-5xl leading-[1.08] tracking-[-0.045em]",
    2: "text-4xl leading-[1.12] tracking-[-0.035em]",
    3: "text-3xl leading-tight tracking-[-0.025em]",
    4: "text-2xl leading-tight tracking-[-0.02em]",
    5: "text-xl leading-snug tracking-[-0.015em]",
    6: "text-base leading-snug tracking-[-0.01em]",
};
export function Heading({ level = 2, children, className }: HeadingProps) {
    const Tag = `h${level}` as const;
    return (
        <Tag
            className={cn(
                "text-balance font-semibold text-main-100",
                levelClasses[level],
                className,
            )}
        >
            {children}
        </Tag>
    );
}

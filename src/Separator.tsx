import type { HTMLAttributes } from "react";
import { cn } from "./lib/utils";

type SeparatorProps = HTMLAttributes<HTMLDivElement> & {
    orientation?: "horizontal" | "vertical";
};

export function Separator({
    orientation = "horizontal",
    className,
    ...props
}: SeparatorProps) {
    return (
        <div
            role="separator"
            aria-orientation={orientation}
            className={cn(
                orientation === "horizontal"
                    ? "h-px w-full bg-main-700/70"
                    : "h-full w-px bg-main-700/70",
                className,
            )}
            {...props}
        />
    );
}

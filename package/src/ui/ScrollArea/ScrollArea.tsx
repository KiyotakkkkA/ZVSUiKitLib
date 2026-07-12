import { forwardRef } from "react";
import { cn } from "../../lib/utils";
import type { ScrollAreaProps } from "./types";

export const ScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>(
    (
        {
            orientation = "vertical",
            showScrollbar = true,
            className,
            children,
            ...props
        },
        ref,
    ) => {
        const overflowClassName =
            orientation === "horizontal"
                ? "overflow-x-auto overflow-y-hidden"
                : orientation === "vertical"
                  ? "overflow-y-auto overflow-x-hidden"
                  : "overflow-auto";

        return (
            <div
                ref={ref}
                className={cn(
                    "zvs-scroll-area",
                    !showScrollbar && "zvs-scroll-area--hidden",
                    overflowClassName,
                    className,
                )}
                {...props}
            >
                {children}
            </div>
        );
    },
);

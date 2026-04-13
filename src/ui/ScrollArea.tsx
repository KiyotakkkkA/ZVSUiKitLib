import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../lib/utils";

type ScrollAreaProps = HTMLAttributes<HTMLDivElement> & {
    orientation?: "horizontal" | "vertical" | "both";
};

export const ScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>(
    ({ orientation = "vertical", className, children, ...props }, ref) => {
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
                    overflowClassName,
                    "[scrollbar-width:thin]",
                    "[scrollbar-color:rgba(160,161,165,0.4)_transparent]",
                    "[&::-webkit-scrollbar]:w-2",
                    "[&::-webkit-scrollbar]:h-2",
                    "[&::-webkit-scrollbar-thumb]:rounded-full",
                    "[&::-webkit-scrollbar-thumb]:bg-[rgba(160,161,165,0.4)]",
                    className,
                )}
                {...props}
            >
                {children}
            </div>
        );
    },
);

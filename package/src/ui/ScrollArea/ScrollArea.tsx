import styles from "./ScrollArea.module.css";
import { cn } from "../../lib/utils";
import type { ScrollAreaProps } from "./types";

export function ScrollArea({
    orientation = "vertical",
    showScrollbar = true,
    className,
    children,
    ref,
    ...props
}: ScrollAreaProps) {
    const overflowClassName =
        orientation === "horizontal"
            ? styles.horizontal
            : orientation === "vertical"
              ? styles.vertical
              : styles.both;

    return (
        <div
            ref={ref}
            className={cn(
                styles.s0,
                !showScrollbar && styles.s1,
                overflowClassName,
                className,
            )}
            {...props}
        >
            {children}
        </div>
    );
}

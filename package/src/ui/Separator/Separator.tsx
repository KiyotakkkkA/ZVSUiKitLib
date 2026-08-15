import styles from "./Separator.module.css";
import { cn } from "../../lib/utils";
import type { SeparatorProps } from "./types";

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
                orientation === "horizontal" ? styles.s1 : styles.s2,
                className,
            )}
            {...props}
        />
    );
}

import styles from "./Blockquote.module.css";
import { cn } from "../../lib/utils";
import type { BlockquoteProps } from "./types";
export function Blockquote({
    children,
    cite,
    className,
    ...props
}: BlockquoteProps) {
    return (
        <blockquote className={cn(styles.s0, className)} {...props}>
            <div>{children}</div>
            {cite && <footer className={styles.s1}>{cite}</footer>}
        </blockquote>
    );
}

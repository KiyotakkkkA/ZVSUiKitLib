import styles from "./Code.module.css";
import type { Ref } from "react";
import { cn } from "../../lib/utils";
import type { CodeProps } from "./types";
export function Code({
    children,
    block = false,
    className,
    ref,
    ...props
}: CodeProps) {
    if (block)
        return (
            <pre
                ref={ref as Ref<HTMLPreElement>}
                className={cn(styles.s0, className)}
                {...props}
            >
                <code>{children}</code>
            </pre>
        );
    return (
        <code ref={ref} className={cn(styles.s1, className)} {...props}>
            {children}
        </code>
    );
}

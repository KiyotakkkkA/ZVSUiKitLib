import styles from "./Code.module.css";
import { cn } from "../../lib/utils";
import type { CodeProps } from "./types";
export function Code({
    children,
    block = false,
    className,
    ...props
}: CodeProps) {
    if (block)
        return (
            <pre
                className={cn(
                    styles.s0,
                    className,
                )}
                {...props}
            >
                <code>{children}</code>
            </pre>
        );
    return (
        <code
            className={cn(
                styles.s1,
                className,
            )}
            {...props}
        >
            {children}
        </code>
    );
}

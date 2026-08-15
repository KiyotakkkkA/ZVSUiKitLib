import styles from "./Strong.module.css";
import { cn } from "../../lib/utils";
import type { StrongProps } from "./types";
export function Strong({ className, ...props }: StrongProps) {
    return (
        <strong
            className={cn(styles.s0, className)}
            {...props}
        />
    );
}

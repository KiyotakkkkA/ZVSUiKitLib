import styles from "./Loader.module.css";
import { cn } from "../../lib/utils";
import type { LoaderProps } from "./types";

export function Loader({ className, ref }: LoaderProps) {
    return (
        <div
            ref={ref}
            className={cn(styles.s0, styles.s1, className)}
            role="status"
            aria-label="Loading"
        />
    );
}

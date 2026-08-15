import styles from "./Loader.module.css";
import { cn } from "../../lib/utils";
import type { LoaderProps } from "./types";

export function Loader({ className }: LoaderProps) {
    return (
        <div
            className={cn(styles.s0, styles.s1, className)}
            role="status"
            aria-label="Loading"
        />
    );
}

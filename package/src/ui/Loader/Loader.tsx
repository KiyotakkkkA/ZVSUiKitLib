import styles from "./Loader.module.css";
import { cn } from "../../lib/utils";
import { useLocale } from "../../hooks/useLocale";
import type { LoaderProps } from "./types";

export function Loader({ className, ref }: LoaderProps) {
    const t = useLocale().loader;

    return (
        <div
            ref={ref}
            className={cn(styles.s0, styles.s1, className)}
            role="status"
            aria-label={t.label}
        />
    );
}

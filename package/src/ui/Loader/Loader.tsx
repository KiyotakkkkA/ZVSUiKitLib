import styles from "./Loader.module.css";
import { cn } from "../../lib/utils";
import { defaultDictionary } from "../../locale/dictionary";
import type { LoaderProps } from "./types";

export function Loader({
    className,
    label = defaultDictionary.loader.label,
    ref,
}: LoaderProps) {
    return (
        <div
            ref={ref}
            className={cn(styles.s0, styles.s1, className)}
            role="status"
            aria-label={label}
        />
    );
}

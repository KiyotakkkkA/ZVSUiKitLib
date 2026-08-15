import styles from "./Quote.module.css";
import { cn } from "../../lib/utils";
import type { QuoteProps } from "./types";
export function Quote({ className, ...props }: QuoteProps) {
    return <q className={cn(styles.s0, className)} {...props} />;
}

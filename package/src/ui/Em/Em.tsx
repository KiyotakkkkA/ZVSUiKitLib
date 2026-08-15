import styles from "./Em.module.css";
import { cn } from "../../lib/utils";
import type { EmProps } from "./types";
export function Em({ className, ...props }: EmProps) {
    return <em className={cn(styles.s0, className)} {...props} />;
}

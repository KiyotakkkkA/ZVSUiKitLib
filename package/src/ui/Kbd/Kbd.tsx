import styles from "./Kbd.module.css";
import { cn } from "../../lib/utils";
import type { KbdProps } from "./types";
export function Kbd({ className, ...props }: KbdProps) {
    return <kbd className={cn(styles.s0, className)} {...props} />;
}

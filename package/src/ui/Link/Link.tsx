import styles from "./Link.module.css";
import { cn } from "../../lib/utils";
import type { LinkProps } from "./types";
export function Link({ className, ...props }: LinkProps) {
    return <a className={cn(styles.s0, className)} {...props} />;
}

import styles from "./Heading.module.css";
import { cn } from "../../lib/utils";
import type { HeadingLevel, HeadingProps } from "./types";
const levelClasses: Record<HeadingLevel, string> = {
    1: styles.s0,
    2: styles.s1,
    3: styles.s2,
    4: styles.s3,
    5: styles.s4,
    6: styles.s5,
};
export function Heading({ level = 2, children, className, ref }: HeadingProps) {
    const Tag = `h${level}` as const;
    return (
        <Tag
            ref={ref}
            className={cn(styles.s6, levelClasses[level], className)}
        >
            {children}
        </Tag>
    );
}

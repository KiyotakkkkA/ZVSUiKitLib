import styles from "./Text.module.css";
import { cn } from "../../lib/utils";
import type { TextProps, TextSize, TextTone } from "./types";
const toneClasses: Record<TextTone, string> = {
    default: styles.s0,
    muted: styles.s1,
    subtle: styles.s2,
};
const sizeClasses: Record<TextSize, string> = {
    sm: styles.s3,
    md: styles.s4,
    lg: styles.s5,
};
export function Text({
    children,
    className,
    tone = "default",
    size = "md",
    ...props
}: TextProps) {
    return (
        <p
            className={cn(sizeClasses[size], toneClasses[tone], className)}
            {...props}
        >
            {children}
        </p>
    );
}

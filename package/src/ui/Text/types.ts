import type { HTMLAttributes } from "react";
export type TextTone = "default" | "muted" | "subtle";
export type TextSize = "sm" | "md" | "lg";
export type TextProps = HTMLAttributes<HTMLParagraphElement> & {
    tone?: TextTone;
    size?: TextSize;
};

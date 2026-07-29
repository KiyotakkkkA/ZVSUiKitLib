import type { HTMLAttributes } from "react";
export type TextTone = "default" | "muted" | "subtle";
export type TextSize = "sm" | "md" | "lg";
export type TextProps = HTMLAttributes<HTMLParagraphElement> & {
    /** Selects the text contrast and color treatment. */
    tone?: TextTone;
    /** Selects the text font size and line height. */
    size?: TextSize;
};

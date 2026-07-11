import type { HTMLAttributes } from "react";

export type BadgeVariant =
    "neutral" | "tertiary" | "success" | "warning" | "danger" | "info";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
    variant?: BadgeVariant;
};

import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariants =
    | "ghost"
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "warning";

export type ButtonShape =
    | "rounded-none"
    | "rounded-sm"
    | "rounded-md"
    | "rounded-lg"
    | "rounded-xl"
    | "rounded-2xl"
    | "rounded-full"
    | "rounded-l-full"
    | "rounded-r-full";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    label?: string;
    variant?: ButtonVariants | "";
    shape?: ButtonShape | "";
};

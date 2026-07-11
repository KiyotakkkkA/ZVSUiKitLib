import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariants =
    | "ghost"
    | "primary"
    | "secondary"
    | "tertiary"
    | "danger"
    | "success"
    | "warning"
    | "primary-outline"
    | "tertiary-outline"
    | "danger-outline"
    | "success-outline"
    | "warning-outline";

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

export type ButtonClassNames = {
    loaderIcon?: string;
    loaderText?: string;
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    label?: string;
    loading?: boolean;
    loadingText?: string;
    variant?: ButtonVariants | "";
    shape?: ButtonShape | "";
    classNames?: ButtonClassNames;
};

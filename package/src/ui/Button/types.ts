import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { ColorVariantOutline, ColorVariantsBase } from "../..";

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

export type ButtonVariants = ColorVariantsBase | ColorVariantOutline | "ghost";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    label?: string;
    loading?: boolean;
    loadingText?: string;
    variant?: ButtonVariants | "";
    shape?: ButtonShape | "";
    classNames?: ButtonClassNames;
};

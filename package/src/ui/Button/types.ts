import type { ButtonHTMLAttributes, ReactNode } from "react";
import type {
    ColorVariantOutline,
    ColorVariantsBase,
    RoundVariants,
} from "../..";

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
    rounded?: RoundVariants | "";
    classNames?: ButtonClassNames;
};

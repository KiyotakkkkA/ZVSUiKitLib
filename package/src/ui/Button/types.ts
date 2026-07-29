import type { ButtonHTMLAttributes, ReactNode } from "react";
import type {
    ColorVariantOutline,
    ColorVariantsBase,
    RoundVariants,
} from "../..";

export type ButtonClassNames = {
    /** Applies CSS classes to the loading spinner. */
    loaderIcon?: string;
    /** Applies CSS classes to the loading-state text. */
    loaderText?: string;
};

export type ButtonVariants = ColorVariantsBase | ColorVariantOutline | "ghost";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    /** Renders the normal button content. */
    children: ReactNode;
    /** Provides an accessible label when the visible content is insufficient. */
    label?: string;
    /** Disables the button and displays its loading state. */
    loading?: boolean;
    /** Replaces the button content while loading. */
    loadingText?: string;
    /** Selects the button color and emphasis style. */
    variant?: ButtonVariants | "";
    /** Selects the button border radius. */
    rounded?: RoundVariants | "";
    /** Applies CSS classes to the button loading slots. */
    classNames?: ButtonClassNames;
};

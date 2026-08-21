import type { HTMLAttributes, ReactNode, Ref } from "react";
import type {
    ColorVariantsBase,
    DivClassName,
    ParagraphClassName,
    SpanClassName,
    RoundVariants,
} from "../_shared/types";

export type AlertClassNames = {
    /** Applies CSS classes to the icon wrapper. */
    icon?: SpanClassName;
    /** Applies CSS classes to the title and body container. */
    content?: DivClassName;
    /** Applies CSS classes to the title paragraph. */
    title?: ParagraphClassName;
    /** Applies CSS classes to the alert body container. */
    body?: DivClassName;
};

export type AlertProps = HTMLAttributes<HTMLDivElement> & {
    /** Receives the underlying `HTMLDivElement` node. */
    ref?: Ref<HTMLDivElement>;
    /** Selects the alert color scheme and default status icon. */
    variant?: ColorVariantsBase;
    /** Renders an optional heading above the alert body. */
    title?: ReactNode;
    /** Replaces the default icon selected by the alert variant. */
    icon?: ReactNode;
    /** Applies CSS classes to the alert slots. */
    classNames?: AlertClassNames;
    /** Selects the alert container border radius. */
    rounded?: RoundVariants | "";
};

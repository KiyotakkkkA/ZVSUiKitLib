import type { HTMLAttributes, ReactNode } from "react";
import type {
    ColorVariantsBase,
    DivClassName,
    ParagraphClassName,
    SpanClassName,
    RoundVariants,
} from "../_shared/types";

export type AlertClassNames = {
    icon?: SpanClassName;
    content?: DivClassName;
    title?: ParagraphClassName;
    body?: DivClassName;
};

export type AlertProps = HTMLAttributes<HTMLDivElement> & {
    variant?: ColorVariantsBase;
    title?: ReactNode;
    icon?: ReactNode;
    classNames?: AlertClassNames;
    rounded?: RoundVariants | "";
};

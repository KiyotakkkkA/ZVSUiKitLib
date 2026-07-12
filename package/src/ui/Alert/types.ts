import type { HTMLAttributes, ReactNode } from "react";
import type {
    ColorVariantsBase,
    DivClassName,
    ParagraphClassName,
    SpanClassName,
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
};

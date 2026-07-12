import type { ReactNode, TextareaHTMLAttributes } from "react";
import type {
    DivClassName,
    LabelClassName,
    ParagraphClassName,
    SpanClassName,
} from "../_shared/types";

export type InputBigClassNames = {
    root?: DivClassName;
    label?: LabelClassName;
    textarea?: TextareaHTMLAttributes<HTMLTextAreaElement>["className"];
    footer?: DivClassName;
    message?: ParagraphClassName;
    counter?: SpanClassName;
};

export type InputBigProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: ReactNode;
    description?: ReactNode;
    error?: ReactNode;
    showCount?: boolean;
    autoResize?: boolean;
    minRows?: number;
    maxRows?: number;
    classNames?: InputBigClassNames;
};

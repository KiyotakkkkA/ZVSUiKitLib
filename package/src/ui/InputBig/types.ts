import type { ReactNode, TextareaHTMLAttributes } from "react";
import type {
    DivClassName,
    LabelClassName,
    ParagraphClassName,
    SpanClassName,
} from "../_shared/types";

export type InputBigClassNames = {
    /** Text used for the label. */
    label?: LabelClassName;
    /** The textarea used by the component. */
    textarea?: TextareaHTMLAttributes<HTMLTextAreaElement>["className"];
    /** Content rendered for the footer. */
    footer?: DivClassName;
    /** Text used for the message. */
    message?: ParagraphClassName;
    /** The counter used by the component. */
    counter?: SpanClassName;
};

export type InputBigProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    /** Text used for the label. */
    label?: ReactNode;
    /** Text used for the description. */
    description?: ReactNode;
    /** The error used by the component. */
    error?: ReactNode;
    /** Whether show count is enabled. */
    showCount?: boolean;
    /** Whether the input grows automatically to fit its content. */
    autoResize?: boolean;
    /** The min rows used by the component. */
    minRows?: number;
    /** The max rows used by the component. */
    maxRows?: number;
    /** The CSS class applied to the component. */
    className?: string;
    /** CSS classes applied to the component slots. */
    classNames?: InputBigClassNames;
};

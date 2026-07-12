import type {
    HTMLAttributes,
    ReactNode,
} from "react";
import type { DivClassName, ParagraphClassName, SpanClassName } from "../_shared/types";

export type AlertVariant =
    "neutral" | "tertiary" | "success" | "warning" | "danger" | "info";

export type AlertClassNames = {
    icon?: SpanClassName;
    content?: DivClassName;
    title?: ParagraphClassName;
    body?: DivClassName;
};

export type AlertProps = HTMLAttributes<HTMLDivElement> & {
    variant?: AlertVariant;
    title?: ReactNode;
    icon?: ReactNode;
    classNames?: AlertClassNames;
};

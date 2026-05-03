import type {
    ComponentPropsWithoutRef,
    HTMLAttributes,
    ReactNode,
} from "react";

type DivClassName = ComponentPropsWithoutRef<"div">["className"];
type ParagraphClassName = ComponentPropsWithoutRef<"p">["className"];
type SpanClassName = ComponentPropsWithoutRef<"span">["className"];

export type AlertVariant =
    | "neutral"
    | "success"
    | "warning"
    | "danger"
    | "info";

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

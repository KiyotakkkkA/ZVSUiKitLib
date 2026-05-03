import type { ComponentPropsWithoutRef } from "react";

type DivClassName = ComponentPropsWithoutRef<"div">["className"];
type IconClassName = ComponentPropsWithoutRef<"svg">["className"];
type ParagraphClassName = ComponentPropsWithoutRef<"p">["className"];

export type PrettyBRClassNames = {
    divider?: DivClassName;
    icon?: IconClassName;
    label?: ParagraphClassName;
};

export type PrettyBRProps = {
    icon?: string;
    label?: string;
    size?: number;
    className?: DivClassName;
    classNames?: PrettyBRClassNames;
};

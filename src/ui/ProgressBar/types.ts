import type { ComponentPropsWithoutRef } from "react";

type DivClassName = ComponentPropsWithoutRef<"div">["className"];
type SpanClassName = ComponentPropsWithoutRef<"span">["className"];

export type ProgressBarClassNames = {
    header?: DivClassName;
    label?: SpanClassName;
    value?: SpanClassName;
    track?: DivClassName;
    indicator?: DivClassName;
};

export type ProgressBarProps = {
    value: number;
    max?: number;
    label?: string;
    showValue?: boolean;
    className?: DivClassName;
    classNames?: ProgressBarClassNames;
};

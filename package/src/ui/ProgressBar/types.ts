import type { DivClassName, SpanClassName } from "../_shared/types";

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

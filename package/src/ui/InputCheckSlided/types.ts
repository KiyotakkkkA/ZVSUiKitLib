import type { ReactNode } from "react";
import type {
    InputClassName,
    LabelClassName,
    SpanClassName,
} from "../_shared/types";

export type InputCheckSlidedClassNames = {
    input?: InputClassName;
    control?: SpanClassName;
    content?: SpanClassName;
    thumb?: SpanClassName;
};

export type InputCheckSlidedProps = {
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    type?: "slided";
    children?: ReactNode;
    className?: LabelClassName;
    classNames?: InputCheckSlidedClassNames;
};

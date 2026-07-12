import type { ComponentPropsWithoutRef, ReactNode } from "react";
import type {
    InputClassName,
    LabelClassName,
    SpanClassName,
} from "../_shared/types";

type BaseInputProps = Omit<
    ComponentPropsWithoutRef<"input">,
    "type" | "checked" | "onChange" | "className" | "children"
>;

export type InputCheckBoxClassNames = {
    input?: InputClassName;
    control?: SpanClassName;
    content?: SpanClassName;
    mark?: SpanClassName;
    indicator?: SpanClassName;
};

export type InputCheckBoxProps = BaseInputProps & {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    modelValue?: string;
    children?: ReactNode;
    className?: LabelClassName;
    classNames?: InputCheckBoxClassNames;
};

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

export type InputRadioClassNames = {
    input?: InputClassName;
    control?: SpanClassName;
    content?: SpanClassName;
    dot?: SpanClassName;
    indicator?: SpanClassName;
};

export type InputRadioProps = BaseInputProps & {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    modelValue?: string;
    children?: ReactNode;
    className?: LabelClassName;
    classNames?: InputRadioClassNames;
};

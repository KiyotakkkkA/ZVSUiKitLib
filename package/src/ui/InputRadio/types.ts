import type { ComponentPropsWithoutRef } from "react";

import type { InputClassName, LabelClassName, SpanClassName } from "../_shared/types";

type BaseInputProps = Omit<
    ComponentPropsWithoutRef<"input">,
    "type" | "checked" | "onChange" | "className"
>;

export type InputRadioClassNames = {
    input?: InputClassName;
    dot?: SpanClassName;
    indicator?: SpanClassName;
};

export type InputRadioProps = BaseInputProps & {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    modelValue?: string;
    className?: LabelClassName;
    classNames?: InputRadioClassNames;
};

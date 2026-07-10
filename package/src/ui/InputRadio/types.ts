import type { ComponentPropsWithoutRef } from "react";

type LabelClassName = ComponentPropsWithoutRef<"label">["className"];
type InputClassName = ComponentPropsWithoutRef<"input">["className"];
type SpanClassName = ComponentPropsWithoutRef<"span">["className"];

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
    checked: boolean;
    onChange: (checked: boolean) => void;
    className?: LabelClassName;
    classNames?: InputRadioClassNames;
};

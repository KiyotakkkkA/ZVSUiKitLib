import type { ComponentPropsWithoutRef } from "react";

type LabelClassName = ComponentPropsWithoutRef<"label">["className"];
type InputClassName = ComponentPropsWithoutRef<"input">["className"];
type SpanClassName = ComponentPropsWithoutRef<"span">["className"];

type BaseInputProps = Omit<
    ComponentPropsWithoutRef<"input">,
    "type" | "checked" | "onChange" | "className"
>;

export type InputCheckBoxClassNames = {
    input?: InputClassName;
    mark?: SpanClassName;
    indicator?: SpanClassName;
};

export type InputCheckBoxProps = BaseInputProps & {
    checked: boolean;
    onChange: (checked: boolean) => void;
    className?: LabelClassName;
    classNames?: InputCheckBoxClassNames;
};

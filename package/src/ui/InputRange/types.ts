import type { ComponentPropsWithoutRef, InputHTMLAttributes } from "react";

type DivClassName = ComponentPropsWithoutRef<"div">["className"];
type InputClassName = ComponentPropsWithoutRef<"input">["className"];
type SpanClassName = ComponentPropsWithoutRef<"span">["className"];

type BaseInputRangeProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "type" | "value" | "onChange" | "min" | "max" | "step" | "className"
>;

export type InputRangeValue = [number, number];

export type InputRangeClassNames = {
    track?: DivClassName;
    fill?: DivClassName;
    thumb?: SpanClassName;
    input?: InputClassName;
    value?: SpanClassName;
    thumbLabel?: SpanClassName;
};

export type InputRangeProps = BaseInputRangeProps & {
    value: InputRangeValue;
    onChange: (value: InputRangeValue) => void;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    className?: DivClassName;
    classNames?: InputRangeClassNames;
    showThumbLabels?: boolean;
    thumbLabels?: [string, string];
    valueFormatter?: (value: number) => string;
};

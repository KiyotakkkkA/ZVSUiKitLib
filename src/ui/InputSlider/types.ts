import type { ComponentPropsWithoutRef, InputHTMLAttributes } from "react";

type DivClassName = ComponentPropsWithoutRef<"div">["className"];
type InputClassName = ComponentPropsWithoutRef<"input">["className"];
type SpanClassName = ComponentPropsWithoutRef<"span">["className"];

type BaseInputSliderProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "type" | "value" | "onChange" | "min" | "max" | "step" | "className"
>;

export type InputSliderClassNames = {
    track?: DivClassName;
    fill?: DivClassName;
    thumb?: SpanClassName;
    input?: InputClassName;
    value?: SpanClassName;
};

export type InputSliderProps = BaseInputSliderProps & {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    className?: DivClassName;
    classNames?: InputSliderClassNames;
    showValue?: boolean;
    valueFormatter?: (value: number) => string;
};

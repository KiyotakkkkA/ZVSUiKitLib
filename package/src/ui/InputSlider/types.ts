import type { InputHTMLAttributes } from "react";

import type {
    DivClassName,
    InputClassName,
    SpanClassName,
} from "../_shared/types";

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

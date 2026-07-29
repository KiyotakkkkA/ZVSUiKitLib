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
    /** Applies CSS classes to the full slider track. */
    track?: DivClassName;
    /** Applies CSS classes to the filled track segment. */
    fill?: DivClassName;
    /** Applies CSS classes to the draggable thumb. */
    thumb?: SpanClassName;
    /** Applies CSS classes to the native range input. */
    input?: InputClassName;
    /** Applies CSS classes to the visible value label. */
    value?: SpanClassName;
};

export type InputSliderProps = BaseInputSliderProps & {
    /** Controls the current numeric slider value. */
    value: number;
    /** Runs with the next value while the slider changes. */
    onChange: (value: number) => void;
    /** Sets the minimum selectable value. */
    min?: number;
    /** Sets the maximum selectable value. */
    max?: number;
    /** Sets the increment between selectable values. */
    step?: number;
    /** Prevents interaction with the slider. */
    disabled?: boolean;
    /** Applies CSS classes to the slider root element. */
    className?: DivClassName;
    /** Applies CSS classes to the slider slots. */
    classNames?: InputSliderClassNames;
    /** Displays the formatted current value beside the slider. */
    showValue?: boolean;
    /** Formats the current value for its visible label. */
    valueFormatter?: (value: number) => string;
};

import type { InputHTMLAttributes } from "react";

import type {
    DivClassName,
    InputClassName,
    SpanClassName,
} from "../_shared/types";

type BaseInputRangeProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "type" | "value" | "onChange" | "min" | "max" | "step" | "className"
>;

export type InputRangeValue = [number, number];

export type InputRangeClassNames = {
    /** Applies CSS classes to the full range track. */
    track?: DivClassName;
    /** Applies CSS classes to the segment between both thumbs. */
    fill?: DivClassName;
    /** Applies CSS classes to both draggable thumbs. */
    thumb?: SpanClassName;
    /** Applies CSS classes to both native range inputs. */
    input?: InputClassName;
    /** Applies CSS classes to the visible boundary values. */
    value?: SpanClassName;
    /** Applies CSS classes to the accessible thumb labels. */
    thumbLabel?: SpanClassName;
};

export type InputRangeProps = BaseInputRangeProps & {
    /** Controls the lower and upper selected boundaries. */
    value: InputRangeValue;
    /** Runs with the updated lower and upper boundaries. */
    onChange: (value: InputRangeValue) => void;
    /** Sets the minimum selectable boundary. */
    min?: number;
    /** Sets the maximum selectable boundary. */
    max?: number;
    /** Sets the increment between selectable boundary values. */
    step?: number;
    /** Prevents interaction with both range thumbs. */
    disabled?: boolean;
    /** Applies CSS classes to the range root element. */
    className?: DivClassName;
    /** Applies CSS classes to the range slots. */
    classNames?: InputRangeClassNames;
    /** Displays a visible label for each range thumb. */
    showThumbLabels?: boolean;
    /** Provides accessible labels for the lower and upper thumbs. */
    thumbLabels?: [string, string];
    /** Formats each boundary value for display. */
    valueFormatter?: (value: number) => string;
};

import type { InputHTMLAttributes } from "react";

import type { DivClassName, InputClassName } from "../_shared/types";

type BaseInputPinsProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange" | "type" | "maxLength" | "className"
>;

export type InputPinsClassNames = {
    /** The group used by the component. */
    group?: DivClassName;
    /** The input used by the component. */
    input?: InputClassName;
};

export type InputPinsProps = BaseInputPinsProps & {
    /** The value used by the component. */
    value: string;
    /** Callback invoked when change occurs. */
    onChange: (value: string) => void;
    /** The length used by the component. */
    length?: number;
    /** Text used for the label. */
    label?: string;
    /** Whether disabled is enabled. */
    disabled?: boolean;
    /** The mask used by the component. */
    mask?: boolean;
    /** CSS classes applied to the root element. */
    className?: DivClassName;
    /** CSS classes applied to the component slots. */
    classNames?: InputPinsClassNames;
};

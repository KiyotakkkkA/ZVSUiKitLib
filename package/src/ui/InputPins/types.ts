import type { InputHTMLAttributes } from "react";

import type { DivClassName, InputClassName } from "../_shared/types";

type BaseInputPinsProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange" | "type" | "maxLength" | "className"
>;

export type InputPinsClassNames = {
    group?: DivClassName;
    input?: InputClassName;
};

export type InputPinsProps = BaseInputPinsProps & {
    value: string;
    onChange: (value: string) => void;
    length?: number;
    label?: string;
    disabled?: boolean;
    mask?: boolean;
    className?: DivClassName;
    classNames?: InputPinsClassNames;
};

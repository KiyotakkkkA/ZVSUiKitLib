import type { InputHTMLAttributes } from "react";
import type {
    DivClassName,
    RoundVariants,
    SvgClassName,
} from "../_shared/types";

export type InputPreset = "password" | "search" | "email" | "phone" | "url";
export type InputPresets = InputPreset;

export type InputSmallClassNames = {
    wrapper?: DivClassName;
    icon?: SvgClassName;
    leadingIcon?: SvgClassName;
    trailingButton?: string;
};

export type InputSmallProps = InputHTMLAttributes<HTMLInputElement> & {
    classNames?: InputSmallClassNames;
    preset?: InputPresets;
    onClear?: () => void;
    rounded?: RoundVariants | "";
};

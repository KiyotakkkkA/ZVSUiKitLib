import type { InputHTMLAttributes } from "react";
import type { DivClassName, SvgClassName } from "../_shared/types";

export type InputSmallClassNames = {
    wrapper?: DivClassName;
    icon?: SvgClassName;
};

export type InputSmallProps = InputHTMLAttributes<HTMLInputElement> & {
    classNames?: InputSmallClassNames;
};

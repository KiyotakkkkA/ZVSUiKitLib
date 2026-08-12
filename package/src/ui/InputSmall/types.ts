import type { InputHTMLAttributes } from "react";
import type {
    InputClassName,
    RoundVariants,
    SvgClassName,
} from "../_shared/types";

export type InputPreset = "password" | "search" | "email" | "phone" | "url";
export type InputPresets = InputPreset;

export type InputSmallClassNames = {
    /** The input element used by the component. */
    input?: InputClassName;
    /** Content rendered for the icon. */
    icon?: SvgClassName;
    /** Content rendered for the leading icon. */
    leadingIcon?: SvgClassName;
    /** The trailing button used by the component. */
    trailingButton?: string;
};

export type InputSmallProps = InputHTMLAttributes<HTMLInputElement> & {
    /** CSS classes applied to the component slots. */
    classNames?: InputSmallClassNames;
    /** The preset used by the component. */
    preset?: InputPresets;
    /** Callback invoked when clear occurs. */
    onClear?: () => void;
    /** The border-radius preset applied to the component. */
    rounded?: RoundVariants | "";
};

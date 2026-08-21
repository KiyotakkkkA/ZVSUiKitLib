import type { Ref } from "react";
import type {
    ButtonClassName,
    DivClassName,
    RoundVariants,
} from "../_shared/types";

export type SwitcherOption = {
    /** The value used by the component. */
    value: string;
    /** Text used for the label. */
    label: string;
};

export type SwitcherClassNames = {
    /** The tab used by the component. */
    tab?: ButtonClassName;
};

export type SwitcherProps = {
    /** Receives the radio group root element. */
    ref?: Ref<HTMLDivElement>;
    /** The value used by the component. */
    value: string;
    /** The options used by the component. */
    options: SwitcherOption[];
    /** Callback invoked when change occurs. */
    onChange: (value: string) => void;
    /** Accessible name for the radio group. */
    label?: string;
    /** CSS classes applied to the root element. */
    className?: DivClassName;
    /** CSS classes applied to the component slots. */
    classNames?: SwitcherClassNames;
    /** The border-radius preset applied to the component. */
    rounded?: RoundVariants | "";
};

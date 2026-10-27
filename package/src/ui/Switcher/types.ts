import type { ReactNode, Ref } from "react";
import type {
    ButtonClassName,
    DivClassName,
    RoundVariants,
} from "../_shared/types";

export type SwitcherRootProps = {
    /** Receives the radio group root element. */
    ref?: Ref<HTMLDivElement>;
    /** The value of the currently selected option. */
    model: string;
    /** Callback invoked with the value of the option that was picked. */
    onModelChange: (value: string) => void;
    /** Accessible name for the radio group. Defaults to the `switcher.label` string from the active locale dictionary. */
    label?: string;
    /** The border-radius preset applied to the root and every option. */
    rounded?: RoundVariants | "";
    /** CSS classes applied to the root element. */
    className?: DivClassName;
    /** Renders the `Switcher.Option` elements. */
    children: ReactNode;
};

export type SwitcherOptionProps = {
    /** The value written to the root `model` when this option is picked. */
    value: string;
    /** Disables picking this option. */
    disabled?: boolean;
    /** Accessible name, for options that render only an icon. */
    "aria-label"?: string;
    /** CSS classes applied to the option button. */
    className?: ButtonClassName;
    /** Content rendered inside the option: text, icons, badges. */
    children: ReactNode;
};

export type SwitcherContextValue = {
    /** The value of the currently selected option. */
    model: string;
    /** Selects the option with this value. */
    select: (value: string) => void;
    /** The border-radius preset shared by every option. */
    rounded: RoundVariants | "";
};

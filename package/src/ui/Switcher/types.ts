import type { ButtonClassName, DivClassName, RoundVariants } from "../_shared/types";

export type SwitcherOption = {
    value: string;
    label: string;
};

export type SwitcherClassNames = {
    tab?: ButtonClassName;
};

export type SwitcherProps = {
    value: string;
    options: SwitcherOption[];
    onChange: (value: string) => void;
    className?: DivClassName;
    classNames?: SwitcherClassNames;
    rounded?: RoundVariants | "";
};

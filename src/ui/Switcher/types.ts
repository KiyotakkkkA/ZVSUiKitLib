import type { ComponentPropsWithoutRef } from "react";

type DivClassName = ComponentPropsWithoutRef<"div">["className"];
type ButtonClassName = ComponentPropsWithoutRef<"button">["className"];

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
};

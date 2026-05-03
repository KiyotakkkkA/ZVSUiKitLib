import type { ComponentPropsWithoutRef, ReactNode } from "react";

type DivClassName = ComponentPropsWithoutRef<"div">["className"];
type ButtonClassName = ComponentPropsWithoutRef<"button">["className"];
type InputClassName = ComponentPropsWithoutRef<"input">["className"];
type SpanClassName = ComponentPropsWithoutRef<"span">["className"];

export type SelectOption = {
    value: string;
    label: string;
    icon?: ReactNode;
    onClick?: () => void;
};

export type SelectClassNames = {
    trigger?: ButtonClassName;
    menu?: DivClassName;
    search?: InputClassName;
    option?: ButtonClassName;
    optionLabel?: SpanClassName;
};

export type SelectProps = {
    value: string;
    onChange: (value: string) => void;
    options: SelectOption[];
    placeholder?: string;
    searchable?: boolean;
    searchPlaceholder?: string;
    emptyMessage?: string;
    disabled?: boolean;
    className?: DivClassName;
    classNames?: SelectClassNames;
    menuWidth?: number | string;
    menuPlacement?: "bottom" | "top";
    closeOnSelect?: boolean;
};

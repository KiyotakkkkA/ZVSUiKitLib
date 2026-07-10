import type { ComponentPropsWithoutRef, InputHTMLAttributes } from "react";

type DivClassName = ComponentPropsWithoutRef<"div">["className"];
type InputClassName = ComponentPropsWithoutRef<"input">["className"];

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

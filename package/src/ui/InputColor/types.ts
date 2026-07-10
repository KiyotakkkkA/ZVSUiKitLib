import type {
    ComponentPropsWithoutRef,
    InputHTMLAttributes,
    ReactNode,
} from "react";

type DivClassName = ComponentPropsWithoutRef<"div">["className"];
type LabelClassName = ComponentPropsWithoutRef<"label">["className"];
type InputClassName = ComponentPropsWithoutRef<"input">["className"];
type SpanClassName = ComponentPropsWithoutRef<"span">["className"];
type ButtonClassName = ComponentPropsWithoutRef<"button">["className"];

type BaseInputColorProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "type" | "value" | "defaultValue" | "onChange" | "size" | "className"
>;

export type InputColorSize = "sm" | "md" | "lg";

export type InputColorClassNames = {
    label?: LabelClassName;
    control?: ButtonClassName;
    picker?: DivClassName;
    preview?: SpanClassName;
    input?: InputClassName;
    value?: SpanClassName;
    panel?: DivClassName;
    colorArea?: DivClassName;
    colorAreaThumb?: SpanClassName;
    hueTrack?: DivClassName;
    hueThumb?: SpanClassName;
    alphaTrack?: DivClassName;
    alphaThumb?: SpanClassName;
    eyeDropper?: ButtonClassName;
    hexInput?: InputClassName;
    palette?: DivClassName;
    preset?: ButtonClassName;
};

export type InputColorProps = BaseInputColorProps & {
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    label?: ReactNode;
    showValue?: boolean;
    size?: InputColorSize;
    palettePresets?: string[] | null;
    valueFormatter?: (value: string) => ReactNode;
    className?: DivClassName;
    classNames?: InputColorClassNames;
};

import type { InputHTMLAttributes, ReactNode } from "react";
import type {
    ButtonClassName,
    DivClassName,
    InputClassName,
    LabelClassName,
    RoundVariants,
    SizeVariants,
    SpanClassName,
} from "../_shared/types";

type BaseInputColorProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "type" | "value" | "defaultValue" | "onChange" | "size" | "className"
>;

export type InputColorSize = SizeVariants;

export type InputColorClassNames = {
    /** Text used for the label. */
    label?: LabelClassName;
    /** The control used by the component. */
    control?: ButtonClassName;
    /** The picker used by the component. */
    picker?: DivClassName;
    /** The preview used by the component. */
    preview?: SpanClassName;
    /** The input used by the component. */
    input?: InputClassName;
    /** The value used by the component. */
    value?: SpanClassName;
    /** The panel used by the component. */
    panel?: DivClassName;
    /** The color area used by the component. */
    colorArea?: DivClassName;
    /** The color area thumb used by the component. */
    colorAreaThumb?: SpanClassName;
    /** The hue track used by the component. */
    hueTrack?: DivClassName;
    /** The hue thumb used by the component. */
    hueThumb?: SpanClassName;
    /** The alpha track used by the component. */
    alphaTrack?: DivClassName;
    /** The alpha thumb used by the component. */
    alphaThumb?: SpanClassName;
    /** The eye dropper used by the component. */
    eyeDropper?: ButtonClassName;
    /** The hex input used by the component. */
    hexInput?: InputClassName;
    /** The palette used by the component. */
    palette?: DivClassName;
    /** The preset used by the component. */
    preset?: ButtonClassName;
};

export type InputColorProps = BaseInputColorProps & {
    /** The value used by the component. */
    value?: string;
    /** The default value used by the component. */
    defaultValue?: string;
    /** The rounded variant for the component. */
    rounded?: RoundVariants | "";
    /** Callback invoked when change occurs. */
    onChange?: (value: string) => void;
    /** Text used for the label. */
    label?: ReactNode;
    /** Whether show value is enabled. */
    showValue?: boolean;
    /** The size preset applied to the color input trigger. */
    size?: InputColorSize;
    /** The palette presets used by the component. */
    palettePresets?: string[] | null;
    /** The value formatter used by the component. */
    valueFormatter?: (value: string) => ReactNode;
    /** CSS classes applied to the root element. */
    className?: DivClassName;
    /** CSS classes applied to the component slots. */
    classNames?: InputColorClassNames;
};

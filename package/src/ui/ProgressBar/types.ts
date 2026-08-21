import type { Ref } from "react";
import type {
    ColorVariantsBase,
    DivClassName,
    SpanClassName,
} from "../_shared/types";

export type ProgressBarClassNames = {
    /** Content rendered for the header. */
    header?: DivClassName;
    /** Text used for the label. */
    label?: SpanClassName;
    /** The value used by the component. */
    value?: SpanClassName;
    /** The track used by the component. */
    track?: DivClassName;
    /** The indicator used by the component. */
    indicator?: DivClassName;
};

export type ProgressBarProps = {
    /** Receives the progress bar root element. */
    ref?: Ref<HTMLDivElement>;
    /** The visual style variant applied to the component. */
    variant?: ColorVariantsBase;
    /** The value used by the component. */
    value: number;
    /** The max used by the component. */
    max?: number;
    /** Text used for the label. */
    label?: string;
    /** Whether show value is enabled. */
    showValue?: boolean;
    /** CSS classes applied to the root element. */
    className?: DivClassName;
    /** CSS classes applied to the component slots. */
    classNames?: ProgressBarClassNames;
};

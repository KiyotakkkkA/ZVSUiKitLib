import type { ComponentPropsWithoutRef, ReactNode } from "react";
import type {
    InputClassName,
    LabelClassName,
    SpanClassName,
} from "../_shared/types";

type BaseInputProps = Omit<
    ComponentPropsWithoutRef<"input">,
    "type" | "checked" | "onChange" | "className" | "children"
>;

export type InputRadioClassNames = {
    /** Applies CSS classes to the native radio input. */
    input?: InputClassName;
    /** Applies CSS classes to the visible radio control. */
    control?: SpanClassName;
    /** Applies CSS classes to the label content. */
    content?: SpanClassName;
    /** Applies CSS classes to the selected-state dot. */
    dot?: SpanClassName;
    /** Applies CSS classes to the selected-state indicator. */
    indicator?: SpanClassName;
};

export type InputRadioProps = BaseInputProps & {
    /** Controls whether the radio is selected. */
    checked?: boolean;
    /** Runs with the next selected state after user interaction. */
    onChange?: (checked: boolean) => void;
    /** Identifies the radio entry when used inside a radio group. */
    modelValue?: string;
    /** Renders the radio label. */
    children?: ReactNode;
    /** Applies CSS classes to the root label element. */
    className?: LabelClassName;
    /** Applies CSS classes to the radio slots. */
    classNames?: InputRadioClassNames;
};

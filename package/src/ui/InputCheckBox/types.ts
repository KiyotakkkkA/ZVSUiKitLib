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

export type InputCheckBoxClassNames = {
    /** Applies CSS classes to the native checkbox input. */
    input?: InputClassName;
    /** Applies CSS classes to the visible checkbox control. */
    control?: SpanClassName;
    /** Applies CSS classes to the label content. */
    content?: SpanClassName;
    /** Applies CSS classes to the checkbox check mark. */
    mark?: SpanClassName;
    /** Applies CSS classes to the checked-state indicator. */
    indicator?: SpanClassName;
};

export type InputCheckBoxProps = BaseInputProps & {
    /** Controls whether the checkbox is checked. */
    checked?: boolean;
    /** Runs with the next checked state after user interaction. */
    onChange?: (checked: boolean) => void;
    /** Identifies the checkbox entry when used inside a checkbox group. */
    modelValue?: string;
    /** Renders the checkbox label. */
    children?: ReactNode;
    /** Applies CSS classes to the root label element. */
    className?: LabelClassName;
    /** Applies CSS classes to the checkbox slots. */
    classNames?: InputCheckBoxClassNames;
};

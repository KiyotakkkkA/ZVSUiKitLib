import type { ReactNode, Ref } from "react";
import type {
    InputClassName,
    LabelClassName,
    SpanClassName,
} from "../_shared/types";

export type InputCheckSlidedClassNames = {
    /** Applies CSS classes to the native checkbox input. */
    input?: InputClassName;
    /** Applies CSS classes to the visible switch track. */
    control?: SpanClassName;
    /** Applies CSS classes to the switch label content. */
    content?: SpanClassName;
    /** Applies CSS classes to the moving switch thumb. */
    thumb?: SpanClassName;
};

export type InputCheckSlidedProps = {
    /** Receives the native checkbox input node. */
    ref?: Ref<HTMLInputElement>;
    /** Controls whether the switch is on. */
    checked: boolean;
    /** Runs with the next checked state after user interaction. */
    onChange: (checked: boolean) => void;
    /** Prevents interaction with the switch. */
    disabled?: boolean;
    /** Identifies this control as the slided checkbox variant. */
    type?: "slided";
    /** Renders the switch label. */
    children?: ReactNode;
    /** Applies CSS classes to the root label element. */
    className?: LabelClassName;
    /** Applies CSS classes to the switch slots. */
    classNames?: InputCheckSlidedClassNames;
};

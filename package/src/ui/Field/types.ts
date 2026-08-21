import type { ReactNode, Ref } from "react";
import type {
    DivClassName,
    LabelClassName,
    ParagraphClassName,
} from "../_shared/types";

export type FieldControlProps = {
    /** The `id` to put on the control, matched by the label's `htmlFor`. */
    id: string;
    /** The value for the control's `aria-describedby`, or `undefined`. */
    "aria-describedby": string | undefined;
    /** The value for the control's `aria-invalid`. */
    "aria-invalid": boolean | undefined;
    /** The value for the control's `required`. */
    required: boolean | undefined;
};

export type FieldState = {
    /** Whether the field currently carries an error. */
    invalid: boolean;
};

export type FieldClassNames = {
    /** Applies CSS classes to the field label. */
    label?: LabelClassName;
    /** Applies CSS classes to the required marker next to the label. */
    requiredMarker?: string;
    /** Applies CSS classes to the helper description. */
    description?: ParagraphClassName;
    /** Applies CSS classes to the error message. */
    error?: ParagraphClassName;
    /** Applies CSS classes to the control wrapper. */
    control?: DivClassName;
};

export type FieldProps = {
    /**
     * Renders the control. Spread the first argument onto it so the label,
     * description and error are wired to it for assistive technology; the
     * second argument carries the field state.
     */
    children: (props: FieldControlProps, state: FieldState) => ReactNode;
    /** Labels the control. */
    label?: ReactNode;
    /** Explains the control below the label. */
    description?: ReactNode;
    /** Marks the field invalid and renders the message below the control. */
    error?: ReactNode;
    /** Marks the control as required. */
    required?: boolean;
    /** Overrides the generated control `id`. */
    id?: string;
    /** Text of the marker rendered next to a required label. */
    requiredMarker?: ReactNode;
    /** CSS classes applied to the root element. */
    className?: DivClassName;
    /** CSS classes applied to the component slots. */
    classNames?: FieldClassNames;
    /** Receives the field root element. */
    ref?: Ref<HTMLDivElement>;
};

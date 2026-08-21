import type { HTMLAttributes, ReactNode, Ref } from "react";
import type { Orientation } from "../_shared/types";

export type BooleanModel = Record<string, boolean>;

export type InputCheckBoxGroupProps<T extends BooleanModel> = Omit<
    HTMLAttributes<HTMLDivElement>,
    "default" | "onChange"
> & {
    /** Receives the group root element. */
    ref?: Ref<HTMLDivElement>;
    /** Maps each checkbox value to its checked state. */
    model: T;
    /** Runs with the updated checked-state model. */
    onModelChange: (model: T) => void;
    /** Selects the model key checked when no key is currently active. */
    default?: Extract<keyof T, string>;
    /** Allows more than one model entry to be checked at once. */
    multiple?: boolean;
    /** Sets the horizontal or vertical layout of the checkboxes. */
    orientation?: Orientation;
    /** Disables every checkbox in the group. */
    disabled?: boolean;
    /** Renders the grouped checkbox controls. */
    children: ReactNode;
};

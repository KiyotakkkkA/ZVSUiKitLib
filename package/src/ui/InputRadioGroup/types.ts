import type { HTMLAttributes, ReactNode } from "react";
import type { BooleanModel } from "../InputCheckBoxGroup";
import type { Orientation } from "../_shared/types";

export type InputRadioGroupProps<T extends BooleanModel> = Omit<
    HTMLAttributes<HTMLDivElement>,
    "default" | "onChange"
> & {
    /** Maps each radio value to its selected state. */
    model: T;
    /** Runs with the model after the selected radio changes. */
    onModelChange: (model: T) => void;
    /** Selects the model key used when no radio is currently active. */
    default?: Extract<keyof T, string>;
    /** Sets the horizontal or vertical layout of the radios. */
    orientation?: Orientation;
    /** Disables every radio in the group. */
    disabled?: boolean;
    /** Assigns the shared native input name to grouped radios. */
    name?: string;
    /** Renders the grouped radio controls. */
    children: ReactNode;
};

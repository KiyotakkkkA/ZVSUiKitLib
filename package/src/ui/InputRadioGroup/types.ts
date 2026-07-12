import type { HTMLAttributes, ReactNode } from "react";
import type { BooleanModel } from "../InputCheckBoxGroup";

export type InputRadioGroupProps<T extends BooleanModel> = Omit<
    HTMLAttributes<HTMLDivElement>,
    "default" | "onChange"
> & {
    model: T;
    onModelChange: (model: T) => void;
    default?: Extract<keyof T, string>;
    orientation?: "vertical" | "horizontal";
    disabled?: boolean;
    name?: string;
    children: ReactNode;
};

import type { HTMLAttributes, ReactNode } from "react";

export type BooleanModel = Record<string, boolean>;

export type InputCheckBoxGroupProps<T extends BooleanModel> = Omit<
    HTMLAttributes<HTMLDivElement>,
    "default" | "onChange"
> & {
    model: T;
    onModelChange: (model: T) => void;
    default?: Extract<keyof T, string>;
    multiple?: boolean;
    orientation?: "vertical" | "horizontal";
    disabled?: boolean;
    children: ReactNode;
};

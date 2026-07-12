import type { SelectHTMLAttributes } from "react";

import type { DivClassName, SelectClassName } from "../_shared/types";

type BaseSelectNativeProps = Omit<
    SelectHTMLAttributes<HTMLSelectElement>,
    "onChange" | "className"
>;

export type SelectNativeOption = {
    value: string;
    label: string;
    disabled?: boolean;
};

export type SelectNativeClassNames = {
    select?: SelectClassName;
};

export type SelectNativeProps = BaseSelectNativeProps & {
    options: SelectNativeOption[];
    onChange?: (value: string) => void;
    placeholder?: string;
    className?: DivClassName;
    classNames?: SelectNativeClassNames;
};

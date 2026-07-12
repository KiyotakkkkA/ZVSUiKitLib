import type { SelectHTMLAttributes } from "react";

import type { DivClassName, RoundVariants, SelectClassName } from "../_shared/types";

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
    rounded?: RoundVariants | "";
    className?: DivClassName;
    classNames?: SelectNativeClassNames;
};

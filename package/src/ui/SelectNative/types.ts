import type { SelectHTMLAttributes } from "react";

import type {
    DivClassName,
    RoundVariants,
    SelectClassName,
} from "../_shared/types";

type BaseSelectNativeProps = Omit<
    SelectHTMLAttributes<HTMLSelectElement>,
    "onChange" | "className"
>;

export type SelectNativeOption = {
    /** The value used by the component. */
    value: string;
    /** Text used for the label. */
    label: string;
    /** Whether disabled is enabled. */
    disabled?: boolean;
};

export type SelectNativeClassNames = {
    /** The select used by the component. */
    select?: SelectClassName;
};

export type SelectNativeProps = BaseSelectNativeProps & {
    /** The options used by the component. */
    options: SelectNativeOption[];
    /** Callback invoked when change occurs. */
    onChange?: (value: string) => void;
    /** Text used for the placeholder. */
    placeholder?: string;
    /** The border-radius preset applied to the component. */
    rounded?: RoundVariants | "";
    /** CSS classes applied to the root element. */
    className?: DivClassName;
    /** CSS classes applied to the component slots. */
    classNames?: SelectNativeClassNames;
};

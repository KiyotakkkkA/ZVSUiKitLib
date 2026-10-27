import type { InputDateProps } from "../InputDate/types";

export type InputDatetimeClassNames = NonNullable<InputDateProps["classNames"]>;

export type InputDatetimeProps = Omit<
    InputDateProps,
    "closeOnSelect" | "placeholder" | "classNames"
> & {
    /** Text used for the placeholder. Defaults to the `inputDatetime.placeholder` string from the active locale dictionary. */
    placeholder?: string;
    /** The minutes interval offered by the time block. */
    minuteStep?: number;
    /** CSS classes applied to the component slots. */
    classNames?: InputDatetimeClassNames;
};

import type { Ref } from "react";
import type { CalendarDate, CalendarProps } from "../Calendar/types";
import type { PositionAnchor } from "../_shared/types";

import type {
    ButtonClassName,
    DivClassName,
    SpanClassName,
} from "../_shared/types";

export type InputDateClassNames = {
    /** Content rendered for the trigger. */
    trigger?: ButtonClassName;
    /** The menu used by the component. */
    menu?: DivClassName;
    /** The calendar used by the component. */
    calendar?: DivClassName;
    /** The value used by the component. */
    value?: SpanClassName;
    /** The controls used by the component. */
    controls?: SpanClassName;
    /** Function used to clear button. */
    clearButton?: SpanClassName;
};

export type InputDateProps = {
    /** Receives the date field root element. */
    ref?: Ref<HTMLDivElement>;
    /** The value used by the component. */
    value?: CalendarDate;
    /** The default value used by the component. */
    defaultValue?: CalendarDate;
    /** Callback invoked when change occurs. */
    onChange?: (date: CalendarDate) => void;
    /** Text used for the placeholder. */
    placeholder?: string;
    /** The locale used by the component. */
    locale?: string;
    /** The week starts on used by the component. */
    weekStartsOn?: CalendarProps["weekStartsOn"];
    /** The min date used by the component. */
    minDate?: Date;
    /** The max date used by the component. */
    maxDate?: Date;
    /** Whether disabled dates is enabled. */
    disabledDates?: CalendarProps["disabledDates"];
    /** Whether allow deselect is enabled. */
    allowDeselect?: boolean;
    /** Whether show outside days is enabled. */
    showOutsideDays?: boolean;
    /** Whether disabled is enabled. */
    disabled?: boolean;
    /** Function used to close on select. */
    closeOnSelect?: boolean;
    /** Function used to clearable. */
    clearable?: boolean;
    /** The popup menu position relative to its trigger. */
    menuPlacement?: PositionAnchor;
    /** The width of the popup menu. */
    menuWidth?: number | "auto";
    /** CSS classes applied to the root element. */
    className?: DivClassName;
    /** CSS classes applied to the component slots. */
    classNames?: InputDateClassNames;
    /** Function used to format label. */
    formatLabel?: (date: Date) => string;
};

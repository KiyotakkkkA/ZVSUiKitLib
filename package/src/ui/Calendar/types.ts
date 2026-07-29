import type { ReactNode } from "react";
import type {
    ButtonClassName,
    DivClassName,
    SpanClassName,
} from "../_shared/types";

export type CalendarDate = Date | null;

export type DayMeta = {
    /** The date used by the component. */
    date: Date;
    /** Whether is today is enabled. */
    isToday: boolean;
    /** Whether is selected is enabled. */
    isSelected: boolean;
    /** Whether is current month is enabled. */
    isCurrentMonth: boolean;
    /** Whether is disabled is enabled. */
    isDisabled: boolean;
};

export type CalendarClassNames = {
    /** Content rendered for the header. */
    header?: DivClassName;
    /** The nav button used by the component. */
    navButton?: ButtonClassName;
    /** The selectors used by the component. */
    selectors?: DivClassName;
    /** The month select used by the component. */
    monthSelect?: DivClassName;
    /** The year select used by the component. */
    yearSelect?: DivClassName;
    /** The weekdays used by the component. */
    weekdays?: DivClassName;
    /** The weekday used by the component. */
    weekday?: SpanClassName;
    /** The days used by the component. */
    days?: DivClassName;
    /** The day used by the component. */
    day?: ButtonClassName | ((meta: DayMeta) => ButtonClassName | undefined);
};

export type CalendarProps = {
    /** The value used by the component. */
    value?: CalendarDate;
    /** The default value used by the component. */
    defaultValue?: CalendarDate;
    /** Callback invoked when change occurs. */
    onChange?: (date: CalendarDate) => void;
    /** The view date used by the component. */
    viewDate?: Date;
    /** The default view date used by the component. */
    defaultViewDate?: Date;
    /** Callback invoked when view date change occurs. */
    onViewDateChange?: (date: Date) => void;
    /** The min date used by the component. */
    minDate?: Date;
    /** The max date used by the component. */
    maxDate?: Date;
    /** Whether disabled dates is enabled. */
    disabledDates?: Date[] | ((date: Date) => boolean);
    /** Whether allow deselect is enabled. */
    allowDeselect?: boolean;
    /** Whether show outside days is enabled. */
    showOutsideDays?: boolean;
    /** The locale used by the component. */
    locale?: string;
    /** The week starts on used by the component. */
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    /** CSS classes applied to the root element. */
    className?: DivClassName;
    /** CSS classes applied to the component slots. */
    classNames?: CalendarClassNames;
    /** Function used to render day. */
    renderDay?: (meta: DayMeta) => ReactNode;
};

import type { ComponentPropsWithoutRef, ReactNode } from "react";

type DivClassName = ComponentPropsWithoutRef<"div">["className"];
type ButtonClassName = ComponentPropsWithoutRef<"button">["className"];
type SpanClassName = ComponentPropsWithoutRef<"span">["className"];

export type CalendarDate = Date | null;

export type DayMeta = {
    date: Date;
    isToday: boolean;
    isSelected: boolean;
    isCurrentMonth: boolean;
    isDisabled: boolean;
};

export type CalendarClassNames = {
    header?: DivClassName;
    navButton?: ButtonClassName;
    selectors?: DivClassName;
    monthSelect?: DivClassName;
    yearSelect?: DivClassName;
    weekdays?: DivClassName;
    weekday?: SpanClassName;
    days?: DivClassName;
    day?: ButtonClassName | ((meta: DayMeta) => ButtonClassName | undefined);
};

export type CalendarProps = {
    value?: CalendarDate;
    defaultValue?: CalendarDate;
    onChange?: (date: CalendarDate) => void;
    viewDate?: Date;
    defaultViewDate?: Date;
    onViewDateChange?: (date: Date) => void;
    minDate?: Date;
    maxDate?: Date;
    disabledDates?: Date[] | ((date: Date) => boolean);
    allowDeselect?: boolean;
    showOutsideDays?: boolean;
    locale?: string;
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    className?: DivClassName;
    classNames?: CalendarClassNames;
    renderDay?: (meta: DayMeta) => ReactNode;
};

import type { ComponentPropsWithoutRef } from "react";
import type { CalendarDate, CalendarProps } from "../Calendar/types";

type DivClassName = ComponentPropsWithoutRef<"div">["className"];
type ButtonClassName = ComponentPropsWithoutRef<"button">["className"];
type SpanClassName = ComponentPropsWithoutRef<"span">["className"];

export type InputDateClassNames = {
    trigger?: ButtonClassName;
    menu?: DivClassName;
    calendar?: DivClassName;
    value?: SpanClassName;
    controls?: SpanClassName;
    clearButton?: SpanClassName;
};

export type InputDateProps = {
    value?: CalendarDate;
    defaultValue?: CalendarDate;
    onChange?: (date: CalendarDate) => void;
    placeholder?: string;
    locale?: string;
    weekStartsOn?: CalendarProps["weekStartsOn"];
    minDate?: Date;
    maxDate?: Date;
    disabledDates?: CalendarProps["disabledDates"];
    allowDeselect?: boolean;
    showOutsideDays?: boolean;
    disabled?: boolean;
    closeOnSelect?: boolean;
    clearable?: boolean;
    menuPlacement?: "bottom" | "top";
    menuWidth?: number | "auto";
    className?: DivClassName;
    classNames?: InputDateClassNames;
    formatLabel?: (date: Date) => string;
};

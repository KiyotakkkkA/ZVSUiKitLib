import styles from "./Calendar.module.css";
import { useMemo, useState } from "react";
import { cn } from "../../lib/utils";
import type { CalendarDate, CalendarProps } from "./types";
import { Dropdown } from "../Dropdown/Dropdown";
import { ScrollArea } from "../ScrollArea/ScrollArea";
import { Button } from "../Button/Button";

function startOfDay(date: Date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function startOfMonth(date: Date) {
    return new Date(date.getFullYear(), date.getMonth(), 1);
}

function isSameDay(left: Date, right: Date) {
    return (
        left.getFullYear() === right.getFullYear() &&
        left.getMonth() === right.getMonth() &&
        left.getDate() === right.getDate()
    );
}

function addDays(date: Date, days: number) {
    const next = new Date(date);
    next.setDate(next.getDate() + days);
    return next;
}

function toDayKey(date: Date) {
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

function getYearRange(minDate?: Date, maxDate?: Date) {
    const currentYear = new Date().getFullYear();
    const baseFrom = 1900;
    const baseTo = currentYear;

    const constrainedFrom = minDate
        ? Math.max(baseFrom, minDate.getFullYear())
        : baseFrom;
    const constrainedTo = maxDate
        ? Math.min(baseTo, maxDate.getFullYear())
        : baseTo;

    if (constrainedFrom > constrainedTo) {
        return {
            from: constrainedTo,
            to: constrainedTo,
        };
    }

    return {
        from: constrainedFrom,
        to: constrainedTo,
    };
}

export function Calendar({
    value,
    defaultValue = null,
    onChange,
    viewDate,
    defaultViewDate,
    onViewDateChange,
    minDate,
    maxDate,
    disabledDates,
    allowDeselect,
    showOutsideDays = true,
    locale = "ru-RU",
    weekStartsOn = 1,
    className,
    classNames,
    ref,
    renderDay,
}: CalendarProps) {
    const [innerValue, setInnerValue] = useState<CalendarDate>(defaultValue);
    const [innerViewDate, setInnerViewDate] = useState<Date>(
        startOfMonth(defaultViewDate ?? value ?? defaultValue ?? new Date()),
    );

    const selectedDate = value !== undefined ? value : innerValue;
    const activeViewDate = startOfMonth(viewDate ?? innerViewDate);

    const minDay = minDate ? startOfDay(minDate) : null;
    const maxDay = maxDate ? startOfDay(maxDate) : null;
    const selectedDay = selectedDate ? startOfDay(selectedDate) : null;
    const today = startOfDay(new Date());

    const setSelectedDate = (next: CalendarDate) => {
        if (value === undefined) {
            setInnerValue(next);
        }

        onChange?.(next);
    };

    const setViewMonth = (next: Date) => {
        const month = startOfMonth(next);

        if (viewDate === undefined) {
            setInnerViewDate(month);
        }

        onViewDateChange?.(month);
    };

    const monthFormatter = useMemo(
        () => new Intl.DateTimeFormat(locale, { month: "short" }),
        [locale],
    );

    const weekdayFormatter = useMemo(
        () => new Intl.DateTimeFormat(locale, { weekday: "short" }),
        [locale],
    );

    const monthOptions = useMemo(
        () =>
            Array.from({ length: 12 }, (_, index) => ({
                value: index,
                label: monthFormatter
                    .format(new Date(2026, index, 1))
                    .replace(".", "")
                    .trim(),
            })),
        [monthFormatter],
    );

    const yearRange = useMemo(
        () => getYearRange(minDate, maxDate),
        [minDate, maxDate],
    );

    const yearOptions = useMemo(
        () =>
            Array.from(
                { length: yearRange.to - yearRange.from + 1 },
                (_, index) => {
                    const year = yearRange.to - index;
                    return year;
                },
            ),
        [yearRange],
    );

    const weekdayLabels = useMemo(
        () =>
            Array.from({ length: 7 }, (_, index) => {
                const refSunday = new Date(2026, 0, 4);
                const shifted = addDays(refSunday, (weekStartsOn + index) % 7);
                return weekdayFormatter.format(shifted);
            }),
        [weekdayFormatter, weekStartsOn],
    );

    const monthStart = startOfMonth(activeViewDate);
    const startOffset = (monthStart.getDay() - weekStartsOn + 7) % 7;
    const gridStart = addDays(monthStart, -startOffset);

    const disabledDateSet = useMemo(() => {
        if (!Array.isArray(disabledDates)) {
            return null;
        }

        return new Set(disabledDates.map((item) => toDayKey(startOfDay(item))));
    }, [disabledDates]);

    const dayCells = useMemo(
        () =>
            Array.from({ length: 42 }, (_, index) => {
                const date = startOfDay(addDays(gridStart, index));
                const isCurrentMonth =
                    date.getMonth() === activeViewDate.getMonth();
                const isToday = isSameDay(date, today);
                const isSelected = selectedDay
                    ? isSameDay(date, selectedDay)
                    : false;

                const isOutOfRange =
                    (minDay && date < minDay) ||
                    (maxDay && date > maxDay) ||
                    false;

                const isDisabledByProp =
                    typeof disabledDates === "function"
                        ? disabledDates(date)
                        : disabledDateSet
                          ? disabledDateSet.has(toDayKey(date))
                          : false;

                return {
                    date,
                    isToday,
                    isSelected,
                    isCurrentMonth,
                    isDisabled: Boolean(isOutOfRange || isDisabledByProp),
                };
            }),
        [
            activeViewDate,
            disabledDates,
            disabledDateSet,
            gridStart,
            maxDay,
            minDay,
            selectedDay,
            today,
        ],
    );

    const canGoPrev = useMemo(() => {
        if (!minDay) {
            return true;
        }

        const prevMonthEnd = new Date(
            activeViewDate.getFullYear(),
            activeViewDate.getMonth(),
            0,
        );

        return startOfDay(prevMonthEnd) >= minDay;
    }, [activeViewDate, minDay]);

    const canGoNext = useMemo(() => {
        if (!maxDay) {
            return true;
        }

        const nextMonthStart = new Date(
            activeViewDate.getFullYear(),
            activeViewDate.getMonth() + 1,
            1,
        );

        return startOfDay(nextMonthStart) <= maxDay;
    }, [activeViewDate, maxDay]);

    return (
        <div ref={ref} className={cn(styles.s0, className)}>
            <div className={cn(styles.s1, classNames?.header)}>
                <Button
                    variant="secondary"
                    className={cn(styles.s2, classNames?.navButton)}
                    onClick={() =>
                        setViewMonth(
                            new Date(
                                activeViewDate.getFullYear(),
                                activeViewDate.getMonth() - 1,
                                1,
                            ),
                        )
                    }
                    disabled={!canGoPrev}
                >
                    {"<"}
                </Button>

                <div className={cn(styles.s3, classNames?.selectors)}>
                    <Dropdown menuWidth={208} menuPlacement="bottom-left">
                        <Dropdown.Trigger
                            rounded="rounded-lg"
                            className={styles.s4}
                            aria-label="Выбрать месяц"
                        >
                            <span className={styles.s5}>
                                {monthOptions[activeViewDate.getMonth()]?.label}
                            </span>
                        </Dropdown.Trigger>
                        <Dropdown.Menu className={styles.s6}>
                            {monthOptions.map((month) => (
                                <Dropdown.Item
                                    key={month.value}
                                    active={
                                        month.value ===
                                        activeViewDate.getMonth()
                                    }
                                    className={styles.s7}
                                    onClick={() =>
                                        setViewMonth(
                                            new Date(
                                                activeViewDate.getFullYear(),
                                                month.value,
                                                1,
                                            ),
                                        )
                                    }
                                >
                                    {month.label}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>

                    <span className={styles.s8} aria-hidden />

                    <Dropdown menuWidth={152} menuPlacement="bottom-right">
                        <Dropdown.Trigger
                            rounded="rounded-lg"
                            className={styles.s9}
                            aria-label="Выбрать год"
                        >
                            {activeViewDate.getFullYear()}
                        </Dropdown.Trigger>
                        <Dropdown.Menu className={styles.s10}>
                            <ScrollArea
                                showScrollbar={false}
                                className={styles.s11}
                            >
                                {yearOptions.map((year) => (
                                    <Dropdown.Item
                                        key={year}
                                        active={
                                            year ===
                                            activeViewDate.getFullYear()
                                        }
                                        className={styles.s12}
                                        onClick={() =>
                                            setViewMonth(
                                                new Date(
                                                    year,
                                                    activeViewDate.getMonth(),
                                                    1,
                                                ),
                                            )
                                        }
                                    >
                                        {year}
                                    </Dropdown.Item>
                                ))}
                            </ScrollArea>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <Button
                    variant="secondary"
                    className={cn(styles.s13, classNames?.navButton)}
                    onClick={() =>
                        setViewMonth(
                            new Date(
                                activeViewDate.getFullYear(),
                                activeViewDate.getMonth() + 1,
                                1,
                            ),
                        )
                    }
                    disabled={!canGoNext}
                >
                    {">"}
                </Button>
            </div>

            <div className={cn(styles.s14, classNames?.weekdays)}>
                {weekdayLabels.map((label) => (
                    <span
                        key={label}
                        className={cn(styles.s15, classNames?.weekday)}
                    >
                        {label}
                    </span>
                ))}
            </div>

            <div className={cn(styles.s16, classNames?.days)}>
                {dayCells.map((day) => {
                    if (!showOutsideDays && !day.isCurrentMonth) {
                        return (
                            <span
                                key={day.date.toISOString()}
                                className={styles.s17}
                                aria-hidden
                            />
                        );
                    }

                    return (
                        <button
                            key={day.date.toISOString()}
                            type="button"
                            className={cn(
                                styles.s18,
                                styles.s19,
                                day.isCurrentMonth ? styles.s20 : styles.s21,
                                day.isToday && !day.isSelected && styles.s22,
                                day.isSelected && styles.s23,
                                day.isToday && day.isSelected && styles.s24,
                                !day.isSelected &&
                                    !day.isDisabled &&
                                    styles.s25,
                                day.isDisabled && styles.s26,
                                typeof classNames?.day === "function"
                                    ? classNames.day(day)
                                    : classNames?.day,
                            )}
                            onClick={() => {
                                if (day.isDisabled) {
                                    return;
                                }

                                if (
                                    allowDeselect &&
                                    selectedDay &&
                                    isSameDay(day.date, selectedDay)
                                ) {
                                    setSelectedDate(null);
                                    return;
                                }

                                setSelectedDate(day.date);
                            }}
                            disabled={day.isDisabled}
                            aria-pressed={day.isSelected}
                            aria-current={day.isToday ? "date" : undefined}
                            aria-label={day.date.toLocaleDateString(locale)}
                        >
                            {renderDay ? renderDay(day) : day.date.getDate()}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

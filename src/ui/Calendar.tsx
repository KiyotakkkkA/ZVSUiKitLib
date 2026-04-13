import { useMemo, useState, type ReactNode } from "react";
import { Button } from "./Button";
import { Select } from "./Select";

type CalendarDate = Date | null;

type DayMeta = {
    date: Date;
    isToday: boolean;
    isSelected: boolean;
    isCurrentMonth: boolean;
    isDisabled: boolean;
};

type CalendarProps = {
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
    className?: string;
    classNames?: {
        header?: string;
        navButton?: string;
        selectors?: string;
        monthSelect?: string;
        yearSelect?: string;
        weekdays?: string;
        weekday?: string;
        days?: string;
        day?: string | ((meta: DayMeta) => string | undefined);
    };
    renderDay?: (meta: DayMeta) => ReactNode;
};

function cx(...items: Array<string | undefined | false>) {
    return items.filter(Boolean).join(" ");
}

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
                value: String(index),
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
                    return { value: String(year), label: String(year) };
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
        <div
            className={cx(
                "w-full max-w-[20rem] rounded-2xl border border-main-700/70 bg-main-900/55 p-3.5",
                className,
            )}
        >
            <div
                className={cx(
                    "grid grid-cols-[auto_1fr_auto] items-center gap-2",
                    classNames?.header,
                )}
            >
                <Button
                    variant="secondary"
                    className={cx(
                        "h-8 w-8 rounded-lg p-0 transition-transform duration-150 hover:scale-105",
                        classNames?.navButton,
                    )}
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

                <div
                    className={cx(
                        "grid grid-cols-[minmax(0,1fr)_6.25rem] gap-2",
                        classNames?.selectors,
                    )}
                >
                    <Select
                        value={String(activeViewDate.getMonth())}
                        onChange={(nextMonth) =>
                            setViewMonth(
                                new Date(
                                    activeViewDate.getFullYear(),
                                    Number(nextMonth),
                                    1,
                                ),
                            )
                        }
                        options={monthOptions}
                        className="relative z-70"
                        classNames={{
                            trigger: cx(
                                "bg-main-800 text-sm",
                                classNames?.monthSelect,
                            ),
                        }}
                    />
                    <Select
                        value={String(activeViewDate.getFullYear())}
                        onChange={(nextYear) =>
                            setViewMonth(
                                new Date(
                                    Number(nextYear),
                                    activeViewDate.getMonth(),
                                    1,
                                ),
                            )
                        }
                        options={yearOptions}
                        className="relative z-70"
                        classNames={{
                            trigger: cx(
                                "w-25 bg-main-800 text-sm",
                                classNames?.yearSelect,
                            ),
                        }}
                    />
                </div>

                <Button
                    variant="secondary"
                    className={cx(
                        "h-8 w-8 rounded-lg p-0 transition-transform duration-150 hover:scale-105",
                        classNames?.navButton,
                    )}
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

            <div className={cx("mt-3 grid grid-cols-7", classNames?.weekdays)}>
                {weekdayLabels.map((label) => (
                    <span
                        key={label}
                        className={cx(
                            "text-center text-xs capitalize text-main-400",
                            classNames?.weekday,
                        )}
                    >
                        {label}
                    </span>
                ))}
            </div>

            <div
                className={cx("mt-2 grid grid-cols-7 gap-1", classNames?.days)}
            >
                {dayCells.map((day) => {
                    if (!showOutsideDays && !day.isCurrentMonth) {
                        return (
                            <span
                                key={day.date.toISOString()}
                                className="h-8 rounded-lg"
                                aria-hidden
                            />
                        );
                    }

                    return (
                        <button
                            key={day.date.toISOString()}
                            type="button"
                            className={cx(
                                "h-8 rounded-lg border border-transparent text-sm transition-all duration-150 ease-out",
                                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main-400/70",
                                day.isCurrentMonth
                                    ? "text-main-100"
                                    : "text-main-500",
                                day.isToday &&
                                    !day.isSelected &&
                                    "border-main-400/80 bg-main-700/35 font-semibold text-main-50",
                                day.isSelected &&
                                    "bg-main-100 font-semibold text-main-900",
                                day.isToday &&
                                    day.isSelected &&
                                    "ring-2 ring-main-400/75 ring-offset-1 ring-offset-main-900",
                                !day.isSelected &&
                                    !day.isDisabled &&
                                    "hover:bg-main-700/30",
                                day.isDisabled &&
                                    "cursor-not-allowed opacity-35",
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

export type { CalendarDate, CalendarProps, DayMeta };

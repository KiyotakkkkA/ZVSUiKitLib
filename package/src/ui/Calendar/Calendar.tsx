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
        <div
            className={cn(
                "w-full max-w-[20rem] rounded-2xl border border-main-700/70 bg-main-900/55 p-3.5",
                className,
            )}
        >
            <div
                className={cn(
                    "grid grid-cols-[auto_1fr_auto] items-center gap-2",
                    classNames?.header,
                )}
            >
                <Button
                    variant="secondary"
                    className={cn(
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
                    className={cn(
                        "flex min-w-0 items-center justify-center gap-1",
                        classNames?.selectors,
                    )}
                >
                    <Dropdown menuWidth={208} menuPlacement="bottom-left">
                        <Dropdown.Trigger
                            rounded="rounded-lg"
                            className="group h-8 min-w-0 hover:border-transparent bg-transparent border-transparent px-2 text-sm font-semibold capitalize text-main-100 hover:bg-main-700/35"
                            aria-label="Выбрать месяц"
                        >
                            <span className="truncate">
                                {monthOptions[activeViewDate.getMonth()]?.label}
                            </span>
                        </Dropdown.Trigger>
                        <Dropdown.Menu className="grid grid-cols-3 gap-1 border-main-700 bg-main-800/95 p-2 shadow-2xl shadow-black/30 backdrop-blur">
                            {monthOptions.map((month) => (
                                <Dropdown.Item
                                    key={month.value}
                                    active={
                                        month.value ===
                                        activeViewDate.getMonth()
                                    }
                                    className="text-center px-2 capitalize"
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

                    <span
                        className="h-4 w-px shrink-0 bg-main-700"
                        aria-hidden
                    />

                    <Dropdown menuWidth={152} menuPlacement="bottom-right">
                        <Dropdown.Trigger
                            rounded="rounded-lg"
                            className="group h-8 hover:border-transparent border-transparent bg-transparent px-2 text-sm font-semibold tabular-nums text-main-100 hover:bg-main-700/35"
                            aria-label="Выбрать год"
                        >
                            {activeViewDate.getFullYear()}
                        </Dropdown.Trigger>
                        <Dropdown.Menu className="border-main-700 bg-main-800/95 p-2 shadow-2xl shadow-black/30 backdrop-blur">
                            <ScrollArea
                                showScrollbar={false}
                                className="max-h-60 grid grid-cols-2 gap-1 min-w-32"
                            >
                                {yearOptions.map((year) => (
                                    <Dropdown.Item
                                        key={year}
                                        active={
                                            year ===
                                            activeViewDate.getFullYear()
                                        }
                                        className="text-center tabular-nums"
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
                    className={cn(
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

            <div className={cn("mt-3 grid grid-cols-7", classNames?.weekdays)}>
                {weekdayLabels.map((label) => (
                    <span
                        key={label}
                        className={cn(
                            "text-center text-xs capitalize text-main-400",
                            classNames?.weekday,
                        )}
                    >
                        {label}
                    </span>
                ))}
            </div>

            <div
                className={cn("mt-2 grid grid-cols-7 gap-1", classNames?.days)}
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
                            className={cn(
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

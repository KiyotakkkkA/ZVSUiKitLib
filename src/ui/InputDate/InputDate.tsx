import { Icon } from "@iconify/react";
import { useCallback, useMemo, useState } from "react";
import { cn } from "../../lib/utils";
import { Calendar } from "../Calendar/Calendar";
import { Dropdown } from "../Dropdown/Dropdown";
import type { InputDateProps } from "./types";
import type { CalendarDate } from "../Calendar/types";

export function InputDate({
    value,
    defaultValue = null,
    onChange,

    placeholder = "Выберите дату",
    locale = "ru-RU",
    weekStartsOn = 1,

    minDate,
    maxDate,
    disabledDates,

    allowDeselect,
    showOutsideDays,
    disabled = false,

    closeOnSelect = false,
    clearable = false,

    menuPlacement = "bottom-left",
    menuWidth = "auto",

    className,
    classNames,

    formatLabel,
}: InputDateProps) {
    const [innerValue, setInnerValue] = useState<CalendarDate>(defaultValue);

    const isControlled = value !== undefined;
    const selectedDate = isControlled ? value : innerValue;

    const resolvedLabel = useMemo(() => {
        if (!selectedDate) {
            return placeholder;
        }

        if (formatLabel) {
            return formatLabel(selectedDate);
        }

        return selectedDate.toLocaleDateString(locale, {
            day: "2-digit",
            month: "long",
            year: "numeric",
        });
    }, [formatLabel, locale, placeholder, selectedDate]);

    const handleCalendarChange = useCallback(
        (nextDate: CalendarDate, closeMenu?: () => void) => {
            if (!isControlled) {
                setInnerValue(nextDate);
            }

            onChange?.(nextDate);

            if (closeOnSelect && nextDate) {
                closeMenu?.();
            }
        },
        [closeOnSelect, isControlled, onChange],
    );

    const clearDate = useCallback(() => {
        handleCalendarChange(null);
    }, [handleCalendarChange]);

    return (
        <div className={cn("w-full", className)}>
            <Dropdown
                disabled={disabled}
                menuPlacement={menuPlacement}
                menuWidth={menuWidth}
            >
                <Dropdown.Render>
                    {({ open, close }) => (
                        <>
                            <Dropdown.Trigger
                                className={cn(
                                    "h-11 w-full justify-between rounded-xl border border-main-700 bg-main-900 px-3 text-main-100",
                                    "hover:bg-main-800",
                                    "focus-visible:ring-2 focus-visible:ring-main-300/50",
                                    classNames?.trigger,
                                )}
                                icon={
                                    <span
                                        className={cn(
                                            "ml-2 flex shrink-0 items-center gap-1",
                                            classNames?.controls,
                                        )}
                                    >
                                        {clearable &&
                                            selectedDate &&
                                            !disabled && (
                                                <span
                                                    role="button"
                                                    tabIndex={0}
                                                    aria-label="Очистить дату"
                                                    className={cn(
                                                        "inline-flex h-6 w-6 items-center justify-center rounded-md text-main-400 transition-colors",
                                                        "hover:bg-main-700/70 hover:text-main-100",
                                                        classNames?.clearButton,
                                                    )}
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        event.stopPropagation();
                                                        clearDate();
                                                    }}
                                                    onKeyDown={(event) => {
                                                        if (
                                                            event.key !==
                                                                "Enter" &&
                                                            event.key !== " "
                                                        ) {
                                                            return;
                                                        }

                                                        event.preventDefault();
                                                        event.stopPropagation();
                                                        clearDate();
                                                    }}
                                                >
                                                    <Icon
                                                        icon="mdi:close"
                                                        className="text-base"
                                                        aria-hidden
                                                    />
                                                </span>
                                            )}

                                        <Icon
                                            icon="mdi:chevron-down"
                                            className={cn(
                                                "text-main-400 transition-transform duration-150",
                                                open && "rotate-180",
                                            )}
                                            aria-hidden
                                        />
                                    </span>
                                }
                            >
                                <span
                                    className={cn(
                                        "min-w-0 truncate text-left text-sm",
                                        selectedDate
                                            ? "text-main-100"
                                            : "text-main-400",
                                        classNames?.value,
                                    )}
                                >
                                    {resolvedLabel}
                                </span>
                            </Dropdown.Trigger>

                            <Dropdown.Menu
                                role="dialog"
                                className={cn(
                                    "z-40 rounded-xl border border-main-700 bg-main-900 p-0 shadow-2xl",
                                    classNames?.menu,
                                )}
                            >
                                <Calendar
                                    value={selectedDate}
                                    onChange={(nextDate) =>
                                        handleCalendarChange(nextDate, close)
                                    }
                                    locale={locale}
                                    weekStartsOn={weekStartsOn}
                                    minDate={minDate}
                                    maxDate={maxDate}
                                    disabledDates={disabledDates}
                                    allowDeselect={allowDeselect}
                                    showOutsideDays={showOutsideDays}
                                    className={cn(
                                        "max-w-none border-0 bg-main-900 p-2.5",
                                        classNames?.calendar,
                                    )}
                                />
                            </Dropdown.Menu>
                        </>
                    )}
                </Dropdown.Render>
            </Dropdown>
        </div>
    );
}

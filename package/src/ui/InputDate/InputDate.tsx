import { useCallback, useMemo, useState } from "react";
import { cn } from "../../lib/utils";
import { useLocale } from "../../hooks/useLocale";
import { Calendar } from "../Calendar/Calendar";
import { Dropdown } from "../Dropdown/Dropdown";
import { PickerTrigger } from "../_shared/PickerTrigger";
import type { InputDateProps } from "./types";
import type { CalendarDate } from "../Calendar/types";

export function InputDate({
    value,
    defaultValue = null,
    onChange,

    placeholder,
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
    ref,
    menuWidth = 300,

    className,
    classNames,

    formatLabel,
}: InputDateProps) {
    const t = useLocale().inputDate;
    const [innerValue, setInnerValue] = useState<CalendarDate>(defaultValue);

    const isControlled = value !== undefined;
    const selectedDate = isControlled ? value : innerValue;

    const resolvedLabel = useMemo(() => {
        if (!selectedDate) {
            return placeholder ?? t.placeholder;
        }

        if (formatLabel) {
            return formatLabel(selectedDate);
        }

        return selectedDate.toLocaleDateString(locale, {
            day: "2-digit",
            month: "long",
            year: "numeric",
        });
    }, [formatLabel, locale, placeholder, selectedDate, t.placeholder]);

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
        <div ref={ref} className={cn("w-full", className)}>
            <Dropdown
                className={"w-full"}
                disabled={disabled}
                menuPlacement={menuPlacement}
                menuWidth={menuWidth}
            >
                <Dropdown.Render>
                    {({ open, close }) => (
                        <>
                            <PickerTrigger
                                open={open}
                                label={resolvedLabel}
                                hasValue={Boolean(selectedDate)}
                                clearable={clearable}
                                disabled={disabled}
                                clearLabel={t.clear}
                                onClear={clearDate}
                                classNames={classNames}
                            />

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

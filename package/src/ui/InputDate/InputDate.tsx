import styles from "./InputDate.module.css";
import { Icon } from "../_shared/icons";
import { useCallback, useMemo, useState } from "react";
import { cn } from "../../lib/utils";
import { useLocale } from "../../hooks/useLocale";
import { Calendar } from "../Calendar/Calendar";
import { Dropdown } from "../Dropdown/Dropdown";
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
        <div ref={ref} className={cn(styles.s0, className)}>
            <Dropdown
                className={styles.dropdown}
                disabled={disabled}
                menuPlacement={menuPlacement}
                menuWidth={menuWidth}
            >
                <Dropdown.Render>
                    {({ open, close }) => (
                        <>
                            <Dropdown.Trigger
                                className={cn(
                                    styles.s1,
                                    styles.s2,
                                    styles.s3,
                                    classNames?.trigger,
                                )}
                                icon={
                                    <span
                                        className={cn(
                                            styles.s4,
                                            classNames?.controls,
                                        )}
                                    >
                                        {clearable &&
                                            selectedDate &&
                                            !disabled && (
                                                <span
                                                    role="button"
                                                    tabIndex={0}
                                                    aria-label={t.clear}
                                                    className={cn(
                                                        styles.s5,
                                                        styles.s6,
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
                                                        icon="close"
                                                        className={styles.s7}
                                                        aria-hidden
                                                    />
                                                </span>
                                            )}

                                        <Icon
                                            icon="chevron-down"
                                            className={cn(
                                                styles.s8,
                                                open && styles.s9,
                                            )}
                                            aria-hidden
                                        />
                                    </span>
                                }
                            >
                                <span
                                    className={cn(
                                        styles.s10,
                                        selectedDate ? styles.s11 : styles.s12,
                                        classNames?.value,
                                    )}
                                >
                                    {resolvedLabel}
                                </span>
                            </Dropdown.Trigger>

                            <Dropdown.Menu
                                role="dialog"
                                className={cn(styles.s13, classNames?.menu)}
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
                                        styles.s14,
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

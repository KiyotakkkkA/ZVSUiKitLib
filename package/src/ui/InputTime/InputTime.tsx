import { useCallback, useState } from "react";
import { cn } from "../../lib/utils";
import { useLocale } from "../../hooks/useLocale";
import { Dropdown } from "../Dropdown/Dropdown";
import { PickerTrigger } from "../_shared/PickerTrigger";
import { TimeColumns } from "../_shared/TimeColumns";
import { formatTime, parseTime } from "../_shared/time";
import type { InputTimeProps, TimeValue } from "./types";

export function InputTime({
    value,
    defaultValue = null,
    onChange,

    placeholder,
    minuteStep = 1,
    disabled = false,

    closeOnSelect = false,
    clearable = false,

    menuPlacement = "bottom-left",
    ref,
    menuWidth = 200,

    className,
    classNames,
}: InputTimeProps) {
    const t = useLocale().inputTime;
    const calendarT = useLocale().calendar;
    const [innerValue, setInnerValue] = useState<TimeValue>(defaultValue);

    const isControlled = value !== undefined;
    const selectedTime = parseTime(isControlled ? value : innerValue);

    const setTime = useCallback(
        (next: TimeValue) => {
            if (!isControlled) {
                setInnerValue(next);
            }

            onChange?.(next);
        },
        [isControlled, onChange],
    );

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
                                label={
                                    selectedTime
                                        ? formatTime(
                                              selectedTime.hours,
                                              selectedTime.minutes,
                                          )
                                        : (placeholder ?? t.placeholder)
                                }
                                hasValue={Boolean(selectedTime)}
                                clearable={clearable}
                                disabled={disabled}
                                clearLabel={t.clear}
                                onClear={() => setTime(null)}
                                classNames={{
                                    ...classNames,
                                    value: cn(
                                        selectedTime && "tabular-nums",
                                        classNames?.value,
                                    ),
                                }}
                            />

                            <Dropdown.Menu
                                role="dialog"
                                className={cn(
                                    "z-40 rounded-xl border border-main-700 bg-main-900 p-1.5 shadow-2xl",
                                    classNames?.menu,
                                )}
                            >
                                <TimeColumns
                                    hours={selectedTime?.hours ?? null}
                                    minutes={selectedTime?.minutes ?? null}
                                    minuteStep={minuteStep}
                                    hoursLabel={calendarT.hours}
                                    minutesLabel={calendarT.minutes}
                                    className={classNames?.columns}
                                    onChange={(hours, minutes, part) => {
                                        setTime(formatTime(hours, minutes));

                                        if (
                                            closeOnSelect &&
                                            part === "minutes"
                                        ) {
                                            close();
                                        }
                                    }}
                                />
                            </Dropdown.Menu>
                        </>
                    )}
                </Dropdown.Render>
            </Dropdown>
        </div>
    );
}

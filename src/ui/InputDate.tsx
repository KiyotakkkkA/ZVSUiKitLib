import { Icon } from "@iconify/react";
import { createPortal } from "react-dom";
import {
    useCallback,
    useEffect,
    useId,
    useMemo,
    useRef,
    useState,
    type CSSProperties,
} from "react";
import { Button } from "./Button";
import { Calendar, type CalendarDate, type CalendarProps } from "./Calendar";
import { cn } from "../lib/utils";

type InputDateProps = {
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
    className?: string;
    classNames?: {
        trigger?: string;
        menu?: string;
        calendar?: string;
        value?: string;
        controls?: string;
        clearButton?: string;
    };
    formatLabel?: (date: Date) => string;
};

const INPUT_DATE_MENU_GAP = 8;

function getMenuStyle(
    triggerElement: HTMLButtonElement,
    menuPlacement: "bottom" | "top",
    menuWidth: number | "auto",
): CSSProperties {
    const rect = triggerElement.getBoundingClientRect();
    const viewportPadding = 8;
    const resolvedLeft = Math.max(
        viewportPadding,
        Math.min(
            rect.left,
            window.innerWidth -
                (typeof menuWidth === "number" ? menuWidth : 0) -
                viewportPadding,
        ),
    );

    const style: CSSProperties = {
        left: resolvedLeft,
        position: "fixed",
        width: menuWidth,
    };

    if (menuPlacement === "top") {
        style.bottom = window.innerHeight - rect.top + INPUT_DATE_MENU_GAP;
    } else {
        style.top = rect.bottom + INPUT_DATE_MENU_GAP;
    }

    return style;
}

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
    menuPlacement = "bottom",
    menuWidth = "auto",
    className,
    classNames,
    formatLabel,
}: InputDateProps) {
    const [open, setOpen] = useState(false);
    const [menuStyle, setMenuStyle] = useState<CSSProperties>({});
    const [innerValue, setInnerValue] = useState<CalendarDate>(defaultValue);
    const [triggerElement, setTriggerElement] =
        useState<HTMLButtonElement | null>(null);
    const rootRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const menuId = useId();

    const selectedDate = value !== undefined ? value : innerValue;
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

    const updateMenuPosition = useCallback(() => {
        if (!triggerElement) {
            return;
        }

        setMenuStyle(getMenuStyle(triggerElement, menuPlacement, menuWidth));
    }, [menuPlacement, menuWidth, triggerElement]);

    useEffect(() => {
        if (!open) {
            return;
        }

        const onOutsidePointer = (event: PointerEvent) => {
            const target = event.target;
            if (!(target instanceof Node)) {
                return;
            }

            if (
                target instanceof Element &&
                target.closest('[role="listbox"]')
            ) {
                return;
            }

            if (
                rootRef.current?.contains(target) ||
                menuRef.current?.contains(target)
            ) {
                return;
            }

            setOpen(false);
        };

        const onEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setOpen(false);
            }
        };

        window.addEventListener("pointerdown", onOutsidePointer);
        window.addEventListener("keydown", onEscape);
        return () => {
            window.removeEventListener("pointerdown", onOutsidePointer);
            window.removeEventListener("keydown", onEscape);
        };
    }, [open]);

    useEffect(() => {
        if (!open) {
            return;
        }

        const rafId = window.requestAnimationFrame(() => {
            updateMenuPosition();
        });

        const onViewportChange = () => {
            updateMenuPosition();
        };

        window.addEventListener("resize", onViewportChange);
        window.addEventListener("scroll", onViewportChange, true);

        return () => {
            window.cancelAnimationFrame(rafId);
            window.removeEventListener("resize", onViewportChange);
            window.removeEventListener("scroll", onViewportChange, true);
        };
    }, [open, updateMenuPosition]);

    const onCalendarChange = useCallback(
        (nextDate: CalendarDate) => {
            if (value === undefined) {
                setInnerValue(nextDate);
            }

            onChange?.(nextDate);

            if (closeOnSelect && nextDate) {
                setOpen(false);
            }
        },
        [closeOnSelect, onChange, value],
    );

    const clearDate = useCallback(() => {
        onCalendarChange(null);
    }, [onCalendarChange]);

    const menuNode = useMemo(
        () => (
            <div
                id={menuId}
                ref={menuRef}
                role="dialog"
                tabIndex={-1}
                style={menuStyle}
                className={cn(
                    "z-40 rounded-xl border border-main-700 bg-main-900 shadow-2xl",
                    "max-w-[calc(100vw-1rem)] transition-all duration-150",
                    open
                        ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                        : "pointer-events-none -translate-y-1 scale-98 opacity-0",
                    classNames?.menu,
                )}
            >
                <Calendar
                    value={selectedDate}
                    onChange={onCalendarChange}
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
            </div>
        ),
        [
            allowDeselect,
            classNames,
            disabledDates,
            locale,
            maxDate,
            menuId,
            menuStyle,
            minDate,
            onCalendarChange,
            open,
            selectedDate,
            showOutsideDays,
            weekStartsOn,
        ],
    );

    return (
        <div ref={rootRef} className={cn("w-full", className)}>
            <Button
                ref={setTriggerElement}
                variant=""
                disabled={disabled}
                aria-haspopup="dialog"
                aria-expanded={open}
                aria-controls={menuId}
                onClick={() => setOpen((prev) => !prev)}
                className={cn(
                    "h-11 w-full justify-between rounded-xl border border-main-700 bg-main-900 px-3 text-main-100",
                    "hover:bg-main-800",
                    classNames?.trigger,
                )}
            >
                <span
                    className={cn(
                        "min-w-0 truncate text-left text-sm",
                        selectedDate ? "text-main-100" : "text-main-400",
                        classNames?.value,
                    )}
                >
                    {resolvedLabel}
                </span>

                <span
                    className={cn(
                        "ml-2 flex shrink-0 items-center gap-1",
                        classNames?.controls,
                    )}
                >
                    {clearable && selectedDate && (
                        <span
                            role="button"
                            tabIndex={0}
                            aria-label="Очистить дату"
                            className={cn(
                                "inline-flex h-6 w-6 items-center justify-center rounded-md text-main-400 transition-colors hover:bg-main-700/70 hover:text-main-100",
                                classNames?.clearButton,
                            )}
                            onClick={(event) => {
                                event.preventDefault();
                                event.stopPropagation();
                                clearDate();
                            }}
                            onKeyDown={(event) => {
                                if (
                                    event.key !== "Enter" &&
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
                            open ? "rotate-180" : "",
                        )}
                        aria-hidden
                    />
                </span>
            </Button>

            {createPortal(menuNode, document.body)}
        </div>
    );
}

export type { InputDateProps };

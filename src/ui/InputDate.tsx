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
import { cn } from "../lib/utils";
import { Button, Calendar, type CalendarDate, type CalendarProps } from ".";

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
const VIEWPORT_PADDING = 8;

function getMenuStyle(
    triggerElement: HTMLButtonElement,
    menuPlacement: "bottom" | "top",
    menuWidth: number | "auto",
): CSSProperties {
    const rect = triggerElement.getBoundingClientRect();

    const resolvedWidth = menuWidth === "auto" ? rect.width : menuWidth;

    const resolvedLeft = Math.max(
        VIEWPORT_PADDING,
        Math.min(
            rect.left,
            window.innerWidth - resolvedWidth - VIEWPORT_PADDING,
        ),
    );

    const style: CSSProperties = {
        position: "fixed",
        left: resolvedLeft,
        width: resolvedWidth,
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

    const rootRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);

    const menuId = useId();

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

    const updateMenuPosition = useCallback(() => {
        if (!triggerRef.current) {
            return;
        }

        setMenuStyle(
            getMenuStyle(triggerRef.current, menuPlacement, menuWidth),
        );
    }, [menuPlacement, menuWidth]);

    const closeMenu = useCallback(() => {
        setOpen(false);
    }, []);

    const toggleMenu = useCallback(() => {
        if (disabled) {
            return;
        }

        setOpen((prev) => !prev);
    }, [disabled]);

    const handleCalendarChange = useCallback(
        (nextDate: CalendarDate) => {
            if (!isControlled) {
                setInnerValue(nextDate);
            }

            onChange?.(nextDate);

            if (closeOnSelect && nextDate) {
                closeMenu();
            }
        },
        [closeMenu, closeOnSelect, isControlled, onChange],
    );

    const clearDate = useCallback(() => {
        handleCalendarChange(null);
    }, [handleCalendarChange]);

    useEffect(() => {
        if (!open) {
            return;
        }

        const frameId = window.requestAnimationFrame(updateMenuPosition);

        const handleViewportChange = () => {
            updateMenuPosition();
        };

        window.addEventListener("resize", handleViewportChange);
        window.addEventListener("scroll", handleViewportChange, true);

        return () => {
            window.cancelAnimationFrame(frameId);
            window.removeEventListener("resize", handleViewportChange);
            window.removeEventListener("scroll", handleViewportChange, true);
        };
    }, [open, updateMenuPosition]);

    useEffect(() => {
        if (!open) {
            return;
        }

        const handlePointerDown = (event: PointerEvent) => {
            const target = event.target;

            if (!(target instanceof Node)) {
                return;
            }

            if (
                rootRef.current?.contains(target) ||
                menuRef.current?.contains(target)
            ) {
                return;
            }

            closeMenu();
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeMenu();
            }
        };

        window.addEventListener("pointerdown", handlePointerDown);
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("pointerdown", handlePointerDown);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [closeMenu, open]);

    return (
        <div ref={rootRef} className={cn("w-full", className)}>
            <Button
                ref={triggerRef}
                variant=""
                disabled={disabled}
                aria-haspopup="dialog"
                aria-expanded={open}
                aria-controls={open ? menuId : undefined}
                onClick={toggleMenu}
                className={cn(
                    "h-11 w-full justify-between rounded-xl border border-main-700 bg-main-900 px-3 text-main-100",
                    "hover:bg-main-800",
                    "focus-visible:ring-2 focus-visible:ring-main-300/50",
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
                    {clearable && selectedDate && !disabled && (
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
                            open && "rotate-180",
                        )}
                        aria-hidden
                    />
                </span>
            </Button>

            {open &&
                typeof document !== "undefined" &&
                createPortal(
                    <div
                        id={menuId}
                        ref={menuRef}
                        role="dialog"
                        tabIndex={-1}
                        style={menuStyle}
                        className={cn(
                            "z-40 rounded-xl border border-main-700 bg-main-900 shadow-2xl",
                            "max-w-[calc(100vw-1rem)]",
                            classNames?.menu,
                        )}
                    >
                        <Calendar
                            value={selectedDate}
                            onChange={handleCalendarChange}
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
                    </div>,
                    document.body,
                )}
        </div>
    );
}

export type { InputDateProps };

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
    type Ref,
    type ReactNode,
} from "react";
import { Button } from "./Button";
import { InputSmall } from "./InputSmall";
import { cn } from "../lib/utils";

type DropdownOption = {
    value: string;
    label: string;
    icon?: ReactNode;
    onClick?: () => void;
};

type DropdownProps = {
    value?: string;
    options: DropdownOption[];
    onChange?: (nextValue: string) => void;
    placeholder?: string;
    searchable?: boolean;
    searchPlaceholder?: string;
    emptyMessage?: string;
    className?: string;
    triggerClassName?: string;
    menuClassName?: string;
    optionClassName?: string;
    disabled?: boolean;
    ariaLabel?: string;
    menuPlacement?: "bottom" | "top";
    closeOnSelect?: boolean;
    matchTriggerWidth?: boolean;
    renderTrigger?: (args: {
        open: boolean;
        toggleOpen: () => void;
        triggerRef: Ref<HTMLButtonElement>;
        disabled: boolean;
        ariaProps: {
            "aria-haspopup": "listbox";
            "aria-expanded": boolean;
            "aria-controls": string;
            "aria-label"?: string;
        };
    }) => ReactNode;
};

const DROPDOWN_MENU_GAP = 8;

const getMenuStyle = (
    triggerElement: HTMLButtonElement,
    menuPlacement: "bottom" | "top",
    matchTriggerWidth: boolean,
): CSSProperties => {
    const rect = triggerElement.getBoundingClientRect();
    const style: CSSProperties = {
        left: rect.left,
        position: "fixed",
    };

    if (menuPlacement === "top") {
        style.bottom = window.innerHeight - rect.top + DROPDOWN_MENU_GAP;
    } else {
        style.top = rect.bottom + DROPDOWN_MENU_GAP;
    }

    if (matchTriggerWidth) {
        style.width = rect.width;
    }

    return style;
};

export function Dropdown({
    value,
    options,
    onChange,
    placeholder,
    searchable = false,
    searchPlaceholder = "Поиск...",
    emptyMessage = "Ничего не найдено",
    className = "",
    triggerClassName = "",
    menuClassName = "",
    optionClassName = "",
    disabled = false,
    ariaLabel,
    menuPlacement = "bottom",
    closeOnSelect = true,
    matchTriggerWidth = true,
    renderTrigger,
}: DropdownProps) {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [menuStyle, setMenuStyle] = useState<CSSProperties>({});
    const [triggerElement, setTriggerElement] =
        useState<HTMLButtonElement | null>(null);
    const rootRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const menuId = useId();
    const setTriggerRef = useCallback((node: HTMLButtonElement | null) => {
        setTriggerElement(node);
    }, []);

    const updateMenuPosition = useCallback(() => {
        if (!triggerElement) {
            return;
        }

        setMenuStyle(
            getMenuStyle(triggerElement, menuPlacement, matchTriggerWidth),
        );
    }, [matchTriggerWidth, menuPlacement, triggerElement]);

    const selectedOption = useMemo(
        () => options.find((item) => item.value === value),
        [options, value],
    );

    const filteredOptions = useMemo(() => {
        if (!searchable) {
            return options;
        }
        const normalizedQuery = query.trim().toLocaleLowerCase();
        if (!normalizedQuery) {
            return options;
        }
        return options.filter((option) =>
            option.label.toLocaleLowerCase().includes(normalizedQuery),
        );
    }, [options, query, searchable]);

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

    const toggleOpen = () => {
        if (disabled) {
            return;
        }
        setOpen((current) => {
            if (!current) {
                setQuery("");
            }
            return !current;
        });
    };

    const onSelect = (nextValue: string) => {
        const selected = options.find((item) => item.value === nextValue);
        onChange?.(nextValue);
        selected?.onClick?.();
        setQuery("");
        if (closeOnSelect) {
            setOpen(false);
        }
    };

    const menuPositionClassName =
        menuPlacement === "top"
            ? `origin-bottom ${
                  open
                      ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                      : "pointer-events-none translate-y-1 scale-98 opacity-0"
              }`
            : `origin-top ${
                  open
                      ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                      : "pointer-events-none -translate-y-1 scale-98 opacity-0"
              }`;

    const menuNode = (
        <div
            id={menuId}
            role="listbox"
            tabIndex={-1}
            ref={menuRef}
            style={menuStyle}
            className={cn(
                "fixed z-60 rounded-xl bg-main-800 p-1.5 transition-all duration-180",
                matchTriggerWidth ? "" : "min-w-34",
                menuPositionClassName,
                menuClassName,
            )}
        >
            <div className="space-y-1.5 overflow-x-hidden rounded-lg">
                {searchable ? (
                    <InputSmall
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder={searchPlaceholder}
                        className="h-8 w-full"
                    />
                ) : null}

                <div className="max-h-72 space-y-1 overflow-y-auto overflow-x-hidden rounded-lg pr-1">
                    {filteredOptions.length === 0 ? (
                        <p className="px-3 py-2 text-sm text-main-500">
                            {emptyMessage}
                        </p>
                    ) : null}

                    {filteredOptions.map((option) => {
                        const active = option.value === value;
                        return (
                            <Button
                                key={option.value}
                                role="option"
                                aria-selected={active}
                                onClick={() => onSelect(option.value)}
                                className={cn(
                                    "w-full min-w-0 justify-between space-x-2 rounded-lg border border-transparent",
                                    "px-3 py-2 text-left text-sm",
                                    active
                                        ? "bg-main-700/60 text-main-100"
                                        : "bg-transparent text-main-300 hover:bg-main-700/80 hover:text-main-100",
                                    optionClassName,
                                )}
                            >
                                <span className="flex min-w-0 items-center gap-2 truncate">
                                    {option.icon ? (
                                        <span className="shrink-0 text-main-300">
                                            {option.icon}
                                        </span>
                                    ) : null}
                                    <span className="min-w-0 truncate">
                                        {option.label}
                                    </span>
                                </span>
                                <span className="shrink-0">
                                    {active ? (
                                        <Icon
                                            icon="mdi:check"
                                            className="text-main-200"
                                            aria-hidden
                                        />
                                    ) : null}
                                </span>
                            </Button>
                        );
                    })}
                </div>
            </div>
        </div>
    );

    return (
        <div
            ref={rootRef}
            className={cn(
                "min-w-0",
                matchTriggerWidth ? "w-full" : "",
                className,
            )}
        >
            {renderTrigger ? (
                renderTrigger({
                    open,
                    toggleOpen,
                    triggerRef: setTriggerRef,
                    disabled,
                    ariaProps: {
                        "aria-haspopup": "listbox",
                        "aria-expanded": open,
                        "aria-controls": menuId,
                        "aria-label": ariaLabel,
                    },
                })
            ) : (
                <Button
                    variant=""
                    ref={setTriggerRef}
                    aria-haspopup="listbox"
                    aria-expanded={open}
                    aria-controls={menuId}
                    aria-label={ariaLabel}
                    disabled={disabled}
                    onClick={toggleOpen}
                    className={cn(
                        "min-h-10 w-full min-w-0 justify-between gap-3 rounded-xl border-transparent px-3 py-2 text-main-100",
                        triggerClassName,
                    )}
                >
                    <span className="min-w-0 truncate text-left">
                        {selectedOption?.label ?? placeholder ?? "Выберите"}
                    </span>
                    <Icon
                        icon="mdi:chevron-down"
                        className={cn(
                            "shrink-0 text-main-400 transition-transform duration-200",
                            open ? "rotate-180" : "",
                        )}
                        aria-hidden
                    />
                </Button>
            )}

            {createPortal(menuNode, document.body)}
        </div>
    );
}

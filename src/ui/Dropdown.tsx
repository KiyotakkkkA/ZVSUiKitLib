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
import { cn } from "../lib/utils";
import { ScrollArea } from "./ScrollArea";
import { Button, InputSmall } from "@kiyotakkkka/zvs-uikit-lib/ui";

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
    menuWidth?: number | string;
    optionClassName?: string;
    disabled?: boolean;
    ariaLabel?: string;
    menuPlacement?: "bottom" | "top";
    closeOnSelect?: boolean;
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
    menuWidth: number | string,
): CSSProperties => {
    const rect = triggerElement.getBoundingClientRect();
    const viewportPadding = 8;
    const widthValue = typeof menuWidth === "number" ? menuWidth : null;

    let left = rect.left;

    if (widthValue !== null) {
        left = Math.max(
            viewportPadding,
            Math.min(left, window.innerWidth - widthValue - viewportPadding),
        );
    }

    const style: CSSProperties = {
        left,
        position: "fixed",
        width: menuWidth,
    };

    if (menuPlacement === "top") {
        style.bottom = window.innerHeight - rect.top + DROPDOWN_MENU_GAP;
    } else {
        style.top = rect.bottom + DROPDOWN_MENU_GAP;
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
    menuWidth,
    optionClassName = "",
    disabled = false,
    ariaLabel,
    menuPlacement = "bottom",
    closeOnSelect = true,
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

    const resolvedMenuWidth = useMemo(() => {
        if (menuWidth !== undefined) {
            return menuWidth;
        }

        const longestLabelLength = options.reduce(
            (maxLength, option) => Math.max(maxLength, option.label.length),
            0,
        );

        const estimatedWidth = longestLabelLength * 9 + 72;
        return Math.min(320, Math.max(120, estimatedWidth));
    }, [menuWidth, options]);

    const updateMenuPosition = useCallback(() => {
        if (!triggerElement) {
            return;
        }

        setMenuStyle(
            getMenuStyle(triggerElement, menuPlacement, resolvedMenuWidth),
        );
    }, [menuPlacement, resolvedMenuWidth, triggerElement]);

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
                "max-w-[calc(100vw-1rem)]",
                menuPositionClassName,
                menuClassName,
            )}
        >
            <div className={cn("space-y-1.5 rounded-lg")}>
                {searchable && (
                    <InputSmall
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder={searchPlaceholder}
                        className="h-8 w-full"
                    />
                )}

                <ScrollArea className={cn("max-h-72 rounded-lg pr-1")}>
                    <div className="flex flex-col gap-1">
                        {filteredOptions.length === 0 && (
                            <p className="px-3 py-2 text-sm text-main-500">
                                {emptyMessage}
                            </p>
                        )}

                        {filteredOptions.map((option) => {
                            const active = option.value === value;
                            return (
                                <Button
                                    key={option.value}
                                    role="option"
                                    aria-selected={active}
                                    onClick={() => onSelect(option.value)}
                                    className={cn(
                                        "justify-between space-x-2 rounded-lg border border-transparent",
                                        "w-fix min-w-full",
                                        "px-3 py-2 text-left text-sm",
                                        active
                                            ? "bg-main-700/60 text-main-100"
                                            : "bg-transparent text-main-300 hover:bg-main-700/80 hover:text-main-100",
                                        optionClassName,
                                    )}
                                >
                                    <span
                                        className={cn(
                                            "flex items-center gap-2",
                                            "whitespace-nowrap",
                                        )}
                                    >
                                        {option.icon && (
                                            <span className="shrink-0 text-main-300">
                                                {option.icon}
                                            </span>
                                        )}
                                        <span
                                            className={cn("whitespace-nowrap")}
                                        >
                                            {option.label}
                                        </span>
                                    </span>
                                    <span className="shrink-0">
                                        {active && (
                                            <Icon
                                                icon="mdi:check"
                                                className="text-main-200"
                                                aria-hidden
                                            />
                                        )}
                                    </span>
                                </Button>
                            );
                        })}
                    </div>
                </ScrollArea>
            </div>
        </div>
    );

    return (
        <div ref={rootRef} className={cn("min-w-0 w-fix", className)}>
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
                        "min-h-10 justify-between gap-3 rounded-xl border-transparent px-3 py-2 text-main-100",
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

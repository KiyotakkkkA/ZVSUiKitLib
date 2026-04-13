import type React from "react";
import { createPortal } from "react-dom";
import {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
    type CSSProperties,
} from "react";
import { Icon } from "@iconify/react";
import { ScrollArea } from "./ScrollArea";
import { cn } from "../lib/utils";

export type AutoFillOption = {
    value: string;
    label: string;
    description?: string;
};

type AutoFillSelectorProps = Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "onChange"
> & {
    options: AutoFillOption[];
    placeholder?: string;
    value?: string[];
    onChange?: (value: string[]) => void;
    disabled?: boolean;
};

const EMPTY_VALUE: string[] = [];
const SELECTOR_MENU_GAP = 8;

export const AutoFillSelector = ({
    options,
    placeholder,
    className,
    disabled,
    value = EMPTY_VALUE,
    onChange,
    ...props
}: AutoFillSelectorProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [menuStyle, setMenuStyle] = useState<CSSProperties>({});
    const rootRef = useRef<HTMLDivElement | null>(null);
    const triggerRef = useRef<HTMLDivElement | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const updateMenuPosition = useCallback(() => {
        const triggerElement = triggerRef.current;
        if (!triggerElement) {
            return;
        }

        const rect = triggerElement.getBoundingClientRect();
        setMenuStyle({
            left: rect.left,
            maxWidth: "calc(100vw - 2rem)",
            minWidth: rect.width,
            position: "fixed",
            top: rect.bottom + SELECTOR_MENU_GAP,
            width: "max-content",
        });
    }, []);

    const selectedSet = useMemo(() => new Set(value), [value]);

    const filteredOptions = useMemo(() => {
        const normalized = query.trim().toLowerCase();
        if (!normalized) return options;

        return options.filter((option) => {
            const label = option.label.toLowerCase();
            const description = option.description?.toLowerCase() ?? "";
            const valueText = option.value.toLowerCase();

            return (
                label.includes(normalized) ||
                description.includes(normalized) ||
                valueText.includes(normalized)
            );
        });
    }, [options, query]);

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const handleClickOutside = (event: PointerEvent) => {
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

            setIsOpen(false);
        };

        window.addEventListener("pointerdown", handleClickOutside);
        return () =>
            window.removeEventListener("pointerdown", handleClickOutside);
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        updateMenuPosition();

        const onViewportChange = () => {
            updateMenuPosition();
        };

        window.addEventListener("resize", onViewportChange);
        window.addEventListener("scroll", onViewportChange, true);

        return () => {
            window.removeEventListener("resize", onViewportChange);
            window.removeEventListener("scroll", onViewportChange, true);
        };
    }, [isOpen, updateMenuPosition]);

    const toggleValue = (nextValue: string) => {
        const next = new Set(value);

        if (next.has(nextValue)) {
            next.delete(nextValue);
        } else {
            next.add(nextValue);
        }

        onChange?.(Array.from(next));
    };

    const removeValue = (removeValue: string) => {
        onChange?.(value.filter((item) => item !== removeValue));
    };

    const inputPlaceholder = value.length
        ? ""
        : (placeholder ?? "Введите для поиска");

    return (
        <div
            ref={rootRef}
            className={cn("relative min-w-0", className)}
            {...props}
        >
            <div
                ref={triggerRef}
                className={cn(
                    "flex min-h-10 w-full flex-wrap items-center gap-2 rounded-xl border border-main-700/70",
                    "bg-main-800/70 px-3 py-2 text-sm text-main-100 transition-colors duration-200",
                    "focus-within:border-main-500/70",
                    disabled ? "cursor-not-allowed opacity-60" : "cursor-text",
                )}
                role="button"
                tabIndex={disabled ? -1 : 0}
                aria-expanded={isOpen}
                aria-disabled={disabled}
                onClick={() => {
                    if (disabled) {
                        return;
                    }

                    setIsOpen(true);
                    inputRef.current?.focus();
                }}
                onKeyDown={(event) => {
                    if (disabled) {
                        return;
                    }

                    if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setIsOpen(true);
                        inputRef.current?.focus();
                    }
                }}
            >
                {value.map((item) => {
                    const option = options.find((opt) => opt.value === item);

                    return (
                        <span
                            key={item}
                            className="inline-flex items-center gap-1 rounded-full border border-main-600/70 bg-main-700/70 px-2 py-0.5 text-xs text-main-100"
                        >
                            {option?.label ?? item}
                            {!disabled && (
                                <button
                                    type="button"
                                    className="text-main-400 transition-colors hover:text-main-100"
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        removeValue(item);
                                    }}
                                    aria-label="Удалить"
                                >
                                    <Icon
                                        icon="mdi:close"
                                        className="h-3.5 w-3.5"
                                    />
                                </button>
                            )}
                        </span>
                    );
                })}

                <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    disabled={disabled}
                    onChange={(event) => {
                        setQuery(event.target.value);
                        if (!isOpen) {
                            setIsOpen(true);
                        }
                    }}
                    onFocus={() => {
                        if (!disabled) {
                            setIsOpen(true);
                            updateMenuPosition();
                        }
                    }}
                    onKeyDown={(event) => {
                        if (
                            event.key === "Backspace" &&
                            !query &&
                            value.length
                        ) {
                            removeValue(value[value.length - 1]);
                        }
                    }}
                    placeholder={inputPlaceholder}
                    className="min-w-35 flex-1 bg-transparent text-sm text-main-100 placeholder:text-main-500 outline-none"
                />
            </div>

            {createPortal(
                <div
                    ref={menuRef}
                    style={menuStyle}
                    className={cn(
                        "fixed z-60 overflow-hidden rounded-xl border border-main-700",
                        "bg-main-800 transition-all duration-200",
                        isOpen
                            ? "max-h-64 opacity-100"
                            : "pointer-events-none max-h-0 opacity-0",
                    )}
                >
                    <ScrollArea orientation="both" className="max-h-64 py-1">
                        {filteredOptions.length === 0 && (
                            <div className="px-3 py-2 text-sm text-main-500">
                                Ничего не найдено
                            </div>
                        )}

                        {filteredOptions.map((option) => {
                            const isSelected = selectedSet.has(option.value);

                            return (
                                <button
                                    key={option.value}
                                    type="button"
                                    onClick={() => {
                                        toggleValue(option.value);
                                        setQuery("");
                                    }}
                                    className={cn(
                                        "flex w-auto min-w-full cursor-pointer items-start justify-between gap-3 px-3 py-2",
                                        "text-left text-sm transition-colors",
                                        isSelected
                                            ? "bg-main-700 text-main-100"
                                            : "text-main-300 hover:bg-main-700 hover:text-main-100",
                                    )}
                                >
                                    <span>
                                        <span className="block whitespace-nowrap font-medium">
                                            {option.label}
                                        </span>
                                        {option.description && (
                                            <span className="mt-0.5 block whitespace-nowrap text-xs text-main-500">
                                                {option.description}
                                            </span>
                                        )}
                                    </span>
                                    {isSelected && (
                                        <Icon
                                            icon="mdi:check"
                                            className="mt-0.5 h-4 w-4 shrink-0 text-main-200"
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </ScrollArea>
                </div>,
                document.body,
            )}
        </div>
    );
};

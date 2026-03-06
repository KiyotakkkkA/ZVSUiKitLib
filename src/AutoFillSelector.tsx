import type React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { cn } from "./lib/utils";

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
    const rootRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

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

        const handleClickOutside = (event: MouseEvent) => {
            if (!rootRef.current) {
                return;
            }

            if (rootRef.current.contains(event.target as Node)) {
                return;
            }

            setIsOpen(false);
        };

        window.addEventListener("pointerdown", handleClickOutside);
        return () =>
            window.removeEventListener("pointerdown", handleClickOutside);
    }, [isOpen]);

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

    return (
        <div
            ref={rootRef}
            className={cn("relative min-w-0", className)}
            {...props}
        >
            <div
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
                            {!disabled ? (
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
                            ) : null}
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
                    placeholder={
                        value.length
                            ? ""
                            : (placeholder ?? "Введите для поиска")
                    }
                    className="min-w-35 flex-1 bg-transparent text-sm text-main-100 placeholder:text-main-500 outline-none"
                />
            </div>

            <div
                className={cn(
                    "absolute left-0 right-0 z-30 mt-2 overflow-hidden rounded-xl border border-main-700",
                    "bg-main-800 transition-all duration-200",
                    isOpen
                        ? "max-h-64 opacity-100"
                        : "pointer-events-none max-h-0 opacity-0",
                )}
            >
                <div className="max-h-64 overflow-auto py-1">
                    {filteredOptions.length === 0 ? (
                        <div className="px-3 py-2 text-sm text-main-500">
                            Ничего не найдено
                        </div>
                    ) : null}

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
                                    "flex w-full cursor-pointer items-start justify-between gap-3 px-3 py-2",
                                    "text-left text-sm transition-colors",
                                    isSelected
                                        ? "bg-main-700 text-main-100"
                                        : "text-main-300 hover:bg-main-700 hover:text-main-100",
                                )}
                            >
                                <span className="min-w-0">
                                    <span className="block truncate font-medium">
                                        {option.label}
                                    </span>
                                    {option.description ? (
                                        <span className="mt-0.5 block text-xs text-main-500">
                                            {option.description}
                                        </span>
                                    ) : null}
                                </span>
                                {isSelected ? (
                                    <Icon
                                        icon="mdi:check"
                                        className="mt-0.5 h-4 w-4 shrink-0 text-main-200"
                                    />
                                ) : null}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

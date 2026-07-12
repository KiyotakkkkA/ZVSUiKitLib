import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useRef,
    useState,
} from "react";
import { Icon } from "@iconify/react";
import { Dropdown } from "../Dropdown/Dropdown";
import { ScrollArea } from "../ScrollArea/ScrollArea";
import { cn } from "../../lib/utils";
import type {
    AutoFillSelectorProps,
    AutoFillSelectorTriggerProps,
    AutoFillSelectorTagsProps,
    AutoFillSelectorInputProps,
    AutoFillSelectorMenuProps,
    AutoFillSelectorOptionsProps,
    AutoFillSelectorEmptyProps,
    AutoFillSelectorContextValue,
} from "./types";

const EMPTY_VALUE: string[] = [];

const AutoFillSelectorContext =
    createContext<AutoFillSelectorContextValue | null>(null);

function useAutoFillSelectorContext() {
    const context = useContext(AutoFillSelectorContext);

    if (!context) {
        throw new Error(
            "AutoFillSelector.Trigger, AutoFillSelector.Tags, AutoFillSelector.Input, AutoFillSelector.Menu, AutoFillSelector.Options и AutoFillSelector.Empty должны использоваться внутри AutoFillSelector.",
        );
    }

    return context;
}

function AutoFillSelectorRoot({
    options,
    value = EMPTY_VALUE,
    onChange,
    disabled = false,
    menuWidth = "auto",
    className,
    children,
    onOpenChange,
    ...props
}: AutoFillSelectorProps) {
    const [query, setQuery] = useState("");
    const inputRef = useRef<HTMLInputElement | null>(null);

    const selectedSet = useMemo(() => new Set(value), [value]);

    const filteredOptions = useMemo(() => {
        const normalized = query.trim().toLowerCase();

        if (!normalized) {
            return options;
        }

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

    const toggleValue = useCallback(
        (nextValue: string) => {
            const next = new Set(value);

            if (next.has(nextValue)) {
                next.delete(nextValue);
            } else {
                next.add(nextValue);
            }

            onChange?.(Array.from(next));
        },
        [value, onChange],
    );

    const removeValue = useCallback(
        (removedValue: string) => {
            onChange?.(value.filter((item) => item !== removedValue));
        },
        [value, onChange],
    );

    const contextValue = useMemo<AutoFillSelectorContextValue>(
        () => ({
            options,
            value,
            selectedSet,
            query,
            setQuery,
            filteredOptions,
            disabled,
            inputRef,
            toggleValue,
            removeValue,
        }),
        [
            options,
            value,
            selectedSet,
            query,
            filteredOptions,
            disabled,
            toggleValue,
            removeValue,
        ],
    );

    return (
        <AutoFillSelectorContext.Provider value={contextValue}>
            <div
                className={cn(
                    "relative w-72 max-w-full min-w-0 overflow-hidden",
                    className,
                )}
                {...props}
            >
                <Dropdown
                    className="w-full"
                    disabled={disabled}
                    menuWidth={menuWidth}
                    onOpenChange={(open) => {
                        if (!open) {
                            setQuery("");
                        }

                        onOpenChange?.(open);
                    }}
                >
                    {children}
                </Dropdown>
            </div>
        </AutoFillSelectorContext.Provider>
    );
}

function AutoFillSelectorTrigger({
    rounded = "rounded-2xl",
    className,
    children,
    ...props
}: AutoFillSelectorTriggerProps) {
    const { disabled, inputRef } = useAutoFillSelectorContext();

    return (
        <Dropdown.Anchor
            focusInputOnOpen={() => inputRef.current?.focus()}
            className={cn(
                "flex min-h-9 w-full min-w-0 max-w-full flex-wrap items-center gap-1 border border-main-700",
                "overflow-hidden bg-main-800 px-2 py-1 text-sm text-main-100 transition-colors duration-200",
                "hover:border-main-600 focus-within:border-main-500 focus-within:ring-2 focus-within:ring-main-500/20",
                `zvs-${rounded}`,
                disabled ? "cursor-not-allowed opacity-60" : "cursor-text",
                className,
            )}
            {...props}
        >
            {children}
        </Dropdown.Anchor>
    );
}

function AutoFillSelectorTags({
    rounded = "rounded-full",
    className,
    tagClassName,
    tagRemoveClassName,
    ...props
}: AutoFillSelectorTagsProps) {
    const { options, value, disabled, removeValue } =
        useAutoFillSelectorContext();

    if (!value.length) {
        return null;
    }

    return (
        <div
            className={cn(
                "flex min-w-0 max-w-full flex-wrap items-center gap-1",
                className,
            )}
            {...props}
        >
            {value.map((item) => {
                const option = options.find((opt) => opt.value === item);

                return (
                    <span
                        key={item}
                        className={cn(
                            "inline-flex min-w-0 max-w-28 items-center gap-1 bg-main-700 px-1.5 py-0.5 text-xs text-main-100",
                            `zvs-${rounded}`,
                            tagClassName,
                        )}
                    >
                        <span className="min-w-0 truncate">
                            {option?.label ?? item}
                        </span>

                        {!disabled && (
                            <button
                                type="button"
                                className={cn(
                                    "shrink-0 text-main-400 transition-colors hover:text-main-100",
                                    tagRemoveClassName,
                                )}
                                onClick={(event) => {
                                    event.stopPropagation();
                                    removeValue(item);
                                }}
                                aria-label="Удалить"
                            >
                                <Icon
                                    icon="mdi:close"
                                    className="h-3.5 w-3.5"
                                    aria-hidden
                                />
                            </button>
                        )}
                    </span>
                );
            })}
        </div>
    );
}

function AutoFillSelectorInput({
    rounded = "rounded-full",
    className,
    placeholder = "Введите для поиска",
    onFocus,
    onKeyDown,
    ...props
}: AutoFillSelectorInputProps) {
    const { value, query, setQuery, disabled, inputRef, removeValue } =
        useAutoFillSelectorContext();

    const inputPlaceholder = value.length ? "" : placeholder;

    return (
        <input
            ref={inputRef}
            type="text"
            value={query}
            disabled={disabled}
            placeholder={inputPlaceholder}
            onChange={(event) => {
                setQuery(event.target.value);
            }}
            onFocus={(event) => {
                onFocus?.(event);
            }}
            onKeyDown={(event) => {
                onKeyDown?.(event);

                if (event.defaultPrevented) return;

                if (event.key === "Backspace" && !query && value.length) {
                    removeValue(value[value.length - 1]);
                }
            }}
            className={cn(
                "min-w-20 flex-1 bg-transparent px-0.5 py-0.5 text-sm text-main-100 placeholder:text-main-500 outline-none",
                `zvs-${rounded}`,
                className,
            )}
            {...props}
        />
    );
}

function AutoFillSelectorMenu({
    className,
    scrollClassName,
    children,
    rounded = "rounded-4xl",
    ...props
}: AutoFillSelectorMenuProps) {
    return (
        <Dropdown.Menu
            aria-multiselectable
            rounded={rounded}
            className={cn(
                "border-main-700 bg-main-800 p-1 shadow-lg",
                className,
            )}
            {...props}
        >
            <ScrollArea
                orientation="vertical"
                className={cn("max-h-64", scrollClassName)}
            >
                {children}
            </ScrollArea>
        </Dropdown.Menu>
    );
}

function AutoFillSelectorOptions({
    rounded = "rounded-full",
    className,
    optionClassName,
    optionLabelClassName,
    optionDescriptionClassName,
    optionIconClassName,
    ...props
}: AutoFillSelectorOptionsProps) {
    const { filteredOptions, selectedSet, toggleValue, setQuery, inputRef } =
        useAutoFillSelectorContext();

    if (!filteredOptions.length) {
        return null;
    }

    return (
        <div className={cn("flex flex-col gap-1", className)} {...props}>
            {filteredOptions.map((option) => {
                const isSelected = selectedSet.has(option.value);

                return (
                    <Dropdown.Item
                        key={option.value}
                        active={isSelected}
                        closeOnClick={false}
                        icon={
                            isSelected ? (
                                <Icon
                                    icon="mdi:check"
                                    className={cn(
                                        "h-4 w-4 text-main-200",
                                        optionIconClassName,
                                    )}
                                    aria-hidden
                                />
                            ) : (
                                option.icon
                            )
                        }
                        onClick={() => {
                            toggleValue(option.value);
                            setQuery("");
                            inputRef.current?.focus();
                        }}
                        className={cn(
                            `w-full min-w-0 items-center gap-2 px-4 py-1.5 zvs-${rounded}`,
                            isSelected
                                ? "bg-main-700/60 text-main-100"
                                : "text-main-300 hover:bg-main-700/40 hover:text-main-100",
                            optionClassName,
                        )}
                    >
                        <span className="min-w-0 flex-1">
                            <span
                                className={cn(
                                    "block truncate font-medium",
                                    optionLabelClassName,
                                )}
                            >
                                {option.label}
                            </span>

                            {option.description && (
                                <span
                                    className={cn(
                                        "mt-0.5 block truncate text-xs text-main-500",
                                        optionDescriptionClassName,
                                    )}
                                >
                                    {option.description}
                                </span>
                            )}
                        </span>
                    </Dropdown.Item>
                );
            })}
        </div>
    );
}

function AutoFillSelectorEmpty({
    className,
    children = "Ничего не найдено",
    ...props
}: AutoFillSelectorEmptyProps) {
    const { filteredOptions } = useAutoFillSelectorContext();

    if (filteredOptions.length > 0) {
        return null;
    }

    return (
        <div
            className={cn("px-3 py-2 text-sm text-main-500", className)}
            {...props}
        >
            {children}
        </div>
    );
}

export const AutoFillSelector = Object.assign(AutoFillSelectorRoot, {
    Trigger: AutoFillSelectorTrigger,
    Tags: AutoFillSelectorTags,
    Input: AutoFillSelectorInput,
    Menu: AutoFillSelectorMenu,
    Options: AutoFillSelectorOptions,
    Empty: AutoFillSelectorEmpty,
});

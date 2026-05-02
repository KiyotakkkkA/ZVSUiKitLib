import type React from "react";
import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useRef,
    useState,
    type HTMLAttributes,
    type InputHTMLAttributes,
    type ReactNode,
} from "react";
import { Icon } from "@iconify/react";
import { Dropdown } from "./Dropdown";
import { ScrollArea } from "./ScrollArea";
import { cn } from "../lib/utils";

export type AutoFillOption = {
    value: string;
    label: string;
    description?: string;
    icon?: ReactNode;
};

type AutoFillSelectorProps = Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "onChange"
> & {
    options: AutoFillOption[];
    value?: string[];
    onChange?: (value: string[]) => void;
    disabled?: boolean;
    menuWidth?: number | string;
    children: ReactNode;
    onOpenChange?: (open: boolean) => void;
};

type AutoFillSelectorTriggerProps = HTMLAttributes<HTMLDivElement>;

type AutoFillSelectorTagsProps = HTMLAttributes<HTMLDivElement> & {
    tagClassName?: string;
    tagRemoveClassName?: string;
};

type AutoFillSelectorInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange" | "disabled"
>;

type AutoFillSelectorMenuProps = HTMLAttributes<HTMLDivElement> & {
    scrollClassName?: string;
};

type AutoFillSelectorOptionsProps = HTMLAttributes<HTMLDivElement> & {
    optionClassName?: string;
    optionLabelClassName?: string;
    optionDescriptionClassName?: string;
    optionIconClassName?: string;
};

type AutoFillSelectorEmptyProps = HTMLAttributes<HTMLDivElement> & {
    children?: ReactNode;
};

type AutoFillSelectorContextValue = {
    options: AutoFillOption[];
    value: string[];
    selectedSet: Set<string>;
    query: string;
    setQuery: (query: string) => void;
    filteredOptions: AutoFillOption[];
    disabled: boolean;
    inputRef: React.RefObject<HTMLInputElement | null>;
    toggleValue: (value: string) => void;
    removeValue: (value: string) => void;
};

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
    menuWidth = "max-content",
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

    const toggleValue = useCallback(() => {
        return (nextValue: string) => {
            const next = new Set(value);

            if (next.has(nextValue)) {
                next.delete(nextValue);
            } else {
                next.add(nextValue);
            }

            onChange?.(Array.from(next));
        };
    }, [value, onChange]);

    const removeValue = useCallback(() => {
        return (removedValue: string) => {
            onChange?.(value.filter((item) => item !== removedValue));
        };
    }, [value, onChange]);

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
            <div className={cn("relative min-w-0", className)} {...props}>
                <Dropdown
                    disabled={disabled}
                    menuRole="listbox"
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
    className,
    children,
    ...props
}: AutoFillSelectorTriggerProps) {
    const { disabled, inputRef } = useAutoFillSelectorContext();

    return (
        <Dropdown.Anchor
            focusInputOnOpen={() => inputRef.current?.focus()}
            className={cn(
                "flex min-h-10 w-full flex-wrap items-center gap-2 rounded-xl border border-main-700/70",
                "bg-main-800/70 px-3 py-2 text-sm text-main-100 transition-colors duration-200",
                "focus-within:border-main-500/70",
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
        <div className={cn("contents", className)} {...props}>
            {value.map((item) => {
                const option = options.find((opt) => opt.value === item);

                return (
                    <span
                        key={item}
                        className={cn(
                            "inline-flex items-center gap-1 rounded-full border border-main-600/70 bg-main-700/70 px-2 py-0.5 text-xs text-main-100",
                            tagClassName,
                        )}
                    >
                        {option?.label ?? item}

                        {!disabled && (
                            <button
                                type="button"
                                className={cn(
                                    "text-main-400 transition-colors hover:text-main-100",
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
                "min-w-35 flex-1 bg-transparent text-sm text-main-100 placeholder:text-main-500 outline-none",
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
    ...props
}: AutoFillSelectorMenuProps) {
    return (
        <Dropdown.Menu
            aria-multiselectable
            className={cn(
                "overflow-hidden border border-main-700 p-0",
                className,
            )}
            {...props}
        >
            <ScrollArea
                orientation="both"
                className={cn("max-h-64 py-1", scrollClassName)}
            >
                {children}
            </ScrollArea>
        </Dropdown.Menu>
    );
}

function AutoFillSelectorOptions({
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
        <div className={cn("flex flex-col", className)} {...props}>
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
                            "w-auto min-w-full items-start gap-3 rounded-none px-3 py-2",
                            isSelected
                                ? "bg-main-700 text-main-100"
                                : "text-main-300 hover:bg-main-700 hover:text-main-100",
                            optionClassName,
                        )}
                    >
                        <span>
                            <span
                                className={cn(
                                    "block whitespace-nowrap font-medium",
                                    optionLabelClassName,
                                )}
                            >
                                {option.label}
                            </span>

                            {option.description && (
                                <span
                                    className={cn(
                                        "mt-0.5 block whitespace-nowrap text-xs text-main-500",
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

type AutoFillSelectorCompound = {
    (props: AutoFillSelectorProps): ReactNode;
    Trigger: (props: AutoFillSelectorTriggerProps) => ReactNode;
    Tags: (props: AutoFillSelectorTagsProps) => ReactNode;
    Input: (props: AutoFillSelectorInputProps) => ReactNode;
    Menu: (props: AutoFillSelectorMenuProps) => ReactNode;
    Options: (props: AutoFillSelectorOptionsProps) => ReactNode;
    Empty: (props: AutoFillSelectorEmptyProps) => ReactNode;
};

export const AutoFillSelector = Object.assign(AutoFillSelectorRoot, {
    Trigger: AutoFillSelectorTrigger,
    Tags: AutoFillSelectorTags,
    Input: AutoFillSelectorInput,
    Menu: AutoFillSelectorMenu,
    Options: AutoFillSelectorOptions,
    Empty: AutoFillSelectorEmpty,
}) as AutoFillSelectorCompound;

export type {
    AutoFillSelectorProps,
    AutoFillSelectorTriggerProps,
    AutoFillSelectorTagsProps,
    AutoFillSelectorInputProps,
    AutoFillSelectorMenuProps,
    AutoFillSelectorOptionsProps,
    AutoFillSelectorEmptyProps,
};

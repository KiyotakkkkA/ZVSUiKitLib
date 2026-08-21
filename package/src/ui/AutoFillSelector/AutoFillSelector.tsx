import styles from "./AutoFillSelector.module.css";
import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useRef,
    useState,
} from "react";
import { Icon } from "../_shared/icons";
import { Dropdown } from "../Dropdown/Dropdown";
import { ScrollArea } from "../ScrollArea/ScrollArea";
import { cn } from "../../lib/utils";
import { useLocale } from "../../hooks/useLocale";
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
            "AutoFillSelector.Trigger, AutoFillSelector.Tags, AutoFillSelector.Input, AutoFillSelector.Menu, AutoFillSelector.Options and AutoFillSelector.Empty must be used inside AutoFillSelector.",
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
            <div className={cn(styles.s0, className)} {...props}>
                <Dropdown
                    className={styles.s1}
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
                styles.s2,
                styles.s3,
                styles.s4,
                `zvs-${rounded}`,
                disabled ? styles.s5 : styles.s6,
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
    const t = useLocale().autoFillSelector;

    if (!value.length) {
        return null;
    }

    return (
        <div className={cn(styles.s7, className)} {...props}>
            {value.map((item) => {
                const option = options.find((opt) => opt.value === item);

                return (
                    <span
                        key={item}
                        className={cn(
                            styles.s8,
                            `zvs-${rounded}`,
                            tagClassName,
                        )}
                    >
                        <span className={styles.s9}>
                            {option?.label ?? item}
                        </span>

                        {!disabled && (
                            <button
                                type="button"
                                className={cn(styles.s10, tagRemoveClassName)}
                                onClick={(event) => {
                                    event.stopPropagation();
                                    removeValue(item);
                                }}
                                aria-label={t.removeTag}
                            >
                                <Icon
                                    icon="close"
                                    className={styles.s11}
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
    placeholder,
    onFocus,
    onKeyDown,
    ...props
}: AutoFillSelectorInputProps) {
    const { value, query, setQuery, disabled, inputRef, removeValue } =
        useAutoFillSelectorContext();
    const t = useLocale().autoFillSelector;

    const inputPlaceholder = value.length
        ? ""
        : (placeholder ?? t.inputPlaceholder);

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
            className={cn(styles.s12, `zvs-${rounded}`, className)}
            {...props}
        />
    );
}

function AutoFillSelectorMenu({
    className,
    children,
    rounded = "rounded-4xl",
    ...props
}: AutoFillSelectorMenuProps) {
    return (
        <Dropdown.Menu
            aria-multiselectable
            rounded={rounded}
            className={cn(styles.s13, className)}
            {...props}
        >
            <ScrollArea orientation="vertical" className={styles.s14}>
                {children}
            </ScrollArea>
        </Dropdown.Menu>
    );
}

function AutoFillSelectorOptions({
    rounded = "rounded-3xl",
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
        <div className={cn(styles.s15, className)} {...props}>
            {filteredOptions.map((option) => {
                const isSelected = selectedSet.has(option.value);

                return (
                    <Dropdown.Item
                        rounded={rounded}
                        key={option.value}
                        active={isSelected}
                        closeOnClick={false}
                        icon={
                            isSelected ? (
                                <Icon
                                    icon="check"
                                    className={cn(
                                        styles.s16,
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
                            `w-full min-w-0 items-center gap-2 px-4 py-1.5`,
                            isSelected ? styles.s17 : styles.s18,
                            optionClassName,
                        )}
                    >
                        <span className={styles.s19}>
                            <span
                                className={cn(styles.s20, optionLabelClassName)}
                            >
                                {option.label}
                            </span>

                            {option.description && (
                                <span
                                    className={cn(
                                        styles.s21,
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
    children = "Nothing found",
    ...props
}: AutoFillSelectorEmptyProps) {
    const { filteredOptions } = useAutoFillSelectorContext();

    if (filteredOptions.length > 0) {
        return null;
    }

    return (
        <div className={cn(styles.s22, className)} {...props}>
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

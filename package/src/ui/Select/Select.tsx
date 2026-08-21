"use client";

import styles from "./Select.module.css";

import { Icon } from "../_shared/icons";
import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
    type KeyboardEvent,
} from "react";
import { cn } from "../../lib/utils";
import { useLocale } from "../../hooks/useLocale";
import { Dropdown } from "../Dropdown/Dropdown";
import { InputSmall } from "../InputSmall/InputSmall";
import { ScrollArea } from "../ScrollArea/ScrollArea";
import type {
    SelectContextValue,
    SelectMenuProps,
    SelectOption,
    SelectOptionProps,
    SelectProps,
    SelectTriggerProps,
} from "./types";

const OPTION_SELECTOR = "[role='option']:not([aria-disabled='true'])";

const SelectContext = createContext<SelectContextValue | null>(null);

function useSelectContext() {
    const context = useContext(SelectContext);

    if (!context) {
        throw new Error(
            "Select.Trigger, Select.Menu and Select.Option must be used inside Select.",
        );
    }

    return context;
}

function SelectRoot({
    value,
    onChange,
    options,
    children,
    placeholder,
    searchable = false,
    searchPlaceholder,
    emptyMessage,
    disabled = false,
    className,
    classNames,
    menuWidth,
    menuPlacement = "bottom-left",
    closeOnSelect = true,
}: SelectProps) {
    const t = useLocale().select;
    const [query, setQuery] = useState("");
    const [open, setOpen] = useState(false);
    const resolvedPlaceholder = placeholder ?? t.placeholder;
    const resolvedSearchPlaceholder = searchPlaceholder ?? t.searchPlaceholder;
    const resolvedEmptyMessage = emptyMessage ?? t.emptyMessage;
    const selectedOption = useMemo(
        () => options.find((option) => option.value === value),
        [options, value],
    );
    const normalizedQuery = query.trim().toLocaleLowerCase();
    const isVisible = useCallback(
        (option: SelectOption) =>
            !searchable ||
            !normalizedQuery ||
            option.label.toLocaleLowerCase().includes(normalizedQuery),
        [normalizedQuery, searchable],
    );
    const visibleOptionsCount = useMemo(
        () => options.filter(isVisible).length,
        [isVisible, options],
    );

    const contextValue = useMemo<SelectContextValue>(
        () => ({
            value,
            selectedOption,
            placeholder: resolvedPlaceholder,
            query,
            open,
            searchable,
            searchPlaceholder: resolvedSearchPlaceholder,
            emptyMessage: resolvedEmptyMessage,
            classNames,
            closeOnSelect,
            setQuery,
            select: (option) => {
                onChange(option.value);
                option.onClick?.();
            },
            isVisible,
            visibleOptionsCount,
        }),
        [
            value,
            selectedOption,
            query,
            open,
            resolvedPlaceholder,
            searchable,
            resolvedSearchPlaceholder,
            resolvedEmptyMessage,
            classNames,
            closeOnSelect,
            onChange,
            isVisible,
            visibleOptionsCount,
        ],
    );

    return (
        <SelectContext.Provider value={contextValue}>
            <Dropdown
                className={cn(styles.s0, className)}
                menuWidth={menuWidth ?? "auto"}
                menuPlacement={menuPlacement}
                disabled={disabled}
                onOpenChange={(nextOpen) => {
                    setOpen(nextOpen);

                    if (!nextOpen) setQuery("");
                }}
            >
                {children}
            </Dropdown>
        </SelectContext.Provider>
    );
}

function SelectTrigger({
    className,
    rounded = "rounded-full",
}: SelectTriggerProps) {
    const { selectedOption, placeholder } = useSelectContext();

    return (
        <Dropdown.Trigger
            placeholder={placeholder}
            rounded={rounded}
            aria-haspopup="listbox"
            className={cn(className)}
        >
            {selectedOption?.label}
        </Dropdown.Trigger>
    );
}

function SelectMenu({
    children,
    className,
    label,
    rounded = "rounded-3xl",
}: SelectMenuProps) {
    const {
        query,
        open,
        searchable,
        searchPlaceholder,
        emptyMessage,
        classNames,
        setQuery,
        visibleOptionsCount,
    } = useSelectContext();
    const listRef = useRef<HTMLDivElement>(null);
    const searchRef = useRef<HTMLInputElement>(null);
    const typeaheadRef = useRef({ buffer: "", at: 0 });

    const getOptions = useCallback(
        () =>
            Array.from(
                listRef.current?.querySelectorAll<HTMLElement>(
                    OPTION_SELECTOR,
                ) ?? [],
            ),
        [],
    );

    useEffect(() => {
        if (!open) return;

        const frame = window.requestAnimationFrame(() => {
            if (searchable) {
                searchRef.current?.focus();
                return;
            }

            const items = getOptions();
            const selected = items.find(
                (item) => item.getAttribute("aria-selected") === "true",
            );

            (selected ?? items[0])?.focus();
        });

        return () => window.cancelAnimationFrame(frame);
    }, [open, searchable, getOptions]);

    const focusAt = (index: number) => {
        const items = getOptions();

        if (items.length === 0) return;

        const bounded = (index + items.length) % items.length;
        items[bounded]?.focus();
    };

    const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        const items = getOptions();
        const current = items.indexOf(document.activeElement as HTMLElement);

        if (event.key === "ArrowDown") {
            event.preventDefault();
            focusAt(current + 1);
            return;
        }

        if (event.key === "ArrowUp") {
            event.preventDefault();
            focusAt(current === -1 ? items.length - 1 : current - 1);
            return;
        }

        if (event.key === "Home") {
            event.preventDefault();
            focusAt(0);
            return;
        }

        if (event.key === "End") {
            event.preventDefault();
            focusAt(items.length - 1);
            return;
        }

        if (
            searchable ||
            event.key.length !== 1 ||
            event.metaKey ||
            event.ctrlKey ||
            event.altKey
        ) {
            return;
        }

        const now = Date.now();
        const typeahead = typeaheadRef.current;
        typeahead.buffer =
            now - typeahead.at > 700
                ? event.key.toLocaleLowerCase()
                : typeahead.buffer + event.key.toLocaleLowerCase();
        typeahead.at = now;

        const match = items.findIndex((item) =>
            (item.textContent ?? "")
                .trim()
                .toLocaleLowerCase()
                .startsWith(typeahead.buffer),
        );

        if (match !== -1) {
            event.preventDefault();
            focusAt(match);
        }
    };

    return (
        <Dropdown.Menu rounded={rounded} className={cn(styles.s1, className)}>
            {searchable && (
                <InputSmall
                    ref={searchRef}
                    rounded="rounded-full"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder={searchPlaceholder}
                    className={cn(styles.s2, classNames?.search)}
                    onKeyDown={(event) => {
                        if (event.key === "ArrowDown") {
                            event.preventDefault();
                            focusAt(0);
                        }
                    }}
                />
            )}

            <ScrollArea className={cn(styles.s3, searchable && styles.s4)}>
                <div
                    ref={listRef}
                    role="listbox"
                    aria-label={label}
                    onKeyDown={onKeyDown}
                    className={styles.s5}
                >
                    {visibleOptionsCount === 0 ? (
                        <p className={styles.s6}>{emptyMessage}</p>
                    ) : (
                        children
                    )}
                </div>
            </ScrollArea>
        </Dropdown.Menu>
    );
}

function SelectOptionComponent({
    value,
    label,
    icon,
    onClick,
    className,
    rounded = "rounded-full",
}: SelectOptionProps) {
    const context = useSelectContext();
    const option = { value, label, icon, onClick };

    if (!context.isVisible(option)) return null;

    const active = value === context.value;

    return (
        <Dropdown.Item
            role="option"
            aria-selected={active}
            active={active}
            closeOnClick={context.closeOnSelect}
            icon={
                active ? (
                    <Icon icon="check" className={styles.s7} aria-hidden />
                ) : (
                    icon
                )
            }
            onClick={() => context.select(option)}
            className={cn(
                styles.s8,
                active ? styles.s9 : styles.s10,
                rounded && `zvs-${rounded}`,
                className,
            )}
        >
            <span className={styles.s11}>{label}</span>
        </Dropdown.Item>
    );
}

export const Select = Object.assign(SelectRoot, {
    Trigger: SelectTrigger,
    Menu: SelectMenu,
    Option: SelectOptionComponent,
});

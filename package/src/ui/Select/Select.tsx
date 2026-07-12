"use client";

import { Icon } from "@iconify/react";
import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from "react";
import { cn } from "../../lib/utils";
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

const SelectContext = createContext<SelectContextValue | null>(null);

function useSelectContext() {
    const context = useContext(SelectContext);

    if (!context) {
        throw new Error(
            "Select.Trigger, Select.Menu и Select.Option должны использоваться внутри Select.",
        );
    }

    return context;
}

function SelectRoot({
    value,
    onChange,
    options,
    children,
    placeholder = "Выберите",
    searchable = false,
    searchPlaceholder = "Поиск...",
    emptyMessage = "Ничего не найдено",
    disabled = false,
    className,
    classNames,
    menuWidth,
    menuPlacement = "bottom-left",
    closeOnSelect = true,
}: SelectProps) {
    const [query, setQuery] = useState("");
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
            placeholder,
            query,
            searchable,
            searchPlaceholder,
            emptyMessage,
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
            placeholder,
            searchable,
            searchPlaceholder,
            emptyMessage,
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
                className={cn("w-72 max-w-full", className)}
                menuWidth={menuWidth ?? "auto"}
                menuPlacement={menuPlacement}
                disabled={disabled}
                onOpenChange={(open) => {
                    if (!open) setQuery("");
                }}
            >
                {children}
            </Dropdown>
        </SelectContext.Provider>
    );
}

function SelectTrigger({
    className,
    rounded = "rounded-2xl",
}: SelectTriggerProps) {
    const { selectedOption, placeholder } = useSelectContext();

    return (
        <Dropdown.Trigger
            placeholder={placeholder}
            rounded={rounded}
            className={cn(className)}
        >
            {selectedOption?.label}
        </Dropdown.Trigger>
    );
}

function SelectMenu({
    children,
    className,
    rounded = "rounded-3xl",
}: SelectMenuProps) {
    const {
        query,
        searchable,
        searchPlaceholder,
        emptyMessage,
        classNames,
        setQuery,
        visibleOptionsCount,
    } = useSelectContext();

    return (
        <Dropdown.Menu
            rounded={rounded}
            className={cn("bg-main-800", className)}
        >
            {searchable && (
                <InputSmall
                    rounded="rounded-full"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder={searchPlaceholder}
                    className={cn("h-8 w-full", classNames?.search)}
                />
            )}

            <ScrollArea className={cn("max-h-72", searchable && "mt-1.5")}>
                <div className="flex flex-col gap-1">
                    {visibleOptionsCount === 0 ? (
                        <p className="px-3 py-2 text-sm text-main-500">
                            {emptyMessage}
                        </p>
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
            active={active}
            closeOnClick={context.closeOnSelect}
            icon={
                active ? (
                    <Icon
                        icon="mdi:check"
                        className="text-main-200"
                        aria-hidden
                    />
                ) : (
                    icon
                )
            }
            onClick={() => context.select(option)}
            className={cn(
                "min-w-0 cursor-pointer px-3 py-1.5",
                active ? "bg-main-700/60 text-main-100" : "text-main-300",
                rounded && `zvs-${rounded}`,
                className,
            )}
        >
            <span className="truncate">{label}</span>
        </Dropdown.Item>
    );
}

export const Select = Object.assign(SelectRoot, {
    Trigger: SelectTrigger,
    Menu: SelectMenu,
    Option: SelectOptionComponent,
});

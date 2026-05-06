import { Icon } from "@iconify/react";
import { useCallback, useMemo, useState } from "react";
import { Dropdown } from "../Dropdown/Dropdown";
import { cn } from "../../lib/utils";
import { InputSmall } from "../InputSmall/InputSmall";
import { ScrollArea } from "../ScrollArea/ScrollArea";
import type { SelectOption, SelectProps } from "./types";

const getSelectMenuWidth = (
    options: SelectOption[],
    menuWidth?: number | string,
) => {
    if (menuWidth !== undefined) {
        return menuWidth;
    }

    const longestLabelLength = options.reduce(
        (maxLength, option) => Math.max(maxLength, option.label.length),
        0,
    );

    const estimatedWidth = longestLabelLength * 9 + 72;
    return Math.min(320, Math.max(120, estimatedWidth));
};

export function Select({
    value,
    onChange,
    options,
    placeholder = "Выберите",
    searchable = false,
    searchPlaceholder = "Поиск...",
    emptyMessage = "Ничего не найдено",
    disabled = false,
    className,
    classNames,
    menuWidth,
    menuPlacement = "bottom",
    closeOnSelect = true,
}: SelectProps) {
    const [query, setQuery] = useState("");

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

    const resolvedMenuWidth = useMemo(
        () => getSelectMenuWidth(options, menuWidth),
        [menuWidth, options],
    );

    const handleOpenChange = useCallback((open: boolean) => {
        if (!open) {
            setQuery("");
        }
    }, []);

    return (
        <div
            className={cn(
                "flex items-center gap-2 text-sm text-main-200",
                className,
            )}
        >
            <Dropdown
                menuWidth={resolvedMenuWidth}
                menuRole="listbox"
                menuPlacement={menuPlacement}
                disabled={disabled}
                onOpenChange={handleOpenChange}
            >
                <Dropdown.Trigger
                    placeholder={placeholder}
                    className={classNames?.trigger}
                >
                    {selectedOption?.label}
                </Dropdown.Trigger>

                <Dropdown.Menu className={classNames?.menu}>
                    <div className="space-y-1.5 rounded-lg">
                        {searchable && (
                            <InputSmall
                                value={query}
                                onChange={(event) =>
                                    setQuery(event.target.value)
                                }
                                placeholder={searchPlaceholder}
                                className={cn("h-8 w-full", classNames?.search)}
                            />
                        )}

                        <ScrollArea className="max-h-72 rounded-lg pr-1">
                            <div className="flex flex-col gap-1">
                                {filteredOptions.length === 0 && (
                                    <p className="px-3 py-2 text-sm text-main-500">
                                        {emptyMessage}
                                    </p>
                                )}

                                {filteredOptions.map((option) => {
                                    const active = option.value === value;

                                    return (
                                        <Dropdown.Item
                                            key={option.value}
                                            active={active}
                                            closeOnClick={closeOnSelect}
                                            icon={
                                                active ? (
                                                    <Icon
                                                        icon="mdi:check"
                                                        className="text-main-200"
                                                        aria-hidden
                                                    />
                                                ) : (
                                                    option.icon
                                                )
                                            }
                                            onClick={() => {
                                                onChange(option.value);
                                                option.onClick?.();
                                            }}
                                            className={cn(
                                                "whitespace-nowrap cursor-pointer",
                                                active
                                                    ? "bg-main-700/60 text-main-100"
                                                    : "text-main-300",
                                                classNames?.option,
                                            )}
                                        >
                                            <span
                                                className={cn(
                                                    "whitespace-nowrap",
                                                    classNames?.optionLabel,
                                                )}
                                            >
                                                {option.label}
                                            </span>
                                        </Dropdown.Item>
                                    );
                                })}
                            </div>
                        </ScrollArea>
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

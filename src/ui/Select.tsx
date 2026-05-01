import { Icon } from "@iconify/react";
import { useCallback, useMemo, useState, type ReactNode } from "react";
import { Dropdown } from "./Dropdown";
import { cn } from "../lib/utils";
import { Button } from "./Button";
import { InputSmall } from "./InputSmall";
import { ScrollArea } from "./ScrollArea";

type SelectOption = {
    value: string;
    label: string;
    icon?: ReactNode;
    onClick?: () => void;
};

type SelectProps = {
    value: string;
    onChange: (value: string) => void;
    options: SelectOption[];
    placeholder?: string;
    searchable?: boolean;
    searchPlaceholder?: string;
    emptyMessage?: string;
    disabled?: boolean;
    className?: string;
    menuWidth?: number | string;
    menuPlacement?: "bottom" | "top";
    closeOnSelect?: boolean;
    classNames?: {
        trigger?: string;
        menu?: string;
        search?: string;
        option?: string;
        optionLabel?: string;
        optionIcon?: string;
    };
};

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
    placeholder,
    searchable = false,
    searchPlaceholder = "Поиск...",
    emptyMessage = "Ничего не найдено",
    disabled,
    className,
    menuWidth,
    menuPlacement,
    closeOnSelect = true,
    classNames,
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
                label={selectedOption?.label}
                placeholder={placeholder ?? "Выберите"}
                menuWidth={resolvedMenuWidth}
                menuRole="listbox"
                menuPlacement={menuPlacement}
                disabled={disabled}
                onOpenChange={handleOpenChange}
                classNames={{
                    trigger: classNames?.trigger,
                    menu: classNames?.menu,
                }}
            >
                {({ close }) => {
                    const onSelect = (nextValue: string) => {
                        const selected = options.find(
                            (item) => item.value === nextValue,
                        );

                        onChange(nextValue);
                        selected?.onClick?.();

                        if (closeOnSelect) {
                            close();
                        }
                    };

                    return (
                        <div className={cn("space-y-1.5 rounded-lg")}>
                            {searchable && (
                                <InputSmall
                                    value={query}
                                    onChange={(event) =>
                                        setQuery(event.target.value)
                                    }
                                    placeholder={searchPlaceholder}
                                    className={cn(
                                        "h-8 w-full",
                                        classNames?.search,
                                    )}
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
                                            <Button
                                                key={option.value}
                                                role="option"
                                                aria-selected={active}
                                                onClick={() =>
                                                    onSelect(option.value)
                                                }
                                                className={cn(
                                                    "justify-between space-x-2 rounded-lg border border-transparent",
                                                    "w-fix min-w-full",
                                                    "px-3 py-2 text-left text-sm",
                                                    active
                                                        ? "bg-main-700/60 text-main-100"
                                                        : "bg-transparent text-main-300 hover:bg-main-700/80 hover:text-main-100",
                                                    classNames?.option,
                                                )}
                                            >
                                                <span
                                                    className={cn(
                                                        "flex items-center gap-2",
                                                        "whitespace-nowrap",
                                                    )}
                                                >
                                                    {option.icon && (
                                                        <span
                                                            className={cn(
                                                                "shrink-0 text-main-300",
                                                                classNames?.optionIcon,
                                                            )}
                                                        >
                                                            {option.icon}
                                                        </span>
                                                    )}
                                                    <span
                                                        className={cn(
                                                            "whitespace-nowrap",
                                                            classNames?.optionLabel,
                                                        )}
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
                    );
                }}
            </Dropdown>
        </div>
    );
}

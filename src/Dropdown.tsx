import { Icon } from "@iconify/react";
import {
    useEffect,
    useId,
    useMemo,
    useRef,
    useState,
    type Ref,
    type ReactNode,
} from "react";
import { Button } from "./Button";
import { InputSmall } from "./InputSmall";
import { cn } from "./lib/utils";

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
    optionClassName?: string;
    disabled?: boolean;
    ariaLabel?: string;
    menuPlacement?: "bottom" | "top";
    closeOnSelect?: boolean;
    matchTriggerWidth?: boolean;
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
    optionClassName = "",
    disabled = false,
    ariaLabel,
    menuPlacement = "bottom",
    closeOnSelect = true,
    matchTriggerWidth = true,
    renderTrigger,
}: DropdownProps) {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const rootRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const menuId = useId();

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
            if (!rootRef.current?.contains(event.target as Node)) {
                setOpen(false);
            }
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
            ? `bottom-full mb-2 origin-bottom ${
                  open
                      ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                      : "pointer-events-none translate-y-1 scale-98 opacity-0"
              }`
            : `top-full mt-2 origin-top ${
                  open
                      ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                      : "pointer-events-none -translate-y-1 scale-98 opacity-0"
              }`;

    return (
        <div
            ref={rootRef}
            className={cn(
                "relative min-w-0",
                matchTriggerWidth ? "w-full" : "",
                className,
            )}
        >
            {renderTrigger ? (
                renderTrigger({
                    open,
                    toggleOpen,
                    triggerRef,
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
                    ref={triggerRef}
                    aria-haspopup="listbox"
                    aria-expanded={open}
                    aria-controls={menuId}
                    aria-label={ariaLabel}
                    disabled={disabled}
                    onClick={toggleOpen}
                    className={cn(
                        "min-h-10 w-full min-w-0 justify-between gap-3 rounded-xl border-transparent px-3 py-2 text-main-100",
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

            <div
                id={menuId}
                role="listbox"
                tabIndex={-1}
                className={cn(
                    "absolute z-30 rounded-xl bg-main-800 p-1.5 transition-all duration-180",
                    matchTriggerWidth ? "left-0 right-0" : "left-0 min-w-34",
                    menuPositionClassName,
                    menuClassName,
                )}
            >
                <div className="space-y-1.5 overflow-x-hidden rounded-lg">
                    {searchable ? (
                        <InputSmall
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder={searchPlaceholder}
                            className="h-8 w-full"
                        />
                    ) : null}

                    <div className="max-h-72 space-y-1 overflow-y-auto overflow-x-hidden rounded-lg pr-1">
                        {filteredOptions.length === 0 ? (
                            <p className="px-3 py-2 text-sm text-main-500">
                                {emptyMessage}
                            </p>
                        ) : null}

                        {filteredOptions.map((option) => {
                            const active = option.value === value;
                            return (
                                <Button
                                    key={option.value}
                                    role="option"
                                    aria-selected={active}
                                    onClick={() => onSelect(option.value)}
                                    className={cn(
                                        "w-full min-w-0 justify-between space-x-2 rounded-lg border border-transparent",
                                        "px-3 py-2 text-left text-sm",
                                        active
                                            ? "bg-main-700/60 text-main-100"
                                            : "bg-transparent text-main-300 hover:bg-main-700/80 hover:text-main-100",
                                        optionClassName,
                                    )}
                                >
                                    <span className="flex min-w-0 items-center gap-2 truncate">
                                        {option.icon ? (
                                            <span className="shrink-0 text-main-300">
                                                {option.icon}
                                            </span>
                                        ) : null}
                                        <span className="min-w-0 truncate">
                                            {option.label}
                                        </span>
                                    </span>
                                    <span className="shrink-0">
                                        {active ? (
                                            <Icon
                                                icon="mdi:check"
                                                className="text-main-200"
                                                aria-hidden
                                            />
                                        ) : null}
                                    </span>
                                </Button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

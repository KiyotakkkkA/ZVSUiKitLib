import { Icon } from "./icons";
import { cn } from "../../lib/utils";
import { Dropdown } from "../Dropdown/Dropdown";
import type { ButtonClassName, SpanClassName } from "./types";

type PickerTriggerProps = {
    open: boolean;
    label: string;
    hasValue: boolean;
    clearable: boolean;
    disabled: boolean;
    clearLabel: string;
    onClear: () => void;
    classNames?: {
        trigger?: ButtonClassName;
        value?: SpanClassName;
        controls?: SpanClassName;
        clearButton?: SpanClassName;
    };
};

export function PickerTrigger({
    open,
    label,
    hasValue,
    clearable,
    disabled,
    clearLabel,
    onClear,
    classNames,
}: PickerTriggerProps) {
    return (
        <Dropdown.Trigger
            className={cn(
                "h-11 w-full justify-between border border-main-700 bg-main-900 px-3 text-main-100",
                "hover:bg-main-800",
                "focus-visible:ring-2 focus-visible:ring-main-300/50",
                classNames?.trigger,
            )}
            icon={
                <span
                    className={cn(
                        "ml-2 flex shrink-0 items-center gap-1",
                        classNames?.controls,
                    )}
                >
                    {clearable && hasValue && !disabled && (
                        <span
                            role="button"
                            tabIndex={0}
                            aria-label={clearLabel}
                            className={cn(
                                "inline-flex h-6 w-6 items-center justify-center rounded-md text-main-400 transition-colors",
                                "hover:bg-main-700/70 hover:text-main-100",
                                classNames?.clearButton,
                            )}
                            onClick={(event) => {
                                event.preventDefault();
                                event.stopPropagation();
                                onClear();
                            }}
                            onKeyDown={(event) => {
                                if (
                                    event.key !== "Enter" &&
                                    event.key !== " "
                                ) {
                                    return;
                                }

                                event.preventDefault();
                                event.stopPropagation();
                                onClear();
                            }}
                        >
                            <Icon
                                icon="close"
                                className={"text-base"}
                                aria-hidden
                            />
                        </span>
                    )}

                    <Icon
                        icon="chevron-down"
                        className={cn(
                            "text-main-400 transition-transform duration-150",
                            open && "rotate-180",
                        )}
                        aria-hidden
                    />
                </span>
            }
        >
            <span
                className={cn(
                    "min-w-0 truncate text-left text-sm",
                    hasValue ? "text-main-100" : "text-main-400",
                    classNames?.value,
                )}
            >
                {label}
            </span>
        </Dropdown.Trigger>
    );
}

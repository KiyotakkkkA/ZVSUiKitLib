import {
    forwardRef,
    memo,
    useCallback,
    useId,
    useRef,
    type ClipboardEvent,
    type FocusEvent,
    type KeyboardEvent,
} from "react";
import { cn } from "../../lib/utils";
import type { InputPinsProps } from "./types";

const normalizeDigits = (value: string, length: number) =>
    value.replace(/\s/g, "").slice(0, length);

const buildValue = (items: string[], length: number) =>
    Array.from({ length }, (_, index) => items[index] || " ").join("");

type PinCellProps = {
    index: number;
    value: string;
    length: number;
    label?: string;
    disabled: boolean;
    mask: boolean;
    inputMode: InputPinsProps["inputMode"];
    autoComplete: string;
    className?: string;
    isFirst: boolean;
    isLast: boolean;
    onCellChange: (index: number, raw: string) => void;
    onCellKeyDown: (
        index: number,
        event: KeyboardEvent<HTMLInputElement>,
    ) => void;
    onCellPaste: (
        index: number,
        event: ClipboardEvent<HTMLInputElement>,
    ) => void;
    inputRef: (node: HTMLInputElement | null) => void;
};

const PinCell = memo(
    ({
        index,
        value,
        label,
        disabled,
        mask,
        inputMode,
        autoComplete,
        className,
        isFirst,
        isLast,
        onCellChange,
        onCellKeyDown,
        onCellPaste,
        inputRef,
    }: PinCellProps) => {
        const handleFocus = useCallback(
            (event: FocusEvent<HTMLInputElement>) => {
                event.target.select();
            },
            [],
        );

        return (
            <input
                ref={inputRef}
                type={mask ? "password" : "text"}
                inputMode={inputMode}
                autoComplete={autoComplete}
                pattern={inputMode === "numeric" ? "[0-9]*" : undefined}
                value={value}
                disabled={disabled}
                aria-label={`${label ?? "Pin"} ${index + 1}`}
                onFocus={handleFocus}
                onChange={(event) => onCellChange(index, event.target.value)}
                onKeyDown={(event) => onCellKeyDown(index, event)}
                onPaste={(event) => onCellPaste(index, event)}
                className={cn(
                    "h-11 w-11 border border-main-700 bg-main-900 text-center text-sm text-main-100",
                    "outline-none transition-colors placeholder:text-main-600",
                    "focus-visible:z-10 focus-visible:border-main-400 focus-visible:ring-2 focus-visible:ring-main-400/20",
                    "disabled:cursor-not-allowed disabled:opacity-60",
                    !isFirst && "-ml-px",
                    isFirst && "rounded-l-2xl",
                    isLast && "rounded-r-2xl",
                    className,
                )}
            />
        );
    },
);

export const InputPins = forwardRef<HTMLDivElement, InputPinsProps>(
    (
        {
            value,
            onChange,
            length = 4,
            label,
            disabled = false,
            mask = false,
            className,
            classNames,
            inputMode = "numeric",
            autoComplete = "one-time-code",
            ...props
        },
        ref,
    ) => {
        const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
        const groupId = useId();

        const normalizedValue = value.slice(0, length);
        const values = Array.from(
            { length },
            (_, index) => normalizedValue[index]?.trim() ?? "",
        );

        const focusInput = useCallback((index: number) => {
            const target = inputRefs.current[index];
            target?.focus();
        }, []);

        const handleCellChange = useCallback(
            (index: number, raw: string) => {
                const digits = normalizeDigits(raw, length);

                if (digits.length === 0) {
                    const nextValues = [...values];
                    nextValues[index] = "";
                    onChange(buildValue(nextValues, length));
                    return;
                }

                if (digits.length === 1) {
                    const nextValues = [...values];
                    nextValues[index] = digits;
                    onChange(buildValue(nextValues, length));

                    if (index < length - 1) {
                        focusInput(index + 1);
                    }
                    return;
                }

                const nextValues = [...values];
                digits.split("").forEach((char, offset) => {
                    const nextIndex = index + offset;
                    if (nextIndex < length) {
                        nextValues[nextIndex] = char;
                    }
                });

                onChange(buildValue(nextValues, length));
                focusInput(Math.min(index + digits.length, length - 1));
            },
            [values, length, onChange, focusInput],
        );

        const handleCellKeyDown = useCallback(
            (index: number, event: KeyboardEvent<HTMLInputElement>) => {
                switch (event.key) {
                    case "Backspace": {
                        if (values[index]) {
                            event.preventDefault();
                            const nextValues = [...values];
                            nextValues[index] = "";
                            onChange(buildValue(nextValues, length));
                            return;
                        }

                        if (index > 0) {
                            event.preventDefault();
                            const nextValues = [...values];
                            nextValues[index - 1] = "";
                            onChange(buildValue(nextValues, length));
                            focusInput(index - 1);
                        }
                        return;
                    }

                    case "Delete": {
                        if (values[index]) {
                            event.preventDefault();
                            const nextValues = [...values];
                            nextValues[index] = "";
                            onChange(buildValue(nextValues, length));
                        }
                        return;
                    }

                    case "ArrowLeft": {
                        if (index > 0) {
                            event.preventDefault();
                            focusInput(index - 1);
                        }
                        return;
                    }

                    case "ArrowRight": {
                        if (index < length - 1) {
                            event.preventDefault();
                            focusInput(index + 1);
                        }
                        return;
                    }

                    case "Home": {
                        event.preventDefault();
                        focusInput(0);
                        return;
                    }

                    case "End": {
                        event.preventDefault();
                        focusInput(length - 1);
                        return;
                    }
                }
            },
            [values, length, onChange, focusInput],
        );

        const handleCellPaste = useCallback(
            (index: number, event: ClipboardEvent<HTMLInputElement>) => {
                event.preventDefault();
                handleCellChange(index, event.clipboardData.getData("text"));
            },
            [handleCellChange],
        );

        return (
            <div
                ref={ref}
                className={cn(
                    "inline-flex flex-col items-center gap-6",
                    className,
                )}
            >
                <div
                    role="group"
                    aria-label={label ?? "Pin input"}
                    className={cn("flex items-center", classNames?.group)}
                >
                    {values.map((item, index) => (
                        <PinCell
                            key={`${groupId}-${index}`}
                            {...props}
                            index={index}
                            value={item}
                            length={length}
                            label={label}
                            disabled={disabled}
                            mask={mask}
                            inputMode={inputMode}
                            autoComplete={autoComplete}
                            className={classNames?.input}
                            isFirst={index === 0}
                            isLast={index === length - 1}
                            onCellChange={handleCellChange}
                            onCellKeyDown={handleCellKeyDown}
                            onCellPaste={handleCellPaste}
                            inputRef={(node) => {
                                inputRefs.current[index] = node;
                            }}
                        />
                    ))}
                </div>

                {label && (
                    <span className="text-sm text-main-300">{label}</span>
                )}
            </div>
        );
    },
);

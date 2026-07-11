import { useRef, type ClipboardEvent, type KeyboardEvent } from "react";
import { cn } from "../../lib/utils";
import type { InputPinsProps } from "./types";

const normalizePinValue = (value: string, length: number) => {
    return value.replace(/\s/g, "").slice(0, length);
};

export function InputPins({
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
}: InputPinsProps) {
    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
    const normalizedValue = normalizePinValue(value, length);
    const values = Array.from(
        { length },
        (_, index) => normalizedValue[index] ?? "",
    );

    const focusInput = (index: number) => {
        inputRefs.current[index]?.focus();
        inputRefs.current[index]?.select();
    };

    const updateAtIndex = (index: number, nextValue: string) => {
        const nextValues = [...values];
        const characters = normalizePinValue(nextValue, length).split("");

        if (characters.length > 1) {
            characters.forEach((character, characterIndex) => {
                const nextIndex = index + characterIndex;

                if (nextIndex < length) {
                    nextValues[nextIndex] = character;
                }
            });

            onChange(nextValues.join(""));
            focusInput(Math.min(index + characters.length, length - 1));
            return;
        }

        nextValues[index] = characters[0] ?? "";
        onChange(nextValues.join(""));

        if (characters[0] && index < length - 1) {
            focusInput(index + 1);
        }
    };

    const handleKeyDown = (
        event: KeyboardEvent<HTMLInputElement>,
        index: number,
    ) => {
        if (event.key === "Backspace" && !values[index] && index > 0) {
            event.preventDefault();
            const nextValues = [...values];

            nextValues[index - 1] = "";
            onChange(nextValues.join(""));
            focusInput(index - 1);
        }

        if (event.key === "ArrowLeft" && index > 0) {
            event.preventDefault();
            focusInput(index - 1);
        }

        if (event.key === "ArrowRight" && index < length - 1) {
            event.preventDefault();
            focusInput(index + 1);
        }
    };

    const handlePaste = (
        event: ClipboardEvent<HTMLInputElement>,
        index: number,
    ) => {
        event.preventDefault();
        updateAtIndex(index, event.clipboardData.getData("text"));
    };

    return (
        <div
            className={cn("inline-flex flex-col items-center gap-6", className)}
        >
            <div className={cn("flex items-center gap-2", classNames?.group)}>
                {values.map((item, index) => (
                    <input
                        key={index}
                        {...props}
                        ref={(node) => {
                            inputRefs.current[index] = node;
                        }}
                        type={mask ? "password" : "text"}
                        inputMode={inputMode}
                        autoComplete={autoComplete}
                        value={item}
                        disabled={disabled}
                        maxLength={length}
                        aria-label={`${label ?? "Pin"} ${index + 1}`}
                        onChange={(event) =>
                            updateAtIndex(index, event.target.value)
                        }
                        onKeyDown={(event) => handleKeyDown(event, index)}
                        onPaste={(event) => handlePaste(event, index)}
                        className={cn(
                            "h-11 w-11 rounded-md border border-main-700 bg-main-900 text-center text-sm text-main-100",
                            "outline-none transition-colors placeholder:text-main-600",
                            "focus-visible:border-main-400 focus-visible:ring-2 focus-visible:ring-main-400/20",
                            "disabled:cursor-not-allowed disabled:opacity-60",
                            classNames?.input,
                        )}
                    />
                ))}
            </div>

            {label && <span className="text-sm text-main-300">{label}</span>}
        </div>
    );
}

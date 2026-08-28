import { useRef, type KeyboardEvent } from "react";
import { cn, mergeRefs } from "../../lib/utils";
import { useLocale } from "../../hooks/useLocale";
import type { SwitcherProps } from "./types";

export const Switcher = ({
    value,
    options,
    onChange,
    label,
    className,
    classNames,
    rounded = "rounded-full",
    ref,
}: SwitcherProps) => {
    const t = useLocale().switcher;
    const groupRef = useRef<HTMLDivElement>(null);

    const selectAt = (index: number) => {
        const buttons =
            groupRef.current?.querySelectorAll<HTMLButtonElement>(
                "[role='radio']",
            );

        buttons?.[index]?.focus();
        buttons?.[index]?.click();
    };

    const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (options.length === 0) return;

        const current = options.findIndex((option) => option.value === value);
        const from = current === -1 ? 0 : current;

        if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
            event.preventDefault();
            selectAt(from === 0 ? options.length - 1 : from - 1);
            return;
        }

        if (event.key === "ArrowRight" || event.key === "ArrowDown") {
            event.preventDefault();
            selectAt(from === options.length - 1 ? 0 : from + 1);
            return;
        }

        if (event.key === "Home") {
            event.preventDefault();
            selectAt(0);
            return;
        }

        if (event.key === "End") {
            event.preventDefault();
            selectAt(options.length - 1);
        }
    };

    const selectedIndex = options.findIndex((option) => option.value === value);
    const focusableIndex = selectedIndex === -1 ? 0 : selectedIndex;

    return (
        <div
            ref={mergeRefs(groupRef, ref)}
            className={cn(
                "inline-flex w-fit items-center gap-1 border border-main-700/70 bg-main-900/55 p-1",
                rounded,
                className,
            )}
            role="radiogroup"
            aria-label={label ?? t.label}
            onKeyDown={onKeyDown}
        >
            {options.map((option, index) => {
                const isActive = option.value === value;

                return (
                    <button
                        key={option.value}
                        type="button"
                        role="radio"
                        aria-checked={isActive}
                        tabIndex={index === focusableIndex ? 0 : -1}
                        onClick={() => onChange(option.value)}
                        className={cn(
                            "cursor-pointer px-3 py-1.5 text-xs font-medium transition-colors",
                            rounded,
                            isActive
                                ? "bg-main-700/80 text-main-100"
                                : "text-main-300 hover:bg-main-800/70 hover:text-main-100",
                            classNames?.tab,
                        )}
                    >
                        {option.label}
                    </button>
                );
            })}
        </div>
    );
};

import {
    createContext,
    useContext,
    useLayoutEffect,
    useRef,
    type KeyboardEvent,
} from "react";
import { cn, mergeRefs } from "../../lib/utils";
import { useLocale } from "../../hooks/useLocale";
import type {
    SwitcherContextValue,
    SwitcherOptionProps,
    SwitcherRootProps,
} from "./types";

const SwitcherContext = createContext<SwitcherContextValue | null>(null);

function useSwitcherContext() {
    const context = useContext(SwitcherContext);

    if (!context) {
        throw new Error("Switcher.Option must be used inside Switcher.Root.");
    }

    return context;
}

function SwitcherRoot({
    model,
    onModelChange,
    label,
    rounded = "rounded-lg",
    className,
    children,
    ref,
}: SwitcherRootProps) {
    const t = useLocale().switcher;
    const groupRef = useRef<HTMLDivElement>(null);

    const getOptions = () =>
        Array.from(
            groupRef.current?.querySelectorAll<HTMLButtonElement>(
                "[role='radio']:not(:disabled)",
            ) ?? [],
        );

    // Roving tab stop: the checked option, or the first one when none matches the model.
    useLayoutEffect(() => {
        const options = getOptions();
        const checked = options.findIndex(
            (option) => option.getAttribute("aria-checked") === "true",
        );
        const focusable = checked === -1 ? 0 : checked;

        options.forEach((option, index) => {
            option.tabIndex = index === focusable ? 0 : -1;
        });
    });

    const selectAt = (options: HTMLButtonElement[], index: number) => {
        options[index]?.focus();
        options[index]?.click();
    };

    const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        const options = getOptions();

        if (options.length === 0) return;

        const current = options.findIndex(
            (option) => option.getAttribute("aria-checked") === "true",
        );
        const from = current === -1 ? 0 : current;

        if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
            event.preventDefault();
            selectAt(options, from === 0 ? options.length - 1 : from - 1);
            return;
        }

        if (event.key === "ArrowRight" || event.key === "ArrowDown") {
            event.preventDefault();
            selectAt(options, from === options.length - 1 ? 0 : from + 1);
            return;
        }

        if (event.key === "Home") {
            event.preventDefault();
            selectAt(options, 0);
            return;
        }

        if (event.key === "End") {
            event.preventDefault();
            selectAt(options, options.length - 1);
        }
    };

    return (
        <SwitcherContext.Provider
            value={{ model, select: onModelChange, rounded }}
        >
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
                {children}
            </div>
        </SwitcherContext.Provider>
    );
}

function SwitcherOption({
    value,
    disabled = false,
    className,
    children,
    ...props
}: SwitcherOptionProps) {
    const { model, select, rounded } = useSwitcherContext();
    const isActive = value === model;

    return (
        <button
            {...props}
            type="button"
            role="radio"
            aria-checked={isActive}
            disabled={disabled}
            onClick={() => select(value)}
            className={cn(
                "inline-flex cursor-pointer items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main-400/60",
                "disabled:cursor-not-allowed disabled:opacity-40",
                rounded,
                isActive
                    ? "bg-main-700/80 text-main-100"
                    : "text-main-300 enabled:hover:bg-main-800/70 enabled:hover:text-main-100",
                className,
            )}
        >
            {children}
        </button>
    );
}

export const Switcher = {
    Root: SwitcherRoot,
    Option: SwitcherOption,
};

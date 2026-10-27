import { useLayoutEffect, useMemo, useRef } from "react";
import { cn } from "../../lib/utils";
import { ScrollArea } from "../ScrollArea/ScrollArea";
import { pad } from "./time";

type TimeColumnsProps = {
    hours: number | null;
    minutes: number | null;
    minuteStep?: number;
    onChange: (
        hours: number,
        minutes: number,
        part: "hours" | "minutes",
    ) => void;
    hoursLabel: string;
    minutesLabel: string;
    className?: string;
    columnClassName?: string;
};

function TimeColumn({
    values,
    selected,
    label,
    onSelect,
    className,
}: {
    values: number[];
    selected: number | null;
    label: string;
    onSelect: (value: number) => void;
    className?: string;
}) {
    const listRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const list = listRef.current;
        const active = list?.querySelector<HTMLElement>(
            "[aria-selected='true']",
        );

        if (!list || !active) return;

        list.scrollTop =
            active.offsetTop - list.clientHeight / 2 + active.clientHeight / 2;
    }, [selected]);

    return (
        <ScrollArea
            ref={listRef}
            role="listbox"
            aria-label={label}
            orientation="vertical"
            showScrollbar={false}
            className={cn(
                "relative flex max-h-48 flex-col gap-0.5 p-1",
                className,
            )}
        >
            {values.map((value) => {
                const isSelected = value === selected;

                return (
                    <button
                        key={value}
                        type="button"
                        role="option"
                        aria-selected={isSelected}
                        className={cn(
                            "shrink-0 cursor-pointer rounded-md px-2.5 py-1.5 text-center text-sm tabular-nums transition-colors duration-150",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main-400/70",
                            isSelected
                                ? "bg-main-100 font-semibold text-main-900"
                                : "text-main-200 hover:bg-main-700/70 hover:text-main-50",
                        )}
                        onClick={() => onSelect(value)}
                    >
                        {pad(value)}
                    </button>
                );
            })}
        </ScrollArea>
    );
}

export function TimeColumns({
    hours,
    minutes,
    minuteStep = 1,
    onChange,
    hoursLabel,
    minutesLabel,
    className,
    columnClassName,
}: TimeColumnsProps) {
    const hourValues = useMemo(
        () => Array.from({ length: 24 }, (_, index) => index),
        [],
    );

    const minuteValues = useMemo(() => {
        const step = Math.min(Math.max(Math.floor(minuteStep), 1), 30);

        return Array.from(
            { length: Math.ceil(60 / step) },
            (_, index) => index * step,
        );
    }, [minuteStep]);

    return (
        <div
            className={cn(
                "grid grid-cols-[1fr_auto_1fr] items-stretch gap-1",
                className,
            )}
        >
            <TimeColumn
                values={hourValues}
                selected={hours}
                label={hoursLabel}
                onSelect={(next) => onChange(next, minutes ?? 0, "hours")}
                className={columnClassName}
            />
            <span className={"w-px bg-main-700/70"} aria-hidden />
            <TimeColumn
                values={minuteValues}
                selected={minutes}
                label={minutesLabel}
                onSelect={(next) => onChange(hours ?? 0, next, "minutes")}
                className={columnClassName}
            />
        </div>
    );
}

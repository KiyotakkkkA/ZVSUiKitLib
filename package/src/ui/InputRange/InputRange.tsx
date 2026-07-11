import {
    useCallback,
    useId,
    useMemo,
    useRef,
    type KeyboardEvent,
    type PointerEvent,
    type ComponentPropsWithoutRef,
} from "react";
import { cn } from "../../lib/utils";
import type { InputRangeProps, InputRangeValue } from "./types";

const clamp = (value: number, min: number, max: number) =>
    Math.min(Math.max(value, min), max);

const snapToStep = (value: number, min: number, step: number): number => {
    const snapped = Math.round((value - min) / step) * step + min;
    const precision = step.toString().split(".")[1]?.length ?? 0;
    return Number(snapped.toFixed(precision));
};

const toPercent = (value: number, min: number, range: number) =>
    range === 0 ? 0 : ((value - min) / range) * 100;

type ThumbProps = Omit<ComponentPropsWithoutRef<"span">, "onChange"> & {
    id: string;
    index: 0 | 1;
    value: number;
    min: number;
    max: number;
    step: number;
    percent: number;
    disabled: boolean;
    showLabel: boolean;
    labelFormatter: (value: number) => string | number;
    thumbClassName?: string;
    labelClassName?: string;
    inputClassName?: string;
    label?: string;
    onChange: (index: 0 | 1, value: number) => void;
};

const Thumb = ({
    id,
    index,
    value,
    min,
    max,
    step,
    percent,
    disabled,
    showLabel,
    labelFormatter,
    thumbClassName,
    labelClassName,
    inputClassName,
    label,
    onChange,
}: ThumbProps) => {
    const handleKeyDown = useCallback(
        (e: KeyboardEvent<HTMLInputElement>) => {
            const delta = (() => {
                if (e.key === "ArrowLeft" || e.key === "ArrowDown")
                    return -step;
                if (e.key === "ArrowRight" || e.key === "ArrowUp") return step;
                if (e.key === "Home") return min - value;
                if (e.key === "End") return max - value;
                return null;
            })();

            if (delta === null) return;

            e.preventDefault();
            onChange(
                index,
                clamp(snapToStep(value + delta, min, step), min, max),
            );
        },
        [index, value, min, max, step, onChange],
    );

    return (
        <>
            <input
                id={id}
                type="range"
                value={value}
                min={min}
                max={max}
                step={step}
                disabled={disabled}
                aria-label={
                    label ?? (index === 0 ? "Range start" : "Range end")
                }
                aria-valuemin={min}
                aria-valuemax={max}
                aria-valuenow={value}
                onChange={(e) => onChange(index, Number(e.target.value))}
                onKeyDown={handleKeyDown}
                className={cn(
                    "pointer-events-none absolute inset-0 h-full w-full appearance-none bg-transparent opacity-0",
                    inputClassName,
                )}
            />

            {showLabel && (
                <span
                    aria-hidden="true"
                    className={cn(
                        "pointer-events-none absolute bottom-full mb-1.5",
                        "whitespace-nowrap text-xs text-main-300",
                        labelClassName,
                    )}
                    style={{
                        left: `${percent}%`,
                        transform: `translateX(clamp(0%, calc(-1 * ${percent}%), -100%))`,
                    }}
                >
                    {labelFormatter(value)}
                </span>
            )}

            <span
                aria-hidden="true"
                className={cn(
                    "pointer-events-none absolute top-1/2 z-10",
                    "h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full",
                    "bg-main-100 shadow-sm",
                    "transition-transform duration-150",
                    disabled ? "bg-main-300" : "group-hover:scale-110",
                    "group-focus-within:ring-2 group-focus-within:ring-main-300/60",
                    thumbClassName,
                )}
                style={{ left: `${percent}%` }}
            />
        </>
    );
};

export const InputRange = ({
    value,
    onChange,
    min = 0,
    max = 100,
    step = 1,
    disabled = false,
    className,
    classNames,
    showThumbLabels = true,
    valueFormatter,
    thumbLabels,
    ...props
}: InputRangeProps) => {
    const trackRef = useRef<HTMLDivElement>(null);
    const activeThumbRef = useRef<0 | 1>(0);

    const startId = useId();
    const endId = useId();

    const safeMin = Math.min(min, max);
    const safeMax = Math.max(min, max);
    const range = safeMax - safeMin;

    const [start, end] = useMemo<InputRangeValue>(() => {
        const a = clamp(value[0], safeMin, safeMax);
        const b = clamp(value[1], safeMin, safeMax);
        return a <= b ? [a, b] : [b, a];
    }, [value, safeMin, safeMax]);

    const startPercent = toPercent(start, safeMin, range);
    const endPercent = toPercent(end, safeMin, range);

    const format = useCallback(
        (v: number) => valueFormatter?.(v) ?? v,
        [valueFormatter],
    );

    const handleChange = useCallback(
        (index: 0 | 1, next: number) => {
            const snapped = clamp(
                snapToStep(next, safeMin, Math.max(step, Number.EPSILON)),
                safeMin,
                safeMax,
            );

            onChange(
                index === 0
                    ? [Math.min(snapped, end), end]
                    : [start, Math.max(snapped, start)],
            );
        },
        [start, end, safeMin, safeMax, step, onChange],
    );

    const pointerToValue = useCallback(
        (e: PointerEvent<HTMLDivElement>): number => {
            const rect = trackRef.current?.getBoundingClientRect();
            if (!rect || rect.width === 0) return safeMin;
            return (
                safeMin +
                clamp((e.clientX - rect.left) / rect.width, 0, 1) * range
            );
        },
        [safeMin, range],
    );

    const handlePointerDown = useCallback(
        (e: PointerEvent<HTMLDivElement>) => {
            if (disabled) return;

            const next = pointerToValue(e);
            const distToStart = Math.abs(next - start);
            const distToEnd = Math.abs(next - end);
            activeThumbRef.current = distToStart <= distToEnd ? 0 : 1;

            e.currentTarget.setPointerCapture(e.pointerId);
            handleChange(activeThumbRef.current, next);
        },
        [disabled, pointerToValue, start, end, handleChange],
    );

    const handlePointerMove = useCallback(
        (e: PointerEvent<HTMLDivElement>) => {
            if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
            handleChange(activeThumbRef.current, pointerToValue(e));
        },
        [handleChange, pointerToValue],
    );

    const releaseCapture = useCallback((e: PointerEvent<HTMLDivElement>) => {
        if (e.currentTarget.hasPointerCapture(e.pointerId)) {
            e.currentTarget.releasePointerCapture(e.pointerId);
        }
    }, []);

    return (
        <div
            className={cn(
                "group inline-flex w-full items-center gap-3",
                disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer",
                className,
            )}
        >
            <div className={cn("relative w-full", showThumbLabels && "pt-5")}>
                <div
                    ref={trackRef}
                    role="group"
                    aria-label={props["aria-label"] ?? "Range slider"}
                    aria-disabled={disabled}
                    className="relative h-6 w-full touch-none select-none"
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={releaseCapture}
                    onPointerCancel={releaseCapture}
                >
                    <div
                        className={cn(
                            "absolute left-0 top-1/2 h-2 w-full -translate-y-1/2 overflow-hidden rounded-full",
                            "border border-main-600 bg-main-800",
                            "transition-colors duration-200",
                            classNames?.track,
                        )}
                    >
                        <div
                            className={cn(
                                "absolute h-full rounded-full bg-main-500/70 transition-colors duration-200",
                                classNames?.fill,
                            )}
                            style={{
                                left: `${startPercent}%`,
                                width: `${endPercent - startPercent}%`,
                            }}
                        />
                    </div>

                    <Thumb
                        id={startId}
                        index={0}
                        value={start}
                        min={safeMin}
                        max={safeMax}
                        step={step}
                        percent={startPercent}
                        disabled={disabled}
                        showLabel={showThumbLabels}
                        labelFormatter={format}
                        thumbClassName={classNames?.thumb}
                        labelClassName={classNames?.thumbLabel}
                        inputClassName={classNames?.input}
                        label={thumbLabels?.[0]}
                        onChange={handleChange}
                    />
                    <Thumb
                        id={endId}
                        index={1}
                        value={end}
                        min={safeMin}
                        max={safeMax}
                        step={step}
                        percent={endPercent}
                        disabled={disabled}
                        showLabel={showThumbLabels}
                        labelFormatter={format}
                        thumbClassName={classNames?.thumb}
                        labelClassName={classNames?.thumbLabel}
                        inputClassName={classNames?.input}
                        label={thumbLabels?.[1]}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    );
};

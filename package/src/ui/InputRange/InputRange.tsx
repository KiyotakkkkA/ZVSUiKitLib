import styles from "./InputRange.module.css";
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
                    styles.s0,
                    inputClassName,
                )}
            />

            {showLabel && (
                <span
                    aria-hidden="true"
                    className={cn(
                        styles.s1,
                        styles.s2,
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
                    styles.s3,
                    styles.s4,
                    styles.s5,
                    styles.s6,
                    disabled ? styles.s7 : styles.s8,
                    styles.s9,
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
                styles.s10,
                disabled ? styles.s11 : styles.s12,
                className,
            )}
        >
            <div className={cn(styles.s13, showThumbLabels && styles.s14)}>
                <div
                    ref={trackRef}
                    role="group"
                    aria-label={props["aria-label"] ?? "Range slider"}
                    aria-disabled={disabled}
                    className={styles.s15}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={releaseCapture}
                    onPointerCancel={releaseCapture}
                >
                    <div
                        className={cn(
                            styles.s16,
                            styles.s17,
                            styles.s18,
                            classNames?.track,
                        )}
                    >
                        <div
                            className={cn(
                                styles.s19,
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

"use client";

import {
    forwardRef,
    useId,
    useImperativeHandle,
    useLayoutEffect,
    useRef,
    useState,
    type ChangeEvent,
} from "react";
import { cn } from "../../lib/utils";
import type { InputBigProps } from "./types";

export const InputBig = forwardRef<HTMLTextAreaElement, InputBigProps>(
    function InputBig(
        {
            className,
            classNames,
            label,
            description,
            error,
            showCount = false,
            autoResize = false,
            minRows = 3,
            maxRows = 10,
            id,
            value,
            defaultValue,
            maxLength,
            disabled,
            readOnly,
            onChange,
            rows,
            ...props
        },
        forwardedRef,
    ) {
        const generatedId = useId();
        const textareaId = id ?? generatedId;
        const textareaRef = useRef<HTMLTextAreaElement>(null);
        const [uncontrolledLength, setUncontrolledLength] = useState(
            () => String(defaultValue ?? "").length,
        );

        useImperativeHandle(forwardedRef, () => textareaRef.current!);

        const message = error ?? description;
        const messageId = message ? `${textareaId}-message` : undefined;
        const currentLength =
            value === undefined ? uncontrolledLength : String(value).length;

        const resize = () => {
            const textarea = textareaRef.current;

            if (!textarea || !autoResize) return;

            const styles = window.getComputedStyle(textarea);
            const lineHeight = Number.parseFloat(styles.lineHeight) || 24;
            const borderHeight =
                Number.parseFloat(styles.borderTopWidth) +
                Number.parseFloat(styles.borderBottomWidth);
            const paddingHeight =
                Number.parseFloat(styles.paddingTop) +
                Number.parseFloat(styles.paddingBottom);
            const maximumHeight =
                lineHeight * Math.max(minRows, maxRows) +
                paddingHeight +
                borderHeight;

            textarea.style.height = "auto";
            textarea.style.height = `${Math.min(textarea.scrollHeight, maximumHeight)}px`;
            textarea.style.overflowY =
                textarea.scrollHeight > maximumHeight ? "auto" : "hidden";
        };

        useLayoutEffect(resize, [autoResize, maxRows, minRows, value]);

        const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
            if (value === undefined) {
                setUncontrolledLength(event.target.value.length);
            }

            resize();
            onChange?.(event);
        };

        return (
            <div className={cn("w-full min-w-0", classNames?.root)}>
                {label && (
                    <label
                        htmlFor={textareaId}
                        className={cn(
                            "mb-1.5 block text-sm font-medium text-main-200",
                            disabled && "opacity-60",
                            classNames?.label,
                        )}
                    >
                        {label}
                    </label>
                )}

                <textarea
                    ref={textareaRef}
                    id={textareaId}
                    value={value}
                    defaultValue={defaultValue}
                    rows={autoResize ? minRows : (rows ?? minRows)}
                    maxLength={maxLength}
                    disabled={disabled}
                    readOnly={readOnly}
                    aria-invalid={Boolean(error) || undefined}
                    aria-describedby={messageId}
                    onChange={handleChange}
                    className={cn(
                        "zvs-scroll-area",
                        "block min-h-24 w-full min-w-0 rounded-lg border bg-main-800 px-3 py-2.5",
                        "text-sm leading-6 text-main-100 placeholder:text-main-500 outline-none transition-[border-color,box-shadow,background-color]",
                        "border-main-700 hover:border-main-600 focus:border-main-500 focus:ring-2 focus:ring-main-500/20",
                        "disabled:cursor-not-allowed disabled:opacity-60 read-only:cursor-default read-only:bg-main-800/60",
                        error &&
                            "border-danger-medium/70 focus:border-danger-medium focus:ring-danger-medium/20",
                        autoResize ? "resize-none" : "resize-y",
                        className,
                        classNames?.textarea,
                    )}
                    {...props}
                />

                {(message || showCount) && (
                    <div
                        className={cn(
                            "mt-1.5 flex min-w-0 items-start justify-between gap-3 text-xs",
                            classNames?.footer,
                        )}
                    >
                        {message ? (
                            <p
                                id={messageId}
                                className={cn(
                                    "min-w-0 text-main-500",
                                    error && "text-danger-medium",
                                    classNames?.message,
                                )}
                            >
                                {message}
                            </p>
                        ) : (
                            <span />
                        )}

                        {showCount && (
                            <span
                                className={cn(
                                    "shrink-0 tabular-nums text-main-500",
                                    maxLength &&
                                        currentLength >= maxLength &&
                                        "text-main-300",
                                    classNames?.counter,
                                )}
                            >
                                {currentLength}
                                {maxLength ? ` / ${maxLength}` : null}
                            </span>
                        )}
                    </div>
                )}
            </div>
        );
    },
);

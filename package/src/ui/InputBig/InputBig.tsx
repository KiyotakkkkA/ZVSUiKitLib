"use client";


import styles from "./InputBig.module.css";

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
            <div className={cn(styles.s0, className)}>
                {label && (
                    <label
                        htmlFor={textareaId}
                        className={cn(
                            styles.s1,
                            disabled && styles.s2,
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
                        styles.s3,
                        styles.s4,
                        styles.s5,
                        styles.s6,
                        styles.s7,
                        error &&
                            styles.s8,
                        autoResize ? styles.s9 : styles.s10,
                        classNames?.textarea,
                    )}
                    {...props}
                />

                {(message || showCount) && (
                    <div
                        className={cn(
                            styles.s11,
                            classNames?.footer,
                        )}
                    >
                        {message ? (
                            <p
                                id={messageId}
                                className={cn(
                                    styles.s12,
                                    error && styles.s13,
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
                                    styles.s14,
                                    maxLength &&
                                        currentLength >= maxLength &&
                                        styles.s15,
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

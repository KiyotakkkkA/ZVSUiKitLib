"use client";

import {
    createContext,
    useCallback,
    useContext,
    useLayoutEffect,
    useMemo,
    useRef,
    useState,
    type CSSProperties,
    type FocusEvent,
    type MouseEvent,
    type RefObject,
} from "react";
import { cn } from "../../lib/utils";
import { observeAnchor } from "../../lib/observeAnchor";
import { computeMenuPosition } from "../../lib/position";
import type {
    FloatingContentProps,
    FloatingContextValue,
    FloatingProps,
    FloatingTriggerProps,
} from "./types";

const FLOATING_GAP = 8;

const FloatingContext = createContext<FloatingContextValue | null>(null);

function useFloatingContext() {
    const context = useContext(FloatingContext);

    if (!context) {
        throw new Error(
            "Floating.Trigger and Floating.Content must be used inside Floating.",
        );
    }

    return context;
}

function FloatingRoot({
    children,
    anchor = "top-right",
    className,
    ref,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
    ...props
}: FloatingProps) {
    const [triggerActive, setTriggerActive] = useState(false);
    const [contentActive, setContentActive] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);
    const open = triggerActive || contentActive;

    const setRootRef = useCallback(
        (node: HTMLDivElement | null) => {
            rootRef.current = node;

            if (typeof ref === "function") {
                ref(node);
            } else if (ref) {
                ref.current = node;
            }
        },
        [ref],
    );

    const contextValue = useMemo<FloatingContextValue>(
        () => ({
            anchor,
            open,
            rootRef: rootRef as RefObject<HTMLDivElement | null>,
            setContentActive,
        }),
        [anchor, open],
    );

    return (
        <FloatingContext.Provider value={contextValue}>
            <div
                ref={setRootRef}
                className={cn("relative inline-flex w-fit", className)}
                onMouseEnter={(event: MouseEvent<HTMLDivElement>) => {
                    onMouseEnter?.(event);
                    setTriggerActive(true);
                }}
                onMouseLeave={(event: MouseEvent<HTMLDivElement>) => {
                    onMouseLeave?.(event);
                    setTriggerActive(false);
                }}
                onFocus={(event: FocusEvent<HTMLDivElement>) => {
                    onFocus?.(event);
                    setTriggerActive(true);
                }}
                onBlur={(event: FocusEvent<HTMLDivElement>) => {
                    onBlur?.(event);
                    setTriggerActive(false);
                }}
                {...props}
            >
                {children}
            </div>
        </FloatingContext.Provider>
    );
}

function FloatingTrigger({
    children,
    className,
    ...props
}: FloatingTriggerProps) {
    useFloatingContext();

    return (
        <div className={cn("inline-flex w-fit", className)} {...props}>
            {children}
        </div>
    );
}

function FloatingContent({
    children,
    className,
    rounded = "rounded-lg",
    style,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
    ...props
}: FloatingContentProps) {
    const { anchor, open, rootRef, setContentActive } = useFloatingContext();
    const contentRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState<CSSProperties>();

    const updatePosition = useCallback(() => {
        const trigger = rootRef.current;
        const content = contentRef.current;

        if (!trigger || !content) return;

        setPosition(
            computeMenuPosition({
                trigger: trigger.getBoundingClientRect(),
                menu: {
                    width: content.offsetWidth,
                    height: content.offsetHeight,
                },
                placement: anchor,
                viewport: {
                    width: window.innerWidth,
                    height: window.innerHeight,
                },
                gap: FLOATING_GAP,
                padding: 8,
            }),
        );
    }, [anchor, rootRef]);

    useLayoutEffect(() => {
        const content = contentRef.current;
        const trigger = rootRef.current;
        if (!content || !trigger) return;
        if (!open) {
            if (content.matches(":popover-open")) content.hidePopover();
            return;
        }
        if (!content.matches(":popover-open")) content.showPopover();
        return observeAnchor(trigger, content, updatePosition);
    }, [open, rootRef, updatePosition]);

    return (
        <div
            {...props}
            ref={contentRef}
            popover="manual"
            style={{
                color: "inherit",
                ...style,
                inset: "auto",
                margin: 0,
                ...position,
            }}
            className={cn(
                "fixed z-9999 isolate overflow-hidden border border-main-700/80",
                rounded,
                "bg-main-900/95 p-3 opacity-0 transition-opacity duration-150",
                open && position
                    ? "visible pointer-events-auto opacity-100"
                    : "pointer-events-none invisible opacity-0",
                className,
            )}
            onMouseEnter={(event: MouseEvent<HTMLDivElement>) => {
                onMouseEnter?.(event);
                setContentActive(true);
            }}
            onMouseLeave={(event: MouseEvent<HTMLDivElement>) => {
                onMouseLeave?.(event);
                setContentActive(false);
            }}
            onFocus={(event: FocusEvent<HTMLDivElement>) => {
                onFocus?.(event);
                setContentActive(true);
            }}
            onBlur={(event: FocusEvent<HTMLDivElement>) => {
                onBlur?.(event);
                setContentActive(false);
            }}
        >
            {children}
        </div>
    );
}

export const Floating = Object.assign(FloatingRoot, {
    Trigger: FloatingTrigger,
    Content: FloatingContent,
});

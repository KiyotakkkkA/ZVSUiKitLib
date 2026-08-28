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
import { createPortal } from "react-dom";
import { cn } from "../../lib/utils";
import { usePortalContainer } from "../../hooks/usePortalContainer";
import type {
    FloatingContentProps,
    FloatingContextValue,
    FloatingProps,
    FloatingTriggerProps,
} from "./types";
import type { PositionAnchor } from "../..";

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

function computePosition(
    triggerRect: DOMRect,
    contentRect: DOMRect,
    anchor: PositionAnchor,
) {
    const [side, alignment] = anchor.split("-");

    let left = triggerRect.left;
    let top = triggerRect.top;

    if (side === "left") {
        left = triggerRect.left - contentRect.width - FLOATING_GAP;
        top += (triggerRect.height - contentRect.height) / 2;
    } else if (side === "right") {
        left = triggerRect.right + FLOATING_GAP;
        top += (triggerRect.height - contentRect.height) / 2;
    } else if (alignment === "center") {
        left += (triggerRect.width - contentRect.width) / 2;
    } else if (alignment === "right") {
        left = triggerRect.right - contentRect.width;
    }

    if (side === "top") {
        top = triggerRect.top - contentRect.height - FLOATING_GAP;
    } else if (side === "bottom") {
        top = triggerRect.bottom + FLOATING_GAP;
    }

    return { left, top };
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
    const portalContainer = usePortalContainer();

    const updatePosition = useCallback(() => {
        const trigger = rootRef.current;
        const content = contentRef.current;

        if (!trigger || !content) return;

        setPosition(
            computePosition(
                trigger.getBoundingClientRect(),
                content.getBoundingClientRect(),
                anchor,
            ),
        );
    }, [anchor, rootRef]);

    useLayoutEffect(() => {
        if (!open) return;

        updatePosition();

        window.addEventListener("resize", updatePosition);
        window.addEventListener("scroll", updatePosition, true);

        const resizeObserver =
            typeof ResizeObserver === "undefined"
                ? null
                : new ResizeObserver(updatePosition);

        if (rootRef.current) resizeObserver?.observe(rootRef.current);
        if (contentRef.current) resizeObserver?.observe(contentRef.current);

        return () => {
            window.removeEventListener("resize", updatePosition);
            window.removeEventListener("scroll", updatePosition, true);
            resizeObserver?.disconnect();
        };
    }, [open, rootRef, updatePosition]);

    if (!portalContainer) {
        return null;
    }

    return createPortal(
        <div
            {...props}
            ref={contentRef}
            style={{ ...style, ...position }}
            className={cn(
                "fixed z-9999 isolate overflow-hidden border border-main-700/80",
                rounded,
                "bg-main-900/95 p-3 opacity-0 transition-all duration-150",
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
        </div>,
        portalContainer,
    );
}

export const Floating = Object.assign(FloatingRoot, {
    Trigger: FloatingTrigger,
    Content: FloatingContent,
});

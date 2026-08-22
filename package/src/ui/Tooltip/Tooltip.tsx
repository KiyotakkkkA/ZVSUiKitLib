"use client";

import {
    useCallback,
    useLayoutEffect,
    useRef,
    useState,
    type CSSProperties,
} from "react";
import { createPortal } from "react-dom";
import type { PositionAnchor } from "../..";
import { usePortalContainer } from "../../hooks/usePortalContainer";
import { cn } from "../../lib/utils";
import type { TooltipProps } from "./types";

const TOOLTIP_GAP = 8;

const arrowPositionByPlacement: Record<PositionAnchor, string> = {
    "top-left": "top-full left-5 -translate-y-1/2",
    "top-center": "top-full left-1/2 -translate-x-1/2 -translate-y-1/2",
    "top-right": "top-full right-5 -translate-y-1/2",
    "left-center": "top-1/2 left-full -translate-x-1/2 -translate-y-1/2",
    "right-center": "top-1/2 right-full translate-x-1/2 -translate-y-1/2",
    "bottom-left": "bottom-full left-5 translate-y-1/2",
    "bottom-center": "bottom-full left-1/2 -translate-x-1/2 translate-y-1/2",
    "bottom-right": "bottom-full right-5 translate-y-1/2",
};

export function Tooltip({
    children,
    label,
    placement = "top-center",
    className,
    rounded = "rounded-full",
    ref,
}: TooltipProps) {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState<CSSProperties>();
    const triggerRef = useRef<HTMLSpanElement | null>(null);
    const tooltipRef = useRef<HTMLSpanElement | null>(null);
    const portalContainer = usePortalContainer();

    const setTriggerRef = useCallback(
        (node: HTMLSpanElement | null) => {
            triggerRef.current = node;

            if (typeof ref === "function") {
                ref(node);
            } else if (ref) {
                ref.current = node;
            }
        },
        [ref],
    );

    const updatePosition = useCallback(() => {
        const trigger = triggerRef.current;
        const tooltip = tooltipRef.current;

        if (!trigger || !tooltip) return;

        const triggerRect = trigger.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
        const [side, alignment] = placement.split("-");

        let left = triggerRect.left;
        let top = triggerRect.top;

        if (side === "left") {
            left = triggerRect.left - tooltipRect.width - TOOLTIP_GAP;
            top += (triggerRect.height - tooltipRect.height) / 2;
        } else if (side === "right") {
            left = triggerRect.right + TOOLTIP_GAP;
            top += (triggerRect.height - tooltipRect.height) / 2;
        } else if (alignment === "center") {
            left += (triggerRect.width - tooltipRect.width) / 2;
        } else if (alignment === "right") {
            left = triggerRect.right - tooltipRect.width;
        }

        if (side === "top") {
            top = triggerRect.top - tooltipRect.height - TOOLTIP_GAP;
        } else if (side === "bottom") {
            top = triggerRect.bottom + TOOLTIP_GAP;
        }

        setPosition({ left, top });
    }, [placement]);

    useLayoutEffect(() => {
        if (!visible) return;

        updatePosition();

        window.addEventListener("resize", updatePosition);
        window.addEventListener("scroll", updatePosition, true);

        const resizeObserver =
            typeof ResizeObserver === "undefined"
                ? null
                : new ResizeObserver(updatePosition);

        if (triggerRef.current) resizeObserver?.observe(triggerRef.current);
        if (tooltipRef.current) resizeObserver?.observe(tooltipRef.current);

        return () => {
            window.removeEventListener("resize", updatePosition);
            window.removeEventListener("scroll", updatePosition, true);
            resizeObserver?.disconnect();
        };
    }, [portalContainer, updatePosition, visible]);

    return (
        <span
            ref={setTriggerRef}
            className={"relative inline-flex w-fit"}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            {children}
            {portalContainer &&
                createPortal(
                    <span
                        ref={tooltipRef}
                        role="tooltip"
                        style={position}
                        className={cn(
                            "pointer-events-none fixed z-9999 max-w-xs whitespace-nowrap",
                            rounded,
                            "bg-main-100 px-2.5 py-1.5 text-xs font-medium text-main-900 shadow-lg",
                            "transition-opacity duration-150",
                            visible && position
                                ? "visible opacity-100"
                                : "invisible opacity-0",
                            className,
                        )}
                    >
                        {label}
                        <span
                            className={cn(
                                "absolute h-2 w-2 rotate-45 rounded-[1px] bg-main-100",
                                arrowPositionByPlacement[placement],
                            )}
                            aria-hidden
                        />
                    </span>,
                    portalContainer,
                )}
        </span>
    );
}

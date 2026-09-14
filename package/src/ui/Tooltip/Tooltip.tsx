"use client";

import {
    useCallback,
    useLayoutEffect,
    useRef,
    useState,
    type CSSProperties,
} from "react";
import type { PositionAnchor } from "../..";
import { observeAnchor } from "../../lib/observeAnchor";
import { computeMenuPosition } from "../../lib/position";
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

        setPosition(computeMenuPosition({
            trigger: trigger.getBoundingClientRect(),
            menu: { width: tooltip.offsetWidth, height: tooltip.offsetHeight },
            placement,
            viewport: { width: window.innerWidth, height: window.innerHeight },
            gap: TOOLTIP_GAP,
            padding: 8,
        }));
    }, [placement]);

    useLayoutEffect(() => {
        const tooltip = tooltipRef.current;
        const trigger = triggerRef.current;
        if (!tooltip || !trigger) return;
        if (!visible) {
            if (tooltip.matches(":popover-open")) tooltip.hidePopover();
            return;
        }
        if (!tooltip.matches(":popover-open")) tooltip.showPopover();
        return observeAnchor(trigger, tooltip, updatePosition);
    }, [updatePosition, visible]);

    return (
        <span
            ref={setTriggerRef}
            className={"relative inline-flex w-fit"}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            {children}
            <span
                ref={tooltipRef}
                popover="manual"
                role="tooltip"
                style={{
                    inset: "auto",
                    margin: 0,
                    overflow: "visible",
                    border: 0,
                    ...position,
                }}
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
            </span>
        </span>
    );
}

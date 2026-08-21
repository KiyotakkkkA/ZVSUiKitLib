"use client";

import {
    createContext,
    forwardRef,
    useCallback,
    useContext,
    useEffect,
    useId,
    useMemo,
    useRef,
    useState,
    type KeyboardEvent,
    type PointerEvent,
} from "react";
import { cn } from "../../lib/utils";
import type {
    ResizablePanelContextValue,
    ResizablePanelProps,
    ResizablePanelSidebarProps,
    ResizablePanelContentProps,
    ResizablePanelHandleProps,
} from "./types";

const clamp = (value: number, min: number, max: number) =>
    Math.min(Math.max(value, min), max);
const Context = createContext<ResizablePanelContextValue | null>(null);
const usePanel = () => {
    const value = useContext(Context);
    if (!value)
        throw new Error(
            "ResizablePanel parts must be used inside <ResizablePanel />",
        );
    return value;
};

const Root = forwardRef<HTMLDivElement, ResizablePanelProps>(function Root(
    {
        children,
        size: controlledSize,
        defaultSize = 280,
        minSize = 180,
        maxSize = 520,
        orientation = "horizontal",
        keyboardStep = 10,
        disabled = false,
        onSizeChange,
        onResizeStart,
        onResizeEnd,
        className,
        ...props
    },
    ref,
) {
    const safeMin = Math.min(minSize, maxSize);
    const safeMax = Math.max(minSize, maxSize);
    const safeDefault = clamp(defaultSize, safeMin, safeMax);
    const [innerSize, setInnerSize] = useState(safeDefault);
    const size = clamp(controlledSize ?? innerSize, safeMin, safeMax);
    const sizeRef = useRef(size);
    const [resizing, setResizing] = useState(false);
    const sidebarId = `${useId()}-primary-panel`;

    useEffect(() => {
        sizeRef.current = size;
    }, [size]);

    const resizeTo = useCallback(
        (nextValue: number) => {
            const next = clamp(nextValue, safeMin, safeMax);
            const previous = sizeRef.current;
            sizeRef.current = next;
            if (controlledSize === undefined) setInnerSize(next);
            if (next !== previous) onSizeChange?.(next);
            return next;
        },
        [controlledSize, onSizeChange, safeMax, safeMin],
    );
    const startResize = useCallback(() => {
        setResizing(true);
        onResizeStart?.(sizeRef.current);
    }, [onResizeStart]);
    const endResize = useCallback(() => {
        setResizing(false);
        onResizeEnd?.(sizeRef.current);
    }, [onResizeEnd]);

    const context = useMemo<ResizablePanelContextValue>(
        () => ({
            size,
            minSize: safeMin,
            maxSize: safeMax,
            defaultSize: safeDefault,
            keyboardStep: Math.max(1, keyboardStep),
            orientation,
            disabled,
            resizing,
            sidebarId,
            resizeTo,
            startResize,
            endResize,
        }),
        [
            size,
            safeMin,
            safeMax,
            safeDefault,
            keyboardStep,
            orientation,
            disabled,
            resizing,
            sidebarId,
            resizeTo,
            startResize,
            endResize,
        ],
    );

    return (
        <Context.Provider value={context}>
            <div
                {...props}
                ref={ref}
                data-orientation={orientation}
                data-resizing={resizing || undefined}
                data-disabled={disabled || undefined}
                className={cn(
                    "flex min-h-0 min-w-0 overflow-hidden rounded-2xl border border-main-700/70 bg-main-900/50",
                    "data-[orientation=vertical]:flex-col",
                    className,
                )}
            >
                {children}
            </div>
        </Context.Provider>
    );
});

const Sidebar = forwardRef<HTMLElement, ResizablePanelSidebarProps>(
    function Sidebar({ children, className, style, id, ...props }, ref) {
        const { size, orientation, sidebarId } = usePanel();
        return (
            <aside
                {...props}
                ref={ref}
                id={id ?? sidebarId}
                className={cn("min-h-0 min-w-0 shrink-0 overflow-auto", className)}
                style={{
                    ...(orientation === "horizontal"
                        ? { width: size }
                        : { height: size }),
                    ...style,
                }}
            >
                {children}
            </aside>
        );
    },
);

const Content = forwardRef<HTMLElement, ResizablePanelContentProps>(
    function Content({ children, className, ...props }, ref) {
        return (
            <main
                {...props}
                ref={ref}
                className={cn("min-h-0 min-w-0 flex-1 overflow-auto", className)}
            >
                {children}
            </main>
        );
    },
);

const Handle = forwardRef<HTMLDivElement, ResizablePanelHandleProps>(
    function Handle(
        {
            className,
            resetOnDoubleClick = true,
            onPointerDown,
            onPointerMove,
            onPointerUp,
            onPointerCancel,
            onLostPointerCapture,
            onKeyDown,
            onDoubleClick,
            ...props
        },
        ref,
    ) {
        const panel = usePanel();
        const interaction = useRef<{
            pointerId: number;
            start: number;
            size: number;
            direction: number;
        } | null>(null);
        const bodyStyles = useRef<{
            cursor: string;
            userSelect: string;
        } | null>(null);
        const restoreBody = useCallback(() => {
            if (!bodyStyles.current) return;
            document.body.style.cursor = bodyStyles.current.cursor;
            document.body.style.userSelect = bodyStyles.current.userSelect;
            bodyStyles.current = null;
        }, []);
        const finish = useCallback(() => {
            if (!interaction.current) return;
            interaction.current = null;
            restoreBody();
            panel.endResize();
        }, [panel, restoreBody]);
        useEffect(() => restoreBody, [restoreBody]);

        const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
            onKeyDown?.(event);
            if (event.defaultPrevented || panel.disabled) return;
            const rtl =
                getComputedStyle(
                    event.currentTarget.parentElement ?? event.currentTarget,
                ).direction === "rtl";
            let delta: number | null = null;
            if (event.key === "Home") delta = panel.minSize - panel.size;
            if (event.key === "End") delta = panel.maxSize - panel.size;
            if (panel.orientation === "horizontal") {
                if (event.key === "ArrowLeft")
                    delta = (rtl ? 1 : -1) * panel.keyboardStep;
                if (event.key === "ArrowRight")
                    delta = (rtl ? -1 : 1) * panel.keyboardStep;
            } else {
                if (event.key === "ArrowUp") delta = -panel.keyboardStep;
                if (event.key === "ArrowDown") delta = panel.keyboardStep;
            }
            if (delta === null) return;
            event.preventDefault();
            panel.startResize();
            panel.resizeTo(panel.size + delta);
            panel.endResize();
        };

        return (
            <div
                {...props}
                ref={ref}
                role="separator"
                tabIndex={panel.disabled ? -1 : (props.tabIndex ?? 0)}
                aria-label={props["aria-label"] ?? "Resize panel"}
                aria-controls={props["aria-controls"] ?? panel.sidebarId}
                aria-orientation={
                    panel.orientation === "horizontal"
                        ? "vertical"
                        : "horizontal"
                }
                aria-valuemin={panel.minSize}
                aria-valuemax={panel.maxSize}
                aria-valuenow={Math.round(panel.size)}
                aria-disabled={panel.disabled || undefined}
                data-orientation={panel.orientation}
                data-resizing={panel.resizing || undefined}
                className={cn(
                    "group relative flex shrink-0 touch-none items-center justify-center bg-main-900 outline-none transition-colors",
                    "data-[orientation=horizontal]:w-2 data-[orientation=horizontal]:cursor-col-resize",
                    "data-[orientation=vertical]:h-2 data-[orientation=vertical]:cursor-row-resize",
                    "hover:bg-main-800/60 data-[resizing]:bg-main-800/60",
                    "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-main-400",
                    "aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
                    className,
                )}
                onKeyDown={handleKeyDown}
                onPointerDown={(event) => {
                    onPointerDown?.(event);
                    if (
                        event.defaultPrevented ||
                        panel.disabled ||
                        event.button !== 0
                    )
                        return;
                    const rtl =
                        getComputedStyle(
                            event.currentTarget.parentElement ??
                                event.currentTarget,
                        ).direction === "rtl";
                    interaction.current = {
                        pointerId: event.pointerId,
                        start:
                            panel.orientation === "horizontal"
                                ? event.clientX
                                : event.clientY,
                        size: panel.size,
                        direction:
                            panel.orientation === "horizontal" && rtl ? -1 : 1,
                    };
                    event.currentTarget.setPointerCapture(event.pointerId);
                    bodyStyles.current = {
                        cursor: document.body.style.cursor,
                        userSelect: document.body.style.userSelect,
                    };
                    document.body.style.cursor =
                        panel.orientation === "horizontal"
                            ? "col-resize"
                            : "row-resize";
                    document.body.style.userSelect = "none";
                    panel.startResize();
                }}
                onPointerMove={(event: PointerEvent<HTMLDivElement>) => {
                    onPointerMove?.(event);
                    const active = interaction.current;
                    if (!active || active.pointerId !== event.pointerId) return;
                    const coordinate =
                        panel.orientation === "horizontal"
                            ? event.clientX
                            : event.clientY;
                    panel.resizeTo(
                        active.size +
                            (coordinate - active.start) * active.direction,
                    );
                }}
                onPointerUp={(event) => {
                    onPointerUp?.(event);
                    if (interaction.current?.pointerId !== event.pointerId)
                        return;
                    event.currentTarget.releasePointerCapture(event.pointerId);
                    finish();
                }}
                onPointerCancel={(event) => {
                    onPointerCancel?.(event);
                    if (interaction.current?.pointerId === event.pointerId)
                        finish();
                }}
                onLostPointerCapture={(event) => {
                    onLostPointerCapture?.(event);
                    finish();
                }}
                onDoubleClick={(event) => {
                    onDoubleClick?.(event);
                    if (
                        event.defaultPrevented ||
                        panel.disabled ||
                        !resetOnDoubleClick
                    )
                        return;
                    panel.startResize();
                    panel.resizeTo(panel.defaultSize);
                    panel.endResize();
                }}
            >
                <span
                    className={cn(
                        "rounded-full bg-main-700 transition-colors duration-150",
                        "group-data-[orientation=horizontal]:h-10 group-data-[orientation=horizontal]:w-px",
                        "group-data-[orientation=vertical]:h-px group-data-[orientation=vertical]:w-10",
                        "group-hover:bg-main-400 group-focus-visible:bg-main-400 group-data-[resizing]:bg-main-400",
                    )}
                    aria-hidden="true"
                />
            </div>
        );
    },
);

export const ResizablePanel = Object.assign(Root, { Sidebar, Handle, Content });

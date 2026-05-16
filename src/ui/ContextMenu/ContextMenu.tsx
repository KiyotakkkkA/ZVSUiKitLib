"use client";

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useId,
    useMemo,
    useRef,
    useState,
} from "react";
import { createPortal } from "react-dom";
import { cn } from "../../lib/utils";
import { usePortalContainer } from "../../hooks/usePortalContainer";
import type {
    ContextMenuContentProps,
    ContextMenuItemProps,
    ContextMenuProps,
    ContextMenuSeparatorProps,
    ContextMenuState,
    ContextMenuSubContentProps,
    ContextMenuSubProps,
    ContextMenuSubTriggerProps,
    ContextMenuTriggerProps,
} from "./types";

const CONTEXT_MENU_VIEWPORT_PADDING = 8;

type ContextMenuContextValue = {
    state: ContextMenuState;
    setState: (state: ContextMenuState) => void;
    close: () => void;

    activeSubIds: string[];
    pinnedSubIds: string[];

    openSubId: (id: string, depth: number) => void;
    closeSubId: (id: string, depth: number) => void;
    togglePinnedSubId: (id: string, depth: number) => void;
};

const ContextMenuContext = createContext<ContextMenuContextValue | null>(null);

const useContextMenu = () => {
    const context = useContext(ContextMenuContext);

    if (!context) {
        throw new Error(
            "ContextMenu components must be used inside <ContextMenu />",
        );
    }

    return context;
};

const ContextMenuRoot = ({ children }: ContextMenuProps) => {
    const [state, setState] = useState<ContextMenuState>({
        open: false,
        x: 0,
        y: 0,
    });

    const [activeSubIds, setActiveSubIds] = useState<string[]>([]);
    const [pinnedSubIds, setPinnedSubIds] = useState<string[]>([]);

    const close = useCallback(() => {
        setState((prev) => ({ ...prev, open: false }));
        setActiveSubIds([]);
        setPinnedSubIds([]);
    }, []);

    const openSubId = useCallback((id: string, depth: number) => {
        setActiveSubIds((prev) => {
            const next = prev.slice(0, depth);
            next[depth] = id;
            return next;
        });
    }, []);

    const closeSubId = useCallback((id: string, depth: number) => {
        setActiveSubIds((prev) => {
            if (prev[depth] !== id) return prev;
            return prev.slice(0, depth);
        });

        setPinnedSubIds((prev) => {
            if (prev[depth] !== id) return prev;
            return prev.slice(0, depth);
        });
    }, []);

    const togglePinnedSubId = useCallback((id: string, depth: number) => {
        setPinnedSubIds((prev) => {
            const isPinned = prev[depth] === id;

            if (isPinned) {
                setActiveSubIds((activePrev) => {
                    if (activePrev[depth] !== id) return activePrev;
                    return activePrev.slice(0, depth);
                });

                return prev.slice(0, depth);
            }

            setActiveSubIds((activePrev) => {
                const next = activePrev.slice(0, depth);
                next[depth] = id;
                return next;
            });

            const next = prev.slice(0, depth);
            next[depth] = id;
            return next;
        });
    }, []);

    const value = useMemo(
        () => ({
            state,
            setState,
            close,

            activeSubIds,
            pinnedSubIds,

            openSubId,
            closeSubId,
            togglePinnedSubId,
        }),
        [
            state,
            close,
            activeSubIds,
            pinnedSubIds,
            openSubId,
            closeSubId,
            togglePinnedSubId,
        ],
    );

    return (
        <ContextMenuContext.Provider value={value}>
            {children}
        </ContextMenuContext.Provider>
    );
};

const ContextMenuTrigger = ({
    children,
    disabled = false,
    className,
    onContextMenu,
    ...props
}: ContextMenuTriggerProps) => {
    const { setState } = useContextMenu();

    return (
        <div
            {...props}
            className={className}
            onContextMenu={(event) => {
                onContextMenu?.(event);

                if (event.defaultPrevented || disabled) {
                    return;
                }

                event.preventDefault();

                setState({
                    open: true,
                    x: event.clientX,
                    y: event.clientY,
                });
            }}
        >
            {children}
        </div>
    );
};

const ContextMenuContent = ({
    children,
    className,
    style,
    ...props
}: ContextMenuContentProps) => {
    const { state, close } = useContextMenu();
    const contentRef = useRef<HTMLDivElement>(null);
    const portalContainer = usePortalContainer();

    useEffect(() => {
        if (!state.open) return;

        const frameId = requestAnimationFrame(() => {
            const node = contentRef.current;

            if (!node) return;

            const rect = node.getBoundingClientRect();

            const maxX =
                window.innerWidth - rect.width - CONTEXT_MENU_VIEWPORT_PADDING;

            const maxY =
                window.innerHeight -
                rect.height -
                CONTEXT_MENU_VIEWPORT_PADDING;

            const nextX = Math.min(
                Math.max(CONTEXT_MENU_VIEWPORT_PADDING, state.x),
                Math.max(CONTEXT_MENU_VIEWPORT_PADDING, maxX),
            );

            const nextY = Math.min(
                Math.max(CONTEXT_MENU_VIEWPORT_PADDING, state.y),
                Math.max(CONTEXT_MENU_VIEWPORT_PADDING, maxY),
            );

            node.style.left = `${nextX}px`;
            node.style.top = `${nextY}px`;
            node.style.visibility = "visible";
        });

        return () => {
            cancelAnimationFrame(frameId);
        };
    }, [state.open, state.x, state.y]);

    useEffect(() => {
        if (!state.open) return;

        const handlePointerDown = (event: PointerEvent) => {
            if (!contentRef.current?.contains(event.target as Node)) {
                close();
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                close();
            }
        };

        window.addEventListener("pointerdown", handlePointerDown);
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("pointerdown", handlePointerDown);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [state.open, close]);

    if (!state.open || !portalContainer) {
        return null;
    }

    return createPortal(
        <div
            {...props}
            ref={contentRef}
            role="menu"
            className={cn(
                "fixed z-50 min-w-44 rounded-xl border border-main-700 bg-main-900 p-1 shadow-2xl shadow-black/30",
                className,
            )}
            style={{
                ...style,
                left: state.x,
                top: state.y,
                visibility: "hidden",
            }}
        >
            {children}
        </div>,
        portalContainer,
    );
};

const ContextMenuItem = ({
    children,
    inset = false,
    variant = "default",
    leftSlot,
    rightSlot,
    className,
    onClick,
    disabled,
    ...props
}: ContextMenuItemProps) => {
    const { close } = useContextMenu();

    return (
        <button
            {...props}
            type="button"
            role="menuitem"
            disabled={disabled}
            className={cn(
                "flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-sm transition-colors duration-150",
                inset && "pl-8",
                variant === "default" &&
                    "text-main-200 hover:bg-main-800 hover:text-main-100",
                variant === "danger" &&
                    "text-red-300 hover:bg-red-500/10 hover:text-red-200",
                disabled && "cursor-not-allowed opacity-50",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main-300/50",
                className,
            )}
            onClick={(event) => {
                onClick?.(event);

                if (!event.defaultPrevented) {
                    close();
                }
            }}
        >
            {leftSlot && (
                <span className="shrink-0 text-main-400">{leftSlot}</span>
            )}

            <span className="min-w-0 flex-1 truncate">{children}</span>

            {rightSlot && (
                <span className="shrink-0 text-main-500">{rightSlot}</span>
            )}
        </button>
    );
};

const ContextMenuSeparator = ({
    className,
    ...props
}: ContextMenuSeparatorProps) => {
    return (
        <div
            {...props}
            role="separator"
            className={cn("my-1 h-px bg-main-700", className)}
        />
    );
};

type ContextMenuSubContextValue = {
    subId: string;
    depth: number;
    open: boolean;
    pinned: boolean;
    openSub: () => void;
    scheduleClose: () => void;
    togglePinned: () => void;
};

const ContextMenuSubContext = createContext<ContextMenuSubContextValue | null>(
    null,
);

const useContextMenuSub = () => {
    const context = useContext(ContextMenuSubContext);

    if (!context) {
        throw new Error(
            "ContextMenu.SubTrigger and ContextMenu.SubContent must be used inside <ContextMenu.Sub />",
        );
    }

    return context;
};

const ContextMenuSub = ({
    children,
    fixable = false,
    closeDelay = 140,
    className,
}: ContextMenuSubProps) => {
    const subId = useId();

    const {
        activeSubIds,
        pinnedSubIds,
        openSubId,
        closeSubId,
        togglePinnedSubId,
    } = useContextMenu();

    const parentSub = useContext(ContextMenuSubContext);
    const depth = parentSub ? parentSub.depth + 1 : 0;

    const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const open = activeSubIds[depth] === subId;
    const pinned = pinnedSubIds[depth] === subId;

    const clearCloseTimeout = useCallback(() => {
        if (!closeTimeoutRef.current) return;

        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
    }, []);

    const openSub = useCallback(() => {
        clearCloseTimeout();

        if (pinnedSubIds[depth] && pinnedSubIds[depth] !== subId) {
            return;
        }

        openSubId(subId, depth);
    }, [clearCloseTimeout, pinnedSubIds, depth, subId, openSubId]);

    const scheduleClose = useCallback(() => {
        clearCloseTimeout();

        if (pinned) return;

        closeTimeoutRef.current = setTimeout(() => {
            closeSubId(subId, depth);
        }, closeDelay);
    }, [clearCloseTimeout, pinned, closeDelay, closeSubId, subId, depth]);

    const togglePinned = useCallback(() => {
        clearCloseTimeout();

        if (!fixable) {
            if (open) {
                closeSubId(subId, depth);
            } else {
                openSubId(subId, depth);
            }

            return;
        }

        togglePinnedSubId(subId, depth);
    }, [
        clearCloseTimeout,
        fixable,
        open,
        openSubId,
        closeSubId,
        togglePinnedSubId,
        subId,
        depth,
    ]);

    useEffect(() => {
        return () => {
            clearCloseTimeout();
        };
    }, [clearCloseTimeout]);

    const value = useMemo(
        () => ({
            subId,
            depth,
            open,
            pinned,
            openSub,
            scheduleClose,
            togglePinned,
        }),
        [subId, depth, open, pinned, openSub, scheduleClose, togglePinned],
    );

    return (
        <ContextMenuSubContext.Provider value={value}>
            <div
                className={cn("relative", className)}
                onPointerEnter={openSub}
                onPointerLeave={scheduleClose}
            >
                {children}
            </div>
        </ContextMenuSubContext.Provider>
    );
};

const ContextMenuSubTrigger = ({
    children,
    inset = false,
    leftSlot,
    rightSlot,
    className,
    disabled,
    onClick,
    ...props
}: ContextMenuSubTriggerProps) => {
    const { open, pinned, openSub, togglePinned } = useContextMenuSub();

    return (
        <button
            {...props}
            type="button"
            role="menuitem"
            aria-haspopup="menu"
            aria-expanded={open}
            disabled={disabled}
            className={cn(
                "flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-sm transition-colors duration-150",
                "text-main-200 hover:bg-main-800 hover:text-main-100",
                open && "bg-main-800 text-main-100",
                inset && "pl-8",
                disabled && "cursor-not-allowed opacity-50",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main-300/50",
                className,
            )}
            onClick={(event) => {
                onClick?.(event);

                if (!event.defaultPrevented) {
                    togglePinned();
                }
            }}
            onFocus={openSub}
            onPointerEnter={openSub}
        >
            {leftSlot && (
                <span className="shrink-0 text-main-400">{leftSlot}</span>
            )}

            <span className="min-w-0 flex-1 truncate">{children}</span>

            {rightSlot ?? (
                <span
                    className={cn(
                        "shrink-0 text-main-500 transition-transform duration-150",
                        open && "translate-x-0.5 text-main-300",
                        pinned && "text-main-100",
                    )}
                >
                    ›
                </span>
            )}
        </button>
    );
};

const ContextMenuSubContent = ({
    children,
    className,
    sideOffset = 6,
    style,
    onPointerEnter,
    ...props
}: ContextMenuSubContentProps) => {
    const { open, openSub } = useContextMenuSub();

    if (!open) {
        return null;
    }

    return (
        <>
            <div
                aria-hidden="true"
                className="absolute top-0 z-40 h-full"
                style={{
                    left: "100%",
                    width: sideOffset,
                }}
                onPointerEnter={openSub}
            />

            <div
                {...props}
                role="menu"
                className={cn(
                    "absolute top-0 z-50 min-w-44 rounded-xl border border-main-700 bg-main-900 p-1 shadow-2xl shadow-black/30",
                    className,
                )}
                style={{
                    left: `calc(100% + ${sideOffset}px)`,
                    ...style,
                }}
                onPointerEnter={(event) => {
                    openSub();
                    onPointerEnter?.(event);
                }}
            >
                {children}
            </div>
        </>
    );
};

export const ContextMenu = Object.assign(ContextMenuRoot, {
    Trigger: ContextMenuTrigger,
    Content: ContextMenuContent,
    Item: ContextMenuItem,
    Separator: ContextMenuSeparator,

    Sub: ContextMenuSub,
    SubTrigger: ContextMenuSubTrigger,
    SubContent: ContextMenuSubContent,
});

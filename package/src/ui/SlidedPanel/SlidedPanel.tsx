import {
    createContext,
    useContext,
    useEffect,
    type KeyboardEvent as ReactKeyboardEvent,
    type MouseEvent,
} from "react";
import { createPortal } from "react-dom";
import { Icon } from "@iconify/react";
import { cn } from "../../lib/utils";
import { usePortalContainer } from "../../hooks/usePortalContainer";
import type {
    SlidedPanelProps,
    SlidedPanelHeaderProps,
    SlidedPanelTitleProps,
    SlidedPanelSubtitleProps,
    SlidedPanelContentProps,
    SlidedPanelFooterProps,
    SlidedPanelContextValue,
    SlidedPanelPlacement,
} from "./types";

const overlayPlacementClasses: Record<SlidedPanelPlacement, string> = {
    top: "items-start",
    right: "justify-end",
    bottom: "items-end",
    left: "justify-start",
};

const panelPlacementClasses: Record<SlidedPanelPlacement, string> = {
    top: "h-96 w-full border-b border-main-600/70 shadow-[0_16px_60px_rgba(0,0,0,0.5)]",
    right: "h-full w-96 border-l border-main-600/70 shadow-[-16px_0_60px_rgba(0,0,0,0.5)]",
    bottom: "h-96 w-full border-t border-main-600/70 shadow-[0_-16px_60px_rgba(0,0,0,0.5)]",
    left: "h-full w-96 border-r border-main-600/70 shadow-[16px_0_60px_rgba(0,0,0,0.5)]",
};

const closedPlacementClasses: Record<SlidedPanelPlacement, string> = {
    top: "-translate-y-full",
    right: "translate-x-full",
    bottom: "translate-y-full",
    left: "-translate-x-full",
};

const openPlacementClasses: Record<SlidedPanelPlacement, string> = {
    top: "translate-y-0",
    right: "translate-x-0",
    bottom: "translate-y-0",
    left: "translate-x-0",
};

const SlidedPanelContext = createContext<SlidedPanelContextValue | null>(null);

function useSlidedPanelContext() {
    const context = useContext(SlidedPanelContext);

    if (!context) {
        throw new Error(
            "SlidedPanel.Header, SlidedPanel.Title, SlidedPanel.Subtitle, SlidedPanel.Content и SlidedPanel.Footer должны использоваться внутри SlidedPanel.",
        );
    }

    return context;
}

function SlidedPanelRoot({
    open,
    onClose,
    children,
    className,
    closeOnOverlayClick = true,
    panelPlacement = "right",
}: SlidedPanelProps) {
    const portalContainer = usePortalContainer();

    useEffect(() => {
        if (!open) return;

        const onEscape = (event: globalThis.KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", onEscape);
        return () => window.removeEventListener("keydown", onEscape);
    }, [open, onClose]);

    const onOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
        if (closeOnOverlayClick && event.target === event.currentTarget) {
            onClose();
        }
    };

    const onOverlayKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
        if (
            closeOnOverlayClick &&
            (event.key === "Enter" || event.key === " ") &&
            event.target === event.currentTarget
        ) {
            event.preventDefault();
            onClose();
        }
    };

    if (!portalContainer) {
        return null;
    }

    return createPortal(
        <SlidedPanelContext.Provider value={{ open, onClose }}>
            <div
                className={cn(
                    "fixed inset-0 z-50 flex bg-black/60 backdrop-blur-sm transition-opacity duration-260",
                    overlayPlacementClasses[panelPlacement],
                    open
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none opacity-0",
                )}
                onClick={onOverlayClick}
                onKeyDown={onOverlayKeyDown}
                tabIndex={-1}
                aria-modal
                role="dialog"
                aria-hidden={!open}
            >
                <section
                    className={cn(
                        "flex flex-col overflow-hidden bg-main-900/95 backdrop-blur-md",
                        "transition-all duration-260 ease-out",
                        panelPlacementClasses[panelPlacement],
                        open
                            ? cn(
                                  openPlacementClasses[panelPlacement],
                                  "opacity-100",
                              )
                            : cn(
                                  closedPlacementClasses[panelPlacement],
                                  "opacity-0",
                              ),
                        className,
                    )}
                >
                    {children}
                </section>
            </div>
        </SlidedPanelContext.Provider>,
        portalContainer,
    );
}

function SlidedPanelHeader({
    className,
    children,
    ...props
}: SlidedPanelHeaderProps) {
    const { onClose } = useSlidedPanelContext();

    return (
        <header
            className={cn(
                "flex items-center justify-between border-b border-main-700/70 bg-linear-to-r from-main-800/70 via-main-800/45 to-main-900/35 px-4 py-3",
                className,
            )}
            {...props}
        >
            <div className="min-w-0 flex-1">{children}</div>

            <button
                type="button"
                aria-label="Закрыть панель"
                className="ml-3 shrink-0 rounded-md p-1 text-main-300 transition-colors hover:bg-main-700/70 hover:text-main-100"
                onClick={onClose}
            >
                <Icon icon="mdi:close" width={18} height={18} />
            </button>
        </header>
    );
}

function SlidedPanelTitle({
    className,
    children,
    ...props
}: SlidedPanelTitleProps) {
    return (
        <p
            className={cn(
                "truncate text-base font-semibold text-main-100",
                className,
            )}
            {...props}
        >
            {children}
        </p>
    );
}

function SlidedPanelSubtitle({
    className,
    children,
    ...props
}: SlidedPanelSubtitleProps) {
    return (
        <p
            className={cn("truncate text-xs text-main-400", className)}
            {...props}
        >
            {children}
        </p>
    );
}

function SlidedPanelContent({
    className,
    children,
    ...props
}: SlidedPanelContentProps) {
    return (
        <div className={cn("min-h-0 flex-1 p-4", className)} {...props}>
            {children}
        </div>
    );
}

function SlidedPanelFooter({
    className,
    children,
    ...props
}: SlidedPanelFooterProps) {
    return (
        <footer
            className={cn("border-t border-main-700/70 px-4 py-3", className)}
            {...props}
        >
            {children}
        </footer>
    );
}

export const SlidedPanel = Object.assign(SlidedPanelRoot, {
    Header: SlidedPanelHeader,
    Title: SlidedPanelTitle,
    Subtitle: SlidedPanelSubtitle,
    Content: SlidedPanelContent,
    Footer: SlidedPanelFooter,
});

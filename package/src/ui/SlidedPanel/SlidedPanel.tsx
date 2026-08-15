import styles from "./SlidedPanel.module.css";
import {
    createContext,
    useContext,
    useEffect,
    type KeyboardEvent as ReactKeyboardEvent,
    type MouseEvent,
} from "react";
import { createPortal } from "react-dom";
import { Icon } from "../_shared/icons";
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
    top: styles.s0,
    right: styles.s1,
    bottom: styles.s2,
    left: styles.s3,
};

const panelPlacementClasses: Record<SlidedPanelPlacement, string> = {
    top: styles.s4,
    right: styles.s5,
    bottom: styles.s6,
    left: styles.s7,
};

const closedPlacementClasses: Record<SlidedPanelPlacement, string> = {
    top: styles.s8,
    right: styles.s9,
    bottom: styles.s10,
    left: styles.s11,
};

const openPlacementClasses: Record<SlidedPanelPlacement, string> = {
    top: styles.s12,
    right: styles.s13,
    bottom: styles.s14,
    left: styles.s15,
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
                    styles.s16,
                    overlayPlacementClasses[panelPlacement],
                    open
                        ? styles.s17
                        : styles.s18,
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
                        styles.s19,
                        styles.s20,
                        panelPlacementClasses[panelPlacement],
                        open
                            ? cn(
                                  openPlacementClasses[panelPlacement],
                                  styles.s21,
                              )
                            : cn(
                                  closedPlacementClasses[panelPlacement],
                                  styles.s22,
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
                styles.s23,
                className,
            )}
            {...props}
        >
            <div className={styles.s24}>{children}</div>

            <button
                type="button"
                aria-label="Закрыть панель"
                className={styles.s25}
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
                styles.s26,
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
            className={cn(styles.s27, className)}
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
        <div className={cn(styles.s28, className)} {...props}>
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
            className={cn(styles.s29, className)}
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

import styles from "./Modal.module.css";
import {
    createContext,
    useEffect,
    useContext,
    type KeyboardEvent as ReactKeyboardEvent,
    type MouseEvent,
} from "react";
import { createPortal } from "react-dom";
import { Icon } from "../_shared/icons";
import { Button } from "../Button/Button";
import { ScrollArea } from "../ScrollArea/ScrollArea";
import { cn } from "../../lib/utils";
import { usePortalContainer } from "../../hooks/usePortalContainer";
import type { ModalProps, ModalSectionProps, ModalHeaderProps } from "./types";

const ModalContext = createContext<{ onClose: () => void } | null>(null);

function ModalHeader({
    children,
    className,
    closeButtonClassName,
    closeButtonAriaLabel = "Закрыть окно",
    showCloseButton = true,
}: ModalHeaderProps) {
    const modalContext = useContext(ModalContext);

    return (
        <div
            className={cn(
                styles.s0,
                className,
            )}
        >
            <div className={styles.s1}>{children}</div>

            {showCloseButton && (
                <Button
                    variant="secondary"
                    className={cn(
                        styles.s2,
                        closeButtonClassName,
                    )}
                    onClick={modalContext?.onClose}
                    aria-label={closeButtonAriaLabel}
                >
                    <Icon icon="mdi:close" width="16" height="16" />
                </Button>
            )}
        </div>
    );
}

function ModalContent({ children, className }: ModalSectionProps) {
    return (
        <ScrollArea className={cn(styles.s3, className)}>
            {children}
        </ScrollArea>
    );
}

function ModalFooter({ children, className }: ModalSectionProps) {
    return (
        <div
            className={cn(
                styles.s4,
                className,
            )}
        >
            {children}
        </div>
    );
}

function ModalRoot({
    open,
    onClose,
    className,
    overlayClassName,
    children,
    closeOnOverlayClick = true,
    rounded = "rounded-lg",
}: ModalProps) {
    const portalContainer = usePortalContainer();

    useEffect(() => {
        if (!open) {
            return;
        }

        const onEscape = (event: globalThis.KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", onEscape);
        return () => window.removeEventListener("keydown", onEscape);
    }, [open, onClose]);

    if (!open || !portalContainer) {
        return null;
    }

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

    return createPortal(
        <div
            className={cn(
                styles.s5,
                overlayClassName,
            )}
            onClick={onOverlayClick}
            onKeyDown={onOverlayKeyDown}
            tabIndex={-1}
            aria-modal
            role="dialog"
        >
            <ModalContext.Provider value={{ onClose }}>
                <div
                    className={cn(
                        styles.s6,
                        `zvs-${rounded}`,
                        styles.s7,
                        className,
                    )}
                >
                    {children}
                </div>
            </ModalContext.Provider>
        </div>,
        portalContainer,
    );
}

export const Modal = Object.assign(ModalRoot, {
    Header: ModalHeader,
    Content: ModalContent,
    Footer: ModalFooter,
});

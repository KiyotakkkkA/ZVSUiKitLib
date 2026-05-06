import {
    createContext,
    useEffect,
    useContext,
    type KeyboardEvent as ReactKeyboardEvent,
    type MouseEvent,
} from "react";
import { createPortal } from "react-dom";
import { Icon } from "@iconify/react";
import { Button } from "../Button/Button";
import { ScrollArea } from "../ScrollArea/ScrollArea";
import { cn } from "../../lib/utils";
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
                "flex items-center gap-3 border-b border-main-700/80 px-5 py-4",
                className,
            )}
        >
            <div className="min-w-0 flex-1">{children}</div>

            {showCloseButton && (
                <Button
                    variant="secondary"
                    className={cn(
                        "h-8 w-8 border-main-600 bg-main-700/70 hover:bg-main-600/80",
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
        <ScrollArea className={cn("min-h-0 flex-1 px-5 py-5", className)}>
            {children}
        </ScrollArea>
    );
}

function ModalFooter({ children, className }: ModalSectionProps) {
    return (
        <div
            className={cn(
                "flex items-center justify-end gap-2 border-t border-main-700/80 px-5 py-4",
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
}: ModalProps) {
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

    if (!open) {
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
                "fixed inset-0 z-50 flex animate-in items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm fade-in duration-200",
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
                        "flex max-h-[88vh] w-full max-w-5xl flex-col rounded-2xl border border-main-700/90",
                        "bg-main-900/95 shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-2 duration-220",
                        className,
                    )}
                >
                    {children}
                </div>
            </ModalContext.Provider>
        </div>,
        document.body,
    );
}

export const Modal = Object.assign(ModalRoot, {
    Header: ModalHeader,
    Content: ModalContent,
    Footer: ModalFooter,
});

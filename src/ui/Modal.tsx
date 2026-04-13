import {
    useEffect,
    type PropsWithChildren,
    type ReactNode,
    type KeyboardEvent as ReactKeyboardEvent,
    type MouseEvent,
} from "react";
import { createPortal } from "react-dom";
import { Icon } from "@iconify/react";
import { Button } from "./Button";
import { ScrollArea } from "./ScrollArea";
import { cn } from "../lib/utils";

type ModalProps = PropsWithChildren<{
    open: boolean;
    title: ReactNode;
    onClose: () => void;
    footer?: ReactNode;
    className?: string;
    classNames?: {
        overlay?: string;
        content?: string;
        header?: string;
        title?: string;
        closeButton?: string;
        body?: string;
        footer?: string;
    };
    closeOnOverlayClick?: boolean;
}>;

export function Modal({
    open,
    title,
    onClose,
    footer,
    className,
    classNames,
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
                classNames?.overlay,
            )}
            onClick={onOverlayClick}
            onKeyDown={onOverlayKeyDown}
            tabIndex={-1}
            aria-modal
            role="dialog"
        >
            <div
                className={cn(
                    "flex max-h-[88vh] w-full max-w-5xl flex-col rounded-2xl border border-main-700/90",
                    "bg-main-900/95 shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-2 duration-220",
                    classNames?.content,
                    className,
                )}
            >
                <div
                    className={cn(
                        "flex items-center justify-between border-b border-main-700/80 px-5 py-4",
                        classNames?.header,
                    )}
                >
                    <h3
                        className={cn(
                            "text-base font-semibold text-main-100",
                            classNames?.title,
                        )}
                    >
                        {title}
                    </h3>
                    <Button
                        variant="secondary"
                        className={cn(
                            "h-8 w-8 border-main-600 bg-main-700/70 hover:bg-main-600/80",
                            classNames?.closeButton,
                        )}
                        onClick={onClose}
                        aria-label="Закрыть окно"
                    >
                        <Icon icon="mdi:close" width="16" height="16" />
                    </Button>
                </div>

                <ScrollArea
                    className={cn("min-h-0 flex-1 px-5 py-5", classNames?.body)}
                >
                    {children}
                </ScrollArea>

                {footer && (
                    <div
                        className={cn(
                            "flex items-center justify-end gap-2 border-t border-main-700/80 px-5 py-4",
                            classNames?.footer,
                        )}
                    >
                        {footer}
                    </div>
                )}
            </div>
        </div>,
        document.body,
    );
}

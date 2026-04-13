import {
    useEffect,
    type PropsWithChildren,
    type ReactNode,
    type KeyboardEvent as ReactKeyboardEvent,
    type MouseEvent,
} from "react";
import { createPortal } from "react-dom";
import { Icon } from "@iconify/react";
import { cn } from "../lib/utils";

type SlidedPanelProps = PropsWithChildren<{
    open: boolean;
    title: ReactNode;
    subtitle?: ReactNode;
    onClose: () => void;
    className?: string;
    classNames?: {
        overlay?: string;
        panel?: string;
        width?: string;
        header?: string;
        title?: string;
        subtitle?: string;
        closeButton?: string;
        content?: string;
    };
    closeOnOverlayClick?: boolean;
}>;

export function SlidedPanel({
    open,
    title,
    subtitle,
    onClose,
    children,
    className,
    classNames,
    closeOnOverlayClick = true,
}: SlidedPanelProps) {
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
                "fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm transition-opacity duration-260",
                open
                    ? "pointer-events-auto opacity-100"
                    : "pointer-events-none opacity-0",
                classNames?.overlay,
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
                    "flex h-full flex-col overflow-hidden border-l border-main-600/70 transition-all duration-260 ease-out",
                    "bg-main-900/95 shadow-[-16px_0_60px_rgba(0,0,0,0.5)] backdrop-blur-md",
                    open
                        ? "translate-x-0 opacity-100"
                        : "translate-x-full opacity-0",
                    classNames?.width ?? "w-96",
                    classNames?.panel,
                    className,
                )}
            >
                <header
                    className={cn(
                        "flex items-center justify-between border-b border-main-700/70 bg-linear-to-r from-main-800/70 via-main-800/45 to-main-900/35 px-4 py-3",
                        classNames?.header,
                    )}
                >
                    <div className="min-w-0">
                        <p
                            className={cn(
                                "truncate text-base font-semibold text-main-100",
                                classNames?.title,
                            )}
                        >
                            {title}
                        </p>
                        {subtitle && (
                            <p
                                className={cn(
                                    "truncate text-xs text-main-400",
                                    classNames?.subtitle,
                                )}
                            >
                                {subtitle}
                            </p>
                        )}
                    </div>

                    <button
                        type="button"
                        aria-label="Закрыть панель"
                        className={cn(
                            "rounded-md p-1 text-main-300 transition-colors hover:bg-main-700/70 hover:text-main-100",
                            classNames?.closeButton,
                        )}
                        onClick={onClose}
                    >
                        <Icon icon="mdi:close" width={18} height={18} />
                    </button>
                </header>

                <div className={cn("min-h-0 flex-1 p-4", classNames?.content)}>
                    {children}
                </div>
            </section>
        </div>,
        document.body,
    );
}

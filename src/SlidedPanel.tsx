import {
    useEffect,
    type PropsWithChildren,
    type ReactNode,
    type KeyboardEvent as ReactKeyboardEvent,
    type MouseEvent,
} from "react";
import { createPortal } from "react-dom";
import { Icon } from "@iconify/react";
import { cn } from "./lib/utils";

type SlidedPanelProps = PropsWithChildren<{
    open: boolean;
    title: ReactNode;
    subtitle?: ReactNode;
    onClose: () => void;
    closeOnOverlayClick?: boolean;
    classes?: {
        width?: string;
        main?: string;
        content?: string;
    };
}>;

export function SlidedPanel({
    open,
    title,
    subtitle,
    onClose,
    children,
    classes: {
        width: widthClassName = "w-96",
        main: className,
        content: bodyClassName,
    } = {},
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

    if (!open) {
        return null;
    }

    const onOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget && closeOnOverlayClick) {
            onClose();
        }
    };

    const onOverlayKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
        if (!closeOnOverlayClick) {
            return;
        }

        if (event.key === "Enter" || event.key === " ") {
            if (event.target === event.currentTarget) {
                event.preventDefault();
                onClose();
            }
        }
    };

    return createPortal(
        <div
            className="fixed inset-0 z-50 flex animate-in justify-end bg-black/60 backdrop-blur-sm fade-in duration-200"
            onClick={onOverlayClick}
            onKeyDown={onOverlayKeyDown}
            tabIndex={-1}
            aria-modal
            role="dialog"
        >
            <section
                className={cn(
                    "flex h-full flex-col overflow-hidden border-l border-main-600/70",
                    "bg-main-900/95 shadow-[-16px_0_60px_rgba(0,0,0,0.5)] backdrop-blur-md",
                    "animate-in slide-in-from-right duration-200",
                    widthClassName,
                    className,
                )}
            >
                <header className="flex items-center justify-between border-b border-main-700/70 bg-linear-to-r from-main-800/70 via-main-800/45 to-main-900/35 px-4 py-3">
                    <div className="min-w-0">
                        <p className="truncate text-base font-semibold text-main-100">
                            {title}
                        </p>
                        {subtitle ? (
                            <p className="truncate text-xs text-main-400">
                                {subtitle}
                            </p>
                        ) : null}
                    </div>

                    <button
                        type="button"
                        aria-label="Закрыть панель"
                        className="rounded-md p-1 text-main-300 transition-colors hover:bg-main-700/70 hover:text-main-100"
                        onClick={onClose}
                    >
                        <Icon icon="mdi:close" width={18} height={18} />
                    </button>
                </header>

                <div className={cn("min-h-0 flex-1 p-4", bodyClassName)}>
                    {children}
                </div>
            </section>
        </div>,
        document.body,
    );
}

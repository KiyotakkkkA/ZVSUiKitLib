import {
    createContext,
    useContext,
    useEffect,
    useId,
    useState,
    type MouseEvent,
} from "react";
import { createPortal } from "react-dom";
import { Icon } from "../_shared/icons";
import { Button } from "../Button/Button";
import { ScrollArea } from "../ScrollArea/ScrollArea";
import { cn, mergeRefs } from "../../lib/utils";
import { usePortalContainer } from "../../hooks/usePortalContainer";
import { useDialog } from "../../hooks/useDialog";
import { useLocale } from "../../hooks/useLocale";
import type { ModalProps, ModalSectionProps, ModalHeaderProps } from "./types";

type ModalContextValue = {
    onClose: () => void;
    titleId: string;
    registerTitle: (registered: boolean) => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

function ModalHeader({
    children,
    className,
    closeButtonClassName,
    closeButtonAriaLabel,
    showCloseButton = true,
}: ModalHeaderProps) {
    const t = useLocale().modal;
    const modalContext = useContext(ModalContext);
    const registerTitle = modalContext?.registerTitle;

    useEffect(() => {
        if (!registerTitle) return;

        registerTitle(true);
        return () => registerTitle(false);
    }, [registerTitle]);

    return (
        <div
            className={cn(
                "flex items-center gap-3 border-b border-main-700/80 px-5 py-4",
                className,
            )}
        >
            <div className={"min-w-0 flex-1"} id={modalContext?.titleId}>
                {children}
            </div>

            {showCloseButton && (
                <Button
                    variant="secondary"
                    className={cn(
                        "h-8 w-8 border-main-600 bg-main-700/70 hover:bg-main-600/80",
                        closeButtonClassName,
                    )}
                    onClick={modalContext?.onClose}
                    aria-label={closeButtonAriaLabel ?? t.close}
                >
                    <Icon icon="close" width="16" height="16" />
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
    closeOnEscape = true,
    label,
    ref,
    rounded = "rounded-4xl",
}: ModalProps) {
    const portalContainer = usePortalContainer();
    const titleId = useId();
    const [hasTitle, setHasTitle] = useState(false);
    const panelRef = useDialog<HTMLDivElement>({
        open,
        onClose,
        closeOnEscape,
    });

    if (!open || !portalContainer) {
        return null;
    }

    const onOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
        if (closeOnOverlayClick && event.target === event.currentTarget) {
            onClose();
        }
    };

    return createPortal(
        <div
            className={cn(
                "fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm animate-zvs-fade-in motion-reduce:animate-none",
                overlayClassName,
            )}
            onClick={onOverlayClick}
        >
            <ModalContext.Provider
                value={{ onClose, titleId, registerTitle: setHasTitle }}
            >
                <div
                    ref={mergeRefs(panelRef, ref)}
                    role="dialog"
                    aria-modal
                    aria-label={hasTitle ? undefined : label}
                    aria-labelledby={hasTitle ? titleId : undefined}
                    tabIndex={-1}
                    className={cn(
                        "flex max-h-[88vh] w-full max-w-5xl flex-col border border-main-700/90",
                        rounded,
                        "bg-main-900/95 shadow-2xl animate-zvs-panel-in motion-reduce:animate-none",
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

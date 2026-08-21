import styles from "./Modal.module.css";
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
    closeButtonAriaLabel = "Закрыть окно",
    showCloseButton = true,
}: ModalHeaderProps) {
    const modalContext = useContext(ModalContext);
    const registerTitle = modalContext?.registerTitle;

    useEffect(() => {
        if (!registerTitle) return;

        registerTitle(true);
        return () => registerTitle(false);
    }, [registerTitle]);

    return (
        <div className={cn(styles.s0, className)}>
            <div className={styles.s1} id={modalContext?.titleId}>
                {children}
            </div>

            {showCloseButton && (
                <Button
                    variant="secondary"
                    className={cn(styles.s2, closeButtonClassName)}
                    onClick={modalContext?.onClose}
                    aria-label={closeButtonAriaLabel}
                >
                    <Icon icon="close" width="16" height="16" />
                </Button>
            )}
        </div>
    );
}

function ModalContent({ children, className }: ModalSectionProps) {
    return (
        <ScrollArea className={cn(styles.s3, className)}>{children}</ScrollArea>
    );
}

function ModalFooter({ children, className }: ModalSectionProps) {
    return <div className={cn(styles.s4, className)}>{children}</div>;
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
            className={cn(styles.s5, overlayClassName)}
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

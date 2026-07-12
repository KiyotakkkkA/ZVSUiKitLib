import type { PropsWithChildren } from "react";
import type { ButtonClassName, DivClassName } from "../_shared/types";

export type ModalProps = PropsWithChildren<{
    open: boolean;
    onClose: () => void;
    className?: DivClassName;
    overlayClassName?: DivClassName;
    closeOnOverlayClick?: boolean;
}>;

export type ModalSectionProps = PropsWithChildren<{
    className?: DivClassName;
}>;

export type ModalHeaderProps = ModalSectionProps & {
    closeButtonClassName?: ButtonClassName;
    closeButtonAriaLabel?: string;
    showCloseButton?: boolean;
};

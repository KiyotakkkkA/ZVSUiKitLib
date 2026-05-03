import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";

export type ModalProps = PropsWithChildren<{
    open: boolean;
    onClose: () => void;
    className?: ComponentPropsWithoutRef<"div">["className"];
    overlayClassName?: ComponentPropsWithoutRef<"div">["className"];
    closeOnOverlayClick?: boolean;
}>;

export type ModalSectionProps = PropsWithChildren<{
    className?: ComponentPropsWithoutRef<"div">["className"];
}>;

export type ModalHeaderProps = ModalSectionProps & {
    closeButtonClassName?: ComponentPropsWithoutRef<"button">["className"];
    closeButtonAriaLabel?: string;
    showCloseButton?: boolean;
};

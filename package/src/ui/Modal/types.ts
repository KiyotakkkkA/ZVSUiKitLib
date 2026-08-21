import type { PropsWithChildren, Ref } from "react";
import type {
    ButtonClassName,
    DivClassName,
    RoundVariants,
} from "../_shared/types";

export type ModalProps = PropsWithChildren<{
    /** Receives the dialog panel element. */
    ref?: Ref<HTMLDivElement>;
    /** Whether open is enabled. */
    open: boolean;
    /** Callback invoked when close occurs. */
    onClose: () => void;
    /** CSS classes applied to the root element. */
    className?: DivClassName;
    /** CSS classes applied to the overlay element. */
    overlayClassName?: DivClassName;
    /** Function used to close on overlay click. */
    closeOnOverlayClick?: boolean;
    /** Whether the Escape key closes the modal. */
    closeOnEscape?: boolean;
    /** Accessible name used when the modal renders no `Modal.Header`. */
    label?: string;
    /** The border-radius preset applied to the component. */
    rounded?: RoundVariants | "";
}>;

export type ModalSectionProps = PropsWithChildren<{
    /** CSS classes applied to the root element. */
    className?: DivClassName;
}>;

export type ModalHeaderProps = ModalSectionProps & {
    /** CSS classes applied to the close button element. */
    closeButtonClassName?: ButtonClassName;
    /** Function used to close button aria label. */
    closeButtonAriaLabel?: string;
    /** Whether show close button is enabled. */
    showCloseButton?: boolean;
};

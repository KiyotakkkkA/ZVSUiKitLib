import type { HTMLAttributes, PropsWithChildren } from "react";

export type SlidedPanelPlacement = "top" | "right" | "bottom" | "left";

export type SlidedPanelProps = PropsWithChildren<{
    /** Whether open is enabled. */
    open: boolean;
    /** Callback invoked when close occurs. */
    onClose: () => void;
    /** Function used to close on overlay click. */
    closeOnOverlayClick?: boolean;
    /** Whether the Escape key closes the panel. */
    closeOnEscape?: boolean;
    /** Accessible name used when the panel renders no `SlidedPanel.Title`. */
    label?: string;
    /** The screen edge from which the panel opens. */
    panelPlacement?: SlidedPanelPlacement;
    /** CSS classes applied to the root element. */
    className?: HTMLAttributes<HTMLElement>["className"];
}>;

export type SlidedPanelHeaderProps = HTMLAttributes<HTMLElement>;
export type SlidedPanelTitleProps = HTMLAttributes<HTMLParagraphElement>;
export type SlidedPanelSubtitleProps = HTMLAttributes<HTMLParagraphElement>;
export type SlidedPanelContentProps = HTMLAttributes<HTMLDivElement>;
export type SlidedPanelFooterProps = HTMLAttributes<HTMLElement>;

export type SlidedPanelContextValue = {
    /** Whether open is enabled. */
    open: boolean;
    /** Callback invoked when close occurs. */
    onClose: () => void;
};

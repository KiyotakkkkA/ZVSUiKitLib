import type { HTMLAttributes, PropsWithChildren } from "react";

export type SlidedPanelPlacement = "top" | "right" | "bottom" | "left";

export type SlidedPanelProps = PropsWithChildren<{
    open: boolean;
    onClose: () => void;
    closeOnOverlayClick?: boolean;
    panelPlacement?: SlidedPanelPlacement;
    className?: HTMLAttributes<HTMLElement>["className"];
}>;

export type SlidedPanelHeaderProps = HTMLAttributes<HTMLElement>;
export type SlidedPanelTitleProps = HTMLAttributes<HTMLParagraphElement>;
export type SlidedPanelSubtitleProps = HTMLAttributes<HTMLParagraphElement>;
export type SlidedPanelContentProps = HTMLAttributes<HTMLDivElement>;
export type SlidedPanelFooterProps = HTMLAttributes<HTMLElement>;

export type SlidedPanelContextValue = {
    open: boolean;
    onClose: () => void;
};

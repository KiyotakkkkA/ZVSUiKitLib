import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type ResizablePanelOrientation = "horizontal" | "vertical";

export type ResizablePanelContextValue = {
    size: number;
    minSize: number;
    maxSize: number;
    defaultSize: number;
    keyboardStep: number;
    orientation: ResizablePanelOrientation;
    disabled: boolean;
    resizing: boolean;
    sidebarId: string;
    resizeTo: (size: number) => number;
    startResize: () => void;
    endResize: () => void;
};

export type ResizablePanelProps = ComponentPropsWithoutRef<"div"> & {
    children: ReactNode;
    /** Controlled primary panel size in pixels. */
    size?: number;
    /** Initial uncontrolled primary panel size in pixels. */
    defaultSize?: number;
    minSize?: number;
    maxSize?: number;
    orientation?: ResizablePanelOrientation;
    keyboardStep?: number;
    disabled?: boolean;
    onSizeChange?: (size: number) => void;
    onResizeStart?: (size: number) => void;
    onResizeEnd?: (size: number) => void;
};

export type ResizablePanelSidebarProps = ComponentPropsWithoutRef<"aside"> & {
    children: ReactNode;
};
export type ResizablePanelContentProps = ComponentPropsWithoutRef<"main"> & {
    children: ReactNode;
};
export type ResizablePanelHandleProps = ComponentPropsWithoutRef<"div"> & {
    "aria-label"?: string;
    /** Restores defaultSize when the handle is double-clicked. */
    resetOnDoubleClick?: boolean;
};

import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type ResizablePanelContextValue = {
    /** The current size of the resizable panel. */
    size: number;
    /** Function used to set size. */
    setSize: (size: number) => void;
    /** The minimum allowed size of the resizable panel. */
    minSize: number;
    /** The maximum allowed size of the resizable panel. */
    maxSize: number;
};

export type ResizablePanelProps = ComponentPropsWithoutRef<"div"> & {
    /** The content rendered inside the component. */
    children: ReactNode;
    /** The initial size of the resizable panel. */
    defaultSize?: number;
    /** The minimum allowed size of the resizable panel. */
    minSize?: number;
    /** The maximum allowed size of the resizable panel. */
    maxSize?: number;
};

export type ResizablePanelSidebarProps = ComponentPropsWithoutRef<"aside"> & {
    /** The content rendered inside the component. */
    children: ReactNode;
};

export type ResizablePanelContentProps = ComponentPropsWithoutRef<"main"> & {
    /** The content rendered inside the component. */
    children: ReactNode;
};

export type ResizablePanelHandleProps = ComponentPropsWithoutRef<"div">;

import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type ResizablePanelContextValue = {
    size: number;
    setSize: (size: number) => void;
    minSize: number;
    maxSize: number;
};

export type ResizablePanelProps = ComponentPropsWithoutRef<"div"> & {
    children: ReactNode;
    defaultSize?: number;
    minSize?: number;
    maxSize?: number;
};

export type ResizablePanelSidebarProps = ComponentPropsWithoutRef<"aside"> & {
    children: ReactNode;
};

export type ResizablePanelContentProps = ComponentPropsWithoutRef<"main"> & {
    children: ReactNode;
};

export type ResizablePanelHandleProps = ComponentPropsWithoutRef<"div">;

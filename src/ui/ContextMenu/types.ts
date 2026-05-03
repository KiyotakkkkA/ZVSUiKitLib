import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type ContextMenuState = {
    open: boolean;
    x: number;
    y: number;
};

export type ContextMenuProps = {
    children: ReactNode;
};

export type ContextMenuTriggerProps = ComponentPropsWithoutRef<"div"> & {
    children: ReactNode;
    disabled?: boolean;
};

export type ContextMenuContentProps = ComponentPropsWithoutRef<"div"> & {
    children: ReactNode;
};

export type ContextMenuItemProps = ComponentPropsWithoutRef<"button"> & {
    inset?: boolean;
    variant?: "default" | "danger";
    leftSlot?: ReactNode;
    rightSlot?: ReactNode;
};

export type ContextMenuSeparatorProps = ComponentPropsWithoutRef<"div">;

export type ContextMenuSubProps = {
    children: ReactNode;
    fixable?: boolean;
    closeDelay?: number;
    className?: ComponentPropsWithoutRef<"div">["className"];
};

export type ContextMenuSubTriggerProps = ComponentPropsWithoutRef<"button"> & {
    inset?: boolean;
    leftSlot?: ReactNode;
    rightSlot?: ReactNode;
};

export type ContextMenuSubContentProps = ComponentPropsWithoutRef<"div"> & {
    children: ReactNode;
    sideOffset?: number;
};

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import type { DivClassName } from "../_shared/types";

export type ContextMenuState = {
    /** Whether open is enabled. */
    open: boolean;
    /** The x used by the component. */
    x: number;
    /** The y used by the component. */
    y: number;
};

export type ContextMenuProps = {
    /** The content rendered inside the component. */
    children: ReactNode;
};

export type ContextMenuTriggerProps = ComponentPropsWithoutRef<"div"> & {
    /** The content rendered inside the component. */
    children: ReactNode;
    /** Whether disabled is enabled. */
    disabled?: boolean;
};

export type ContextMenuContentProps = ComponentPropsWithoutRef<"div"> & {
    /** The content rendered inside the component. */
    children: ReactNode;
};

export type ContextMenuItemProps = ComponentPropsWithoutRef<"button"> & {
    /** The inset used by the component. */
    inset?: boolean;
    /** The left slot used by the component. */
    leftSlot?: ReactNode;
    /** The right slot used by the component. */
    rightSlot?: ReactNode;
};

export type ContextMenuItemDangerProps = ContextMenuItemProps;

export type ContextMenuLabelProps = ComponentPropsWithoutRef<"div"> & {
    /** The inset used by the component. */
    inset?: boolean;
};

export type ContextMenuSeparatorProps = ComponentPropsWithoutRef<"div">;

export type ContextMenuSubProps = {
    /** The content rendered inside the component. */
    children: ReactNode;
    /** The fixable used by the component. */
    fixable?: boolean;
    /** Function used to close delay. */
    closeDelay?: number;
    /** CSS classes applied to the root element. */
    className?: DivClassName;
};

export type ContextMenuSubTriggerProps = ComponentPropsWithoutRef<"button"> & {
    /** The inset used by the component. */
    inset?: boolean;
    /** The left slot used by the component. */
    leftSlot?: ReactNode;
    /** The right slot used by the component. */
    rightSlot?: ReactNode;
};

export type ContextMenuSubContentProps = ComponentPropsWithoutRef<"div"> & {
    /** The content rendered inside the component. */
    children: ReactNode;
    /** The side offset used by the component. */
    sideOffset?: number;
};

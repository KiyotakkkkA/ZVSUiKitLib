import type { ComponentPropsWithoutRef, ReactNode } from "react";

type DivClassName = ComponentPropsWithoutRef<"div">["className"];
type ButtonClassName = ComponentPropsWithoutRef<"button">["className"];
type SpanClassName = ComponentPropsWithoutRef<"span">["className"];

export type TreeViewVirtualizationProps = {
    virtualized?: boolean;
    height?: number;
    estimateSize?: number;
    overscan?: number;
};

export type TreeViewProps = TreeViewVirtualizationProps &
    ComponentPropsWithoutRef<"div"> & {
        children: ReactNode;
    };

export type TreeViewCatalogProps = TreeViewVirtualizationProps &
    Omit<ComponentPropsWithoutRef<"div">, "title"> & {
        title: ReactNode;
        children?: ReactNode;
        open?: boolean;
        defaultOpen?: boolean;
        onOpenChange?: (open: boolean) => void;
        icon?: ReactNode;
        openIcon?: ReactNode;
        rightSlot?: ReactNode;
        classNames?: {
            trigger?: ButtonClassName;
            title?: SpanClassName;
            nested?: DivClassName;
            chevronIcon?: ComponentPropsWithoutRef<"svg">["className"];
            folderIcon?: SpanClassName;
            rightSlot?: SpanClassName;
            virtualContent?: DivClassName;
            virtualItem?: DivClassName;
        };
    };

export type TreeViewElementProps = Omit<
    ComponentPropsWithoutRef<"button">,
    "children"
> & {
    label?: ReactNode;
    description?: ReactNode;
    children?: ReactNode;
    selected?: boolean;
    disabled?: boolean;
    icon?: ReactNode;
    rightSlot?: ReactNode;
    classNames?: {
        icon?: SpanClassName;
        content?: SpanClassName;
        label?: SpanClassName;
        description?: SpanClassName;
        rightSlot?: SpanClassName;
    };
};

export type VirtualizedChildrenListProps = {
    children?: ReactNode;
    className?: DivClassName;
    classNames?: {
        content?: DivClassName;
        item?: DivClassName;
    };
    height: number;
    estimateSize: number;
    overscan: number;
};

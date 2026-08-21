import type { ComponentPropsWithoutRef, ReactNode, Ref } from "react";

import type {
    ButtonClassName,
    DivClassName,
    SpanClassName,
    SvgClassName,
} from "../_shared/types";

export type TreeViewVirtualizationProps = {
    /** Enables row virtualization for large trees. */
    virtualized?: boolean;
    /** Sets the virtualized tree viewport height in pixels. */
    height?: number;
    /** Provides the estimated height of each virtualized row in pixels. */
    estimateSize?: number;
    /** Sets the number of rows rendered outside the visible viewport. */
    overscan?: number;
};

export type TreeViewProps = TreeViewVirtualizationProps &
    ComponentPropsWithoutRef<"div"> & {
        /** Receives the tree root element. */
        ref?: Ref<HTMLDivElement>;
        /** Renders the tree nodes inside the root tree container. */
        children: ReactNode;
    };

export type TreeViewCatalogClassNames = {
    /** Applies CSS classes to the catalog trigger button. */
    trigger?: ButtonClassName;
    /** Applies CSS classes to the catalog title. */
    title?: SpanClassName;
    /** Applies CSS classes to the nested child container. */
    nested?: DivClassName;
    /** Applies CSS classes to the expand/collapse chevron SVG. */
    chevronIcon?: SvgClassName;
    /** Applies CSS classes to the folder icon wrapper. */
    folderIcon?: SpanClassName;
    /** Applies CSS classes to the trailing content wrapper. */
    rightSlot?: SpanClassName;
    /** Applies CSS classes to the virtualized list content container. */
    virtualContent?: DivClassName;
    /** Applies CSS classes to each virtualized row. */
    virtualItem?: DivClassName;
};

export type TreeViewCatalogProps = TreeViewVirtualizationProps &
    Omit<ComponentPropsWithoutRef<"div">, "title"> & {
        /** Renders the catalog label inside its trigger. */
        title: ReactNode;
        /** Renders nested tree nodes revealed when the catalog is open. */
        children?: ReactNode;
        /** Controls whether the catalog is expanded. */
        open?: boolean;
        /** Sets the initial expanded state when the catalog is uncontrolled. */
        defaultOpen?: boolean;
        /** Runs when the catalog expanded state changes. */
        onOpenChange?: (open: boolean) => void;
        /** Replaces the default closed-folder icon. */
        icon?: ReactNode;
        /** Replaces the default open-folder icon. */
        openIcon?: ReactNode;
        /** Renders trailing content at the end of the catalog trigger. */
        rightSlot?: ReactNode;
        /** Applies CSS classes to the catalog slots. */
        classNames?: TreeViewCatalogClassNames;
    };

export type TreeViewElementClassNames = {
    /** Applies CSS classes to the leading icon wrapper. */
    icon?: SpanClassName;
    /** Applies CSS classes to the label and description wrapper. */
    content?: SpanClassName;
    /** Applies CSS classes to the element label. */
    label?: SpanClassName;
    /** Applies CSS classes to the element description. */
    description?: SpanClassName;
    /** Applies CSS classes to the trailing content wrapper. */
    rightSlot?: SpanClassName;
};

export type TreeViewElementProps = Omit<
    ComponentPropsWithoutRef<"button">,
    "children"
> & {
    /** Renders the primary text when custom children are not provided. */
    label?: ReactNode;
    /** Renders supporting text below the label. */
    description?: ReactNode;
    /** Replaces the generated label and description content. */
    children?: ReactNode;
    /** Marks the tree element as selected and applies its selected style. */
    selected?: boolean;
    /** Prevents interaction with the tree element. */
    disabled?: boolean;
    /** Renders a leading icon before the element content. */
    icon?: ReactNode;
    /** Renders trailing content after the element content. */
    rightSlot?: ReactNode;
    /** Applies CSS classes to the tree element slots. */
    classNames?: TreeViewElementClassNames;
};

export type VirtualizedChildrenListClassNames = {
    /** Applies CSS classes to the virtualized list content container. */
    content?: DivClassName;
    /** Applies CSS classes to each virtualized row. */
    item?: DivClassName;
};

export type VirtualizedChildrenListProps = {
    /** Supplies the children rendered as virtualized rows. */
    children?: ReactNode;
    /** Applies CSS classes to the virtualized viewport. */
    className?: DivClassName;
    /** Applies CSS classes to the virtualized list slots. */
    classNames?: VirtualizedChildrenListClassNames;
    /** Sets the virtualized viewport height in pixels. */
    height: number;
    /** Provides the estimated height of each virtualized row in pixels. */
    estimateSize: number;
    /** Sets the number of rows rendered outside the visible viewport. */
    overscan: number;
};

import type {
    ComponentPropsWithoutRef,
    HTMLAttributeAnchorTarget,
    MouseEventHandler,
    ReactNode,
    Ref,
} from "react";

export type BreadcrumbsProps = ComponentPropsWithoutRef<"nav"> & {
    /** Receives the breadcrumbs `<nav>` element. */
    ref?: Ref<HTMLElement>;
    /** Replaces the separator rendered between breadcrumb items. */
    separator?: ReactNode;
    /** Renders breadcrumb navigation items. */
    children: ReactNode;
};

export type BreadcrumbsNavProps = Omit<
    ComponentPropsWithoutRef<"button">,
    "children" | "onClick"
> & {
    /** Renders the breadcrumb item label. */
    label: ReactNode;
    /** Marks the item as the current page and disables it. */
    active?: boolean;
    /** Renders the item as an `<a>` link to this URL instead of a button. */
    href?: string;
    /** The link target, used together with `href`. */
    target?: HTMLAttributeAnchorTarget;
    /** The link relationship, used together with `href`. */
    rel?: string;
    /** Runs when the item is clicked. */
    onClick?: MouseEventHandler<HTMLElement>;
};

export type BreadcrumbsSeparatorProps = ComponentPropsWithoutRef<"span"> & {
    /** Replaces the separator inherited from the breadcrumbs root. */
    children?: ReactNode;
};

export type BreadcrumbsContextValue = {
    /** Stores the separator shared by nested breadcrumb parts. */
    separator: ReactNode;
};

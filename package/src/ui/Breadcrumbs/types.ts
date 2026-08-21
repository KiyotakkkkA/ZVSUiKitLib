import type { ComponentPropsWithoutRef, ReactNode, Ref } from "react";

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
    "children"
> & {
    /** Renders the breadcrumb item label. */
    label: ReactNode;
    /** Marks the item as the current page and disables its button. */
    active?: boolean;
};

export type BreadcrumbsSeparatorProps = ComponentPropsWithoutRef<"span"> & {
    /** Replaces the separator inherited from the breadcrumbs root. */
    children?: ReactNode;
};

export type BreadcrumbsContextValue = {
    /** Stores the separator shared by nested breadcrumb parts. */
    separator: ReactNode;
};

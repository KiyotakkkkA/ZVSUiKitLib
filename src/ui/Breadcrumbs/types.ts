import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type BreadcrumbsProps = ComponentPropsWithoutRef<"nav"> & {
    separator?: ReactNode;
    children: ReactNode;
};

export type BreadcrumbsNavProps = Omit<
    ComponentPropsWithoutRef<"button">,
    "children"
> & {
    label: ReactNode;
    active?: boolean;
};

export type BreadcrumbsSeparatorProps = ComponentPropsWithoutRef<"span"> & {
    children?: ReactNode;
};

export type BreadcrumbsContextValue = {
    separator: ReactNode;
};

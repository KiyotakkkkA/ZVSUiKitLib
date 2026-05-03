import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type DataDisplayProps = ComponentPropsWithoutRef<"div"> & {
    children: ReactNode;
    bordered?: boolean;
};

export type DataDisplayItemProps = ComponentPropsWithoutRef<"div"> & {
    label: ReactNode;
    value?: ReactNode;
    description?: ReactNode;
    icon?: ReactNode;
    rightSlot?: ReactNode;
};

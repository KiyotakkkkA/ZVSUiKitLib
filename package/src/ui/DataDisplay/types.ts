import type { ComponentPropsWithoutRef, ReactNode } from "react";
import type { RoundVariants } from "../_shared/types";

export type DataDisplayProps = ComponentPropsWithoutRef<"div"> & {
    children: ReactNode;
    bordered?: boolean;
    rounded?: RoundVariants | "";
};

export type DataDisplayItemProps = ComponentPropsWithoutRef<"div"> & {
    label: ReactNode;
    value?: ReactNode;
    description?: ReactNode;
    icon?: ReactNode;
    rightSlot?: ReactNode;
};

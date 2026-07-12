import type { HTMLAttributes, ReactNode } from "react";
import type { RoundVariants } from "../_shared/types";

export type DataDisplayProps = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
    bordered?: boolean;
    rounded?: RoundVariants | "";
};

export type DataDisplayItemProps = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
};

export type DataDisplayItemPartProps = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
};

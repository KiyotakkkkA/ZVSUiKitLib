import type { HTMLAttributes, ReactNode } from "react";
import type { RoundVariants } from "../_shared/types";

export type DataDisplayProps = HTMLAttributes<HTMLDivElement> & {
    /** The content rendered inside the component. */
    children: ReactNode;
    /** The bordered used by the component. */
    bordered?: boolean;
    /** The border-radius preset applied to the component. */
    rounded?: RoundVariants | "";
};

export type DataDisplayItemProps = HTMLAttributes<HTMLDivElement> & {
    /** The content rendered inside the component. */
    children: ReactNode;
};

export type DataDisplayItemPartProps = HTMLAttributes<HTMLDivElement> & {
    /** The content rendered inside the component. */
    children: ReactNode;
};

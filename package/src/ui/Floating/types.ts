import type { HTMLAttributes, ReactNode } from "react";
import type { PositionAnchor, RoundVariants } from "../_shared/types";

export type FloatingProps = {
    children: ReactNode;
    anchor?: PositionAnchor;
} & HTMLAttributes<HTMLDivElement>;

export type FloatingTriggerProps = HTMLAttributes<HTMLDivElement>;

export type FloatingContentProps = HTMLAttributes<HTMLDivElement> & {
    rounded?: RoundVariants | "";
};

export type FloatingContextValue = {
    anchor: PositionAnchor;
};

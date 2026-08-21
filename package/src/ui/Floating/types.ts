import type { HTMLAttributes, ReactNode, Ref } from "react";
import type { PositionAnchor, RoundVariants } from "../_shared/types";

export type FloatingProps = {
    /** Receives the floating root element. */
    ref?: Ref<HTMLDivElement>;
    /** The content rendered inside the component. */
    children: ReactNode;
    /** Content rendered for the anchor. */
    anchor?: PositionAnchor;
} & HTMLAttributes<HTMLDivElement>;

export type FloatingTriggerProps = HTMLAttributes<HTMLDivElement>;

export type FloatingContentProps = HTMLAttributes<HTMLDivElement> & {
    /** The border-radius preset applied to the component. */
    rounded?: RoundVariants | "";
};

export type FloatingContextValue = {
    /** Content rendered for the anchor. */
    anchor: PositionAnchor;
};

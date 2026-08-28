import type { HTMLAttributes, ReactNode, Ref, RefObject } from "react";
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
    /** Whether the panel is currently visible. */
    open: boolean;
    /** Receives the floating root element used to position the panel. */
    rootRef: RefObject<HTMLDivElement | null>;
    /** Reports hover/focus state changes from the portaled panel. */
    setContentActive: (active: boolean) => void;
};

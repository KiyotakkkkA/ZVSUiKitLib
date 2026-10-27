import type {
    Dispatch,
    HTMLAttributes,
    ReactNode,
    Ref,
    RefObject,
    SetStateAction,
} from "react";
import type { PositionAnchor, RoundVariants } from "../_shared/types";

export type FloatingProps = {
    /** Receives the floating root element. */
    ref?: Ref<HTMLDivElement>;
    /** The content rendered inside the component. */
    children: ReactNode;
    /** Content rendered for the anchor. */
    anchor?: PositionAnchor;
    /** Whether clicking the trigger pins the panel open until the next trigger click, an outside click, or Escape. */
    fixOnClick?: boolean;
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
    /** Whether the panel is pinned open by a trigger click. */
    fixed: boolean;
    /** Whether clicking the trigger pins the panel open. */
    fixOnClick: boolean;
    /** Receives the floating root element used to position the panel. */
    rootRef: RefObject<HTMLDivElement | null>;
    /** Reports hover/focus state changes from the portaled panel. */
    setContentActive: (active: boolean) => void;
    /** Updates the pinned state of the panel. */
    setFixed: Dispatch<SetStateAction<boolean>>;
};

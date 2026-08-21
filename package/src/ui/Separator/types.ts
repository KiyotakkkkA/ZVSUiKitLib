import type { HTMLAttributes, Ref } from "react";
import type { Orientation } from "../_shared/types";

export type SeparatorProps = HTMLAttributes<HTMLDivElement> & {
    /** Receives the underlying `HTMLDivElement` node. */
    ref?: Ref<HTMLDivElement>;
    /** The direction in which the component content is arranged. */
    orientation?: Orientation;
};

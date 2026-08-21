import type { HTMLAttributes, Ref } from "react";
import type { Orientation } from "../_shared/types";

export type ScrollAreaProps = HTMLAttributes<HTMLDivElement> & {
    /** Receives the scroll container element. */
    ref?: Ref<HTMLDivElement>;
    /** The direction in which the component content is arranged. */
    orientation?: Orientation | "both";
    /** Whether show scrollbar is enabled. */
    showScrollbar?: boolean;
};

import type { HTMLAttributes } from "react";
import type { Orientation } from "../_shared/types";

export type ScrollAreaProps = HTMLAttributes<HTMLDivElement> & {
    /** The direction in which the component content is arranged. */
    orientation?: Orientation | "both";
    /** Whether show scrollbar is enabled. */
    showScrollbar?: boolean;
};

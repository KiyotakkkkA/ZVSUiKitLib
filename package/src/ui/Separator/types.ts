import type { HTMLAttributes } from "react";
import type { Orientation } from "../_shared/types";

export type SeparatorProps = HTMLAttributes<HTMLDivElement> & {
    /** The direction in which the component content is arranged. */
    orientation?: Orientation;
};

import type { HTMLAttributes } from "react";
import type { Orientation } from "../_shared/types";

export type ScrollAreaProps = HTMLAttributes<HTMLDivElement> & {
    orientation?: Orientation | "both";
    showScrollbar?: boolean;
};

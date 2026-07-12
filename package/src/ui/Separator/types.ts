import type { HTMLAttributes } from "react";
import type { Orientation } from "../_shared/types";

export type SeparatorProps = HTMLAttributes<HTMLDivElement> & {
    orientation?: Orientation;
};

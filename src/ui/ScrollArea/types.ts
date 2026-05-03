import type { HTMLAttributes } from "react";

export type ScrollAreaProps = HTMLAttributes<HTMLDivElement> & {
    orientation?: "horizontal" | "vertical" | "both";
};

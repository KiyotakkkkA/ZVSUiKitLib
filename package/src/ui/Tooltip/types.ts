import type { ReactNode } from "react";
import type { PositionAnchor, RoundVariants } from "../_shared/types";

import type { DivClassName } from "../_shared/types";

export type TooltipProps = {
    children: ReactNode;
    label: ReactNode;
    placement?: PositionAnchor;
    className?: DivClassName;
    rounded?: RoundVariants | "";
};

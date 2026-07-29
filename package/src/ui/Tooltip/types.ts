import type { ReactNode } from "react";
import type { PositionAnchor, RoundVariants } from "../_shared/types";

import type { DivClassName } from "../_shared/types";

export type TooltipProps = {
    /** The content rendered inside the component. */
    children: ReactNode;
    /** Text used for the label. */
    label: ReactNode;
    /** The content position relative to its trigger. */
    placement?: PositionAnchor;
    /** CSS classes applied to the root element. */
    className?: DivClassName;
    /** The border-radius preset applied to the component. */
    rounded?: RoundVariants | "";
};

import type { HTMLAttributes } from "react";
import type { ColorVariantsBase, RoundVariants } from "../_shared/types";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
    /** Selects the badge color scheme. */
    variant?: ColorVariantsBase;
    /** Selects the badge border radius. */
    rounded?: RoundVariants | "";
};

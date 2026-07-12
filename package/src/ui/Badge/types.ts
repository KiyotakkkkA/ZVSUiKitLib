import type { HTMLAttributes } from "react";
import type { ColorVariantsBase, RoundVariants } from "../_shared/types";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
    variant?: ColorVariantsBase;
    rounded?: RoundVariants | "";
};

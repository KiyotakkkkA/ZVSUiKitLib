import type { HTMLAttributes } from "react";
import type { ColorVariantsBase } from "../_shared/types";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
    variant?: ColorVariantsBase;
};

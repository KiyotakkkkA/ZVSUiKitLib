import type { HTMLAttributes, Ref } from "react";
import type {
    ColorVariantsBase,
    RoundVariants,
    SizeVariants,
} from "../_shared/types";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
    /** Receives the underlying `HTMLSpanElement` node. */
    ref?: Ref<HTMLSpanElement>;
    /** Selects the badge color scheme. */
    variant?: ColorVariantsBase;
    /** Selects the badge border radius. */
    rounded?: RoundVariants | "";
    /** Selects the badge padding and text size on the shared size scale. */
    size?: SizeVariants;
};

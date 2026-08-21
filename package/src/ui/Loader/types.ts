import type { Ref } from "react";
import type { DivClassName } from "../_shared/types";

export type LoaderProps = {
    /** Receives the loader element. */
    ref?: Ref<HTMLDivElement>;
    /** Applies CSS classes to the spinner SVG. */
    className?: DivClassName;
};

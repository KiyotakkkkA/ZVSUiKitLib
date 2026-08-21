import type { Ref } from "react";
import type { DivClassName } from "../_shared/types";

export type LoaderProps = {
    /** Receives the loader element. */
    ref?: Ref<HTMLDivElement>;
    /** Loading label */
    label?: string;
    /** Applies CSS classes to the spinner SVG. */
    className?: DivClassName;
};

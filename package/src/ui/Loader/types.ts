import type { Ref } from "react";
import type { DivClassName } from "../_shared/types";

export type LoaderProps = {
    /** Receives the loader element. */
    ref?: Ref<HTMLDivElement>;
    /**
     * Accessible name announced while the spinner is visible. Loader is
     * exported from the `/server` entry, so it reads the default dictionary
     * directly rather than `LocaleProvider`, which needs React context and
     * therefore a client component.
     */
    label?: string;
    /** Applies CSS classes to the spinner SVG. */
    className?: DivClassName;
};

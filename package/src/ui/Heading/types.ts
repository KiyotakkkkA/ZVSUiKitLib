import type { ReactNode } from "react";
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadingProps = {
    /** Selects the semantic heading element from `h1` through `h6`. */
    level?: HeadingLevel;
    /** Renders the heading content. */
    children: ReactNode;
    /** Applies CSS classes to the heading element. */
    className?: string;
};

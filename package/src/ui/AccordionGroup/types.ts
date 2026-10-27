import type { HTMLAttributes, ReactNode, Ref } from "react";

export type AccordionGroupShowMode = "only-one" | "multiple";

export type AccordionGroupProps = HTMLAttributes<HTMLDivElement> & {
    /** Receives the group root element. */
    ref?: Ref<HTMLDivElement>;
    /** Sets how many accordions can be open at the same time. */
    showMode?: AccordionGroupShowMode;
    /** Renders the grouped accordions. */
    children: ReactNode;
};

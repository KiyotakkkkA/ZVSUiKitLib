import type { ReactNode } from "react";

export type CarouselClassNames = {
    /** The nav used by the component. */
    nav?: string;
    /** The links used by the component. */
    links?: string;
};

export type CarouselProps = {
    /** The content rendered inside the component. */
    children: ReactNode;
    /** CSS classes applied to the root element. */
    className?: string;
    /** CSS classes applied to the component slots. */
    classNames?: CarouselClassNames;
    /** Whether loop is enabled. */
    loop?: boolean;
    /** The auto scroll used by the component. */
    autoScroll?: boolean;
    /** The auto scroll timeout used by the component. */
    autoScrollTimeout?: number;
};

export type CarouselImageProps = {
    /** The content rendered inside the component. */
    children: ReactNode;
    /** CSS classes applied to the root element. */
    className?: string;
};

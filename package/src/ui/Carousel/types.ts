import type { ReactNode } from "react";

export type CarouselClassNames = {
    nav?: string;
    links?: string;
};

export type CarouselProps = {
    children: ReactNode;
    className?: string;
    classNames?: CarouselClassNames;
    loop?: boolean;
    autoScroll?: boolean;
    autoScrollTimeout?: number;
};

export type CarouselImageProps = {
    children: ReactNode;
    className?: string;
};

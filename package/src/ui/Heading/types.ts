import type { ReactNode } from "react";
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadingProps = {
    level?: HeadingLevel;
    children: ReactNode;
    className?: string;
};

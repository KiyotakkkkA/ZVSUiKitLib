import type { ReactNode } from "react";

import type { DivClassName } from "../_shared/types";

export type TimelineProps = {
    /** The content rendered inside the component. */
    children: ReactNode;
    /** CSS classes applied to the root element. */
    className?: DivClassName;
};

export type TimelineItemProps = {
    /** The content rendered inside the component. */
    children: ReactNode;
    /** Content rendered for the icon. */
    icon: string;
    /** CSS classes applied to the root element. */
    className?: DivClassName;
};

export type TimelineItemSectionProps = {
    /** The content rendered inside the component. */
    children: ReactNode;
    /** CSS classes applied to the root element. */
    className?: DivClassName;
};

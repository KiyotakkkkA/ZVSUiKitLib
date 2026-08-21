import type { ReactNode, Ref } from "react";

import type { IconName } from "../_shared/icons";

import type { DivClassName } from "../_shared/types";

export type TimelineProps = {
    /** Receives the timeline root element. */
    ref?: Ref<HTMLDivElement>;
    /** The content rendered inside the component. */
    children: ReactNode;
    /** CSS classes applied to the root element. */
    className?: DivClassName;
};

export type TimelineItemProps = {
    /** The content rendered inside the component. */
    children: ReactNode;
    /** Content rendered for the icon. */
    icon: IconName;
    /** CSS classes applied to the root element. */
    className?: DivClassName;
};

export type TimelineItemSectionProps = {
    /** The content rendered inside the component. */
    children: ReactNode;
    /** CSS classes applied to the root element. */
    className?: DivClassName;
};

import type { ReactNode } from "react";

import type { DivClassName } from "../_shared/types";

export type TimelineProps = {
    children: ReactNode;
    className?: DivClassName;
};

export type TimelineItemProps = {
    children: ReactNode;
    icon: string;
    className?: DivClassName;
};

export type TimelineItemSectionProps = {
    children: ReactNode;
    className?: DivClassName;
};

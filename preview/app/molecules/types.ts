import type { ReactNode } from "react";

export type SectionNavigation = {
    id: string;
    headerTitle: string;
    navTitle: string;
};

export type SectionProps = {
    className?: string;
    children: ReactNode;
    nav: SectionNavigation;
};

export type SlotProps = {
    className?: string;
    children: ReactNode;
};

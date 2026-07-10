import type { ComponentPropsWithoutRef, ReactNode } from "react";

type DivClassName = ComponentPropsWithoutRef<"div">["className"];

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

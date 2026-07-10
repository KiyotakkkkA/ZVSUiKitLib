import type { ComponentPropsWithoutRef, ReactNode } from "react";

type DivClassName = ComponentPropsWithoutRef<"div">["className"];

export type EmptyStateClassNames = {
    icon?: DivClassName;
    title?: DivClassName;
    description?: DivClassName;
    action?: DivClassName;
};

export type EmptyStateProps = {
    icon?: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    action?: ReactNode;
    className?: DivClassName;
    classNames?: EmptyStateClassNames;
};

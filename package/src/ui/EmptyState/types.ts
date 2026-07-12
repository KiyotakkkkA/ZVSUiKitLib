import type { ReactNode } from "react";
import type { DivClassName } from "../_shared/types";

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

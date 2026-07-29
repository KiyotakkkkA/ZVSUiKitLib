import type { ReactNode } from "react";
import type { DivClassName } from "../_shared/types";

export type EmptyStateClassNames = {
    /** Content rendered for the icon. */
    icon?: DivClassName;
    /** Text used for the title. */
    title?: DivClassName;
    /** Text used for the description. */
    description?: DivClassName;
    /** The action used by the component. */
    action?: DivClassName;
};

export type EmptyStateProps = {
    /** Content rendered for the icon. */
    icon?: ReactNode;
    /** Text used for the title. */
    title: ReactNode;
    /** Text used for the description. */
    description?: ReactNode;
    /** The action used by the component. */
    action?: ReactNode;
    /** CSS classes applied to the root element. */
    className?: DivClassName;
    /** CSS classes applied to the component slots. */
    classNames?: EmptyStateClassNames;
};

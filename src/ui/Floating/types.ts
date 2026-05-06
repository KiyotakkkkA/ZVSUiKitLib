import type { ComponentPropsWithoutRef, ReactNode } from "react";

type DivClassName = ComponentPropsWithoutRef<"div">["className"];

export type FloatingAnchor =
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";

export type FloatingClassNames = {
    panel?: DivClassName;
    content?: DivClassName;
};

export type FloatingProps = {
    children: ReactNode;
    content: ReactNode;
    anchor?: FloatingAnchor;
    className?: DivClassName;
    classNames?: FloatingClassNames;
};

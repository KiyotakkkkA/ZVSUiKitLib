import type { HTMLAttributes, ReactNode } from "react";

export type FloatingAnchor =
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";

export type FloatingProps = {
    children: ReactNode;
    anchor?: FloatingAnchor;
} & HTMLAttributes<HTMLDivElement>;

export type FloatingTriggerProps = HTMLAttributes<HTMLDivElement>;

export type FloatingContentProps = HTMLAttributes<HTMLDivElement>;

export type FloatingContextValue = {
    anchor: FloatingAnchor;
};

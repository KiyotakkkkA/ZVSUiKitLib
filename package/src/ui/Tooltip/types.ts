import type { ComponentPropsWithoutRef, ReactNode } from "react";

type DivClassName = ComponentPropsWithoutRef<"div">["className"];

export type TooltipPlacement =
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";

export type TooltipProps = {
    children: ReactNode;
    label: ReactNode;
    placement?: TooltipPlacement;
    className?: DivClassName;
};

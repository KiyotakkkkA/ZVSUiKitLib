import type { ComponentPropsWithoutRef, ReactNode } from "react";
import type { PositionAnchor } from "../_shared/types";

type DivClassName = ComponentPropsWithoutRef<"div">["className"];

export type TooltipProps = {
    children: ReactNode;
    label: ReactNode;
    placement?: PositionAnchor;
    className?: DivClassName;
};

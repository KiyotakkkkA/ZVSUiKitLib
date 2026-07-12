import type { ComponentPropsWithoutRef, ElementType } from "react";

export type ElementClassName<T extends ElementType> =
    ComponentPropsWithoutRef<T>["className"];

export type DivClassName = ElementClassName<"div">;
export type ButtonClassName = ElementClassName<"button">;
export type SpanClassName = ElementClassName<"span">;
export type InputClassName = ElementClassName<"input">;
export type LabelClassName = ElementClassName<"label">;
export type ParagraphClassName = ElementClassName<"p">;
export type SelectClassName = ElementClassName<"select">;
export type SvgClassName = ElementClassName<"svg">;

export type Orientation = "horizontal" | "vertical";

export type ColorVariantsBase =
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "warning"
    | "danger"
    | "info";

type ColorVariantsOutline =
    | "primary-outline"
    | "tertiary-outline"
    | "success-outline"
    | "warning-outline"
    | "danger-outline"
    | "info-outline";

export type ColorVariants = ColorVariantsBase | ColorVariantsOutline;

export type PositionAnchor =
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";

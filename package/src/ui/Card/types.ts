import type { HTMLAttributes } from "react";
import type { RoundVariants } from "../_shared/types";

export type CardProps = HTMLAttributes<HTMLElement> & {
    rounded?: RoundVariants | "";
};
export type CardHeaderProps = HTMLAttributes<HTMLElement>;
export type CardTitleProps = HTMLAttributes<HTMLHeadingElement>;
export type CardSubtitleProps = HTMLAttributes<HTMLParagraphElement>;
export type CardContentProps = HTMLAttributes<HTMLDivElement>;
export type CardFooterProps = HTMLAttributes<HTMLElement>;

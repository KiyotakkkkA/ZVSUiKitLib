import type { HTMLAttributes, ReactNode } from "react";
export type BlockquoteProps = HTMLAttributes<HTMLQuoteElement> & {
    cite?: ReactNode;
};

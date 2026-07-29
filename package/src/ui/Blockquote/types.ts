import type { HTMLAttributes, ReactNode } from "react";
export type BlockquoteProps = HTMLAttributes<HTMLQuoteElement> & {
    /** Renders the quotation attribution below the quoted content. */
    cite?: ReactNode;
};

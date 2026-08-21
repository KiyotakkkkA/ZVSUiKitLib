import type { HTMLAttributes, ReactNode, Ref } from "react";
export type BlockquoteProps = HTMLAttributes<HTMLQuoteElement> & {
    /** Receives the underlying `HTMLQuoteElement` node. */
    ref?: Ref<HTMLQuoteElement>;
    /** Renders the quotation attribution below the quoted content. */
    cite?: ReactNode;
};

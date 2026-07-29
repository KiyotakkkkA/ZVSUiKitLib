import type { HTMLAttributes } from "react";
export type CodeProps = HTMLAttributes<HTMLElement> & {
    /** Whether the code is rendered as a block. */
    block?: boolean;
};

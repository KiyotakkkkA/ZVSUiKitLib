import type { HTMLAttributes, Ref } from "react";
export type CodeProps = HTMLAttributes<HTMLElement> & {
    /** Receives the rendered `<pre>` or `<code>` node. */
    ref?: Ref<HTMLElement>;
    /** Whether the code is rendered as a block. */
    block?: boolean;
};

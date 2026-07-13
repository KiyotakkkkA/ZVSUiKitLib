import { Blockquote } from "@kiyotakkkka/zvs-uikit-lib/server";

export function BlockquotePreview() {
    return (
        <div className="w-full max-w-2xl p-3">
            <Blockquote cite="Product writing principle">
                Good typography makes the structure obvious before the words are
                read.
            </Blockquote>
        </div>
    );
}

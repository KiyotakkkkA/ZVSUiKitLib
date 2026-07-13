import { TypographyBlockquote } from "../typography-elements";

export function BlockquotePreview() {
    return (
        <div className="w-full max-w-2xl">
            <TypographyBlockquote cite="Product writing principle">
                Good typography makes the structure obvious before the words are
                read.
            </TypographyBlockquote>
        </div>
    );
}

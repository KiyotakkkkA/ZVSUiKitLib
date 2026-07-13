import { TypographyQuote, TypographyText } from "../typography-elements";

export function QuotePreview() {
    return (
        <div className="w-full max-w-2xl">
            <TypographyText size="lg">
                The review described the interaction as{" "}
                <TypographyQuote>quiet, predictable, and fast</TypographyQuote>.
            </TypographyText>
        </div>
    );
}

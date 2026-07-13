import { TypographyLink, TypographyText } from "../typography-elements";

export function LinkPreview() {
    return (
        <div className="w-full max-w-2xl space-y-5">
            <TypographyText>
                Read the{" "}
                <TypographyLink href="#link-guidance">
                    component guidelines
                </TypographyLink>{" "}
                before publishing.
            </TypographyText>
            <TypographyLink id="link-guidance" href="/components">
                Browse all components →
            </TypographyLink>
        </div>
    );
}

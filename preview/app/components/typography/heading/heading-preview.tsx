import { TypographyHeading } from "../typography-elements";

export function HeadingPreview() {
    return (
        <div className="w-full max-w-4xl space-y-8">
            <TypographyHeading level={1}>
                Build focused products
            </TypographyHeading>
            <TypographyHeading level={2}>
                A dependable visual hierarchy
            </TypographyHeading>
            <TypographyHeading level={3}>
                Typography supports the content
            </TypographyHeading>
            <TypographyHeading level={4}>Section heading</TypographyHeading>
            <TypographyHeading level={5}>Component heading</TypographyHeading>
            <TypographyHeading level={6}>Compact heading</TypographyHeading>
        </div>
    );
}

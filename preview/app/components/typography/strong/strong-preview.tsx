import { TypographyStrong, TypographyText } from "../typography-elements";

export function StrongPreview() {
    return (
        <div className="w-full max-w-2xl space-y-4">
            <TypographyText>
                <TypographyStrong>Unsaved changes.</TypographyStrong> Leaving
                this page will discard your edits.
            </TypographyText>
            <TypographyText tone="muted">
                Your workspace includes{" "}
                <TypographyStrong>24 active members</TypographyStrong>.
            </TypographyText>
        </div>
    );
}

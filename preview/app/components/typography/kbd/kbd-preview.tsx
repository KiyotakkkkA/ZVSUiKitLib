import { TypographyKbd, TypographyText } from "../typography-elements";

export function KbdPreview() {
    return (
        <div className="w-full max-w-2xl space-y-5">
            <TypographyText>
                Press <TypographyKbd>⌘</TypographyKbd> +{" "}
                <TypographyKbd>K</TypographyKbd> to open search.
            </TypographyText>
            <TypographyText tone="muted">
                Use <TypographyKbd>Esc</TypographyKbd> to close the current
                overlay.
            </TypographyText>
        </div>
    );
}

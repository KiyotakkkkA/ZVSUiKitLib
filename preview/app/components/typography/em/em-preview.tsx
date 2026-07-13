import { TypographyEm, TypographyText } from "../typography-elements";

export function EmPreview() {
    return (
        <div className="w-full max-w-2xl">
            <TypographyText size="lg">
                Changes are saved automatically, but{" "}
                <TypographyEm>only after validation succeeds</TypographyEm>.
            </TypographyText>
        </div>
    );
}

import { TypographyCode, TypographyText } from "../typography-elements";

export function CodePreview() {
    return (
        <div className="w-full max-w-3xl space-y-6">
            <TypographyText>
                Install the package with{" "}
                <TypographyCode>npm install</TypographyCode> and import the
                component.
            </TypographyText>
            <TypographyCode
                block
            >{`import { Button } from "@kiyotakkkka/zvs-uikit-lib";

export function SaveAction() {
    return <Button>Save changes</Button>;
}`}</TypographyCode>
        </div>
    );
}

```tsx
import { Code, Text } from "@kiyotakkkka/zvs-uikit-lib/server";

export function CodePreview() {
    return (
        <div className="w-full max-w-3xl space-y-6">
            <Text>
                Install the package with <Code>npm install</Code> and import the
                component.
            </Text>
            <Code block>{`import { Button } from "@kiyotakkkka/zvs-uikit-lib";

export function SaveAction() {
    return <Button>Save changes</Button>;
}`}</Code>
        </div>
    );
}
```

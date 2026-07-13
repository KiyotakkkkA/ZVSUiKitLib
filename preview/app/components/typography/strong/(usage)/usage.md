```tsx
import { Strong, Text } from "@kiyotakkkka/zvs-uikit-lib/server";

export function StrongPreview() {
    return (
        <div className="w-full max-w-2xl space-y-4">
            <Text>
                <Strong>Unsaved changes.</Strong> Leaving this page will discard
                your edits.
            </Text>
            <Text tone="muted">
                Your workspace includes <Strong>24 active members</Strong>.
            </Text>
        </div>
    );
}
```

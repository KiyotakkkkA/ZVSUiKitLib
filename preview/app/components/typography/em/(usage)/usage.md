```tsx
import { Em, Text } from "@kiyotakkkka/zvs-uikit-lib/server";

export function EmPreview() {
    return (
        <div className="w-full max-w-2xl">
            <Text size="lg">
                Changes are saved automatically, but{" "}
                <Em>only after validation succeeds</Em>.
            </Text>
        </div>
    );
}
```

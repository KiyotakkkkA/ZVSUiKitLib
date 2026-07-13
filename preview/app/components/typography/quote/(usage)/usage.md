```tsx
import { Quote, Text } from "@kiyotakkkka/zvs-uikit-lib/server";

export function QuotePreview() {
    return (
        <div className="w-full max-w-2xl">
            <Text size="lg">
                The review described the interaction as{" "}
                <Quote>quiet, predictable, and fast</Quote>.
            </Text>
        </div>
    );
}
```

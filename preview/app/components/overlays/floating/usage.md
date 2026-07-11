```tsx
"use client";
import { Floating, Button } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoFloating() {
    return (
        <Floating anchor="bottom-right">
            <Floating.Trigger>
                <Button variant="secondary">Hover me</Button>
            </Floating.Trigger>

            <Floating.Content className="text-sm">
                Action tooltip
            </Floating.Content>
        </Floating>
    );
}
```

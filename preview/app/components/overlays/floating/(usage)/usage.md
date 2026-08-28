```tsx
"use client";
import { Button, Floating } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoFloating() {
    return (
        <div className="flex flex-wrap items-center gap-8">
            <Floating anchor="top-right">
                <Floating.Trigger>
                    <Button variant="secondary">Top right</Button>
                </Floating.Trigger>
                <Floating.Content className="text-sm">
                    Action tooltip
                </Floating.Content>
            </Floating>
            <Floating anchor="bottom-right">
                <Floating.Trigger>
                    <Button variant="secondary">Bottom right</Button>
                </Floating.Trigger>
                <Floating.Content className="text-sm">
                    Action tooltip
                </Floating.Content>
            </Floating>
        </div>
    );
}
```

```tsx
"use client";
import { SlidedPanel } from "@kiyotakkkka/zvs-uikit-lib";
export function SlidedPanelExample() {
    return (
        <SlidedPanel open={false} onClose={() => {}}>
            <SlidedPanel.Header>
                <SlidedPanel.Title>Filters</SlidedPanel.Title>
            </SlidedPanel.Header>
            <SlidedPanel.Content>Content</SlidedPanel.Content>
        </SlidedPanel>
    );
}
```

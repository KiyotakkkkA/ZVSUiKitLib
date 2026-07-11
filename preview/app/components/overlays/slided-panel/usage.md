```tsx
"use client";
import { useState } from "react";
import { SlidedPanel, Button } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoSlidedPanel() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setOpen(true)}>Open panel</Button>

            <SlidedPanel
                open={open}
                onClose={() => setOpen(false)}
                panelPlacement="right"
            >
                <SlidedPanel.Header>
                    <SlidedPanel.Title>Filters</SlidedPanel.Title>
                    <SlidedPanel.Subtitle>
                        Adjust parameters
                    </SlidedPanel.Subtitle>
                </SlidedPanel.Header>

                <SlidedPanel.Content>Panel content</SlidedPanel.Content>

                <SlidedPanel.Footer className="flex justify-end gap-2">
                    <Button variant="ghost" onClick={() => setOpen(false)}>
                        Cancel
                    </Button>
                    <Button onClick={() => setOpen(false)}>Apply</Button>
                </SlidedPanel.Footer>
            </SlidedPanel>
        </>
    );
}
```

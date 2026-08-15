```tsx
"use client";

import { useState } from "react";
import { ResizablePanel } from "@kiyotakkkka/zvs-uikit-lib";

export function ControlledResizablePanelPreview() {
    const [size, setSize] = useState(96);

    return (
        <div className="w-full max-w-xl space-y-3">
            <p className="text-sm text-main-300">Primary panel: {Math.round(size)}px</p>
            <ResizablePanel
                className="h-72 w-full"
                orientation="vertical"
                size={size}
                minSize={64}
                maxSize={180}
                keyboardStep={8}
                onSizeChange={setSize}
            >
                <ResizablePanel.Sidebar className="p-4">Controlled header</ResizablePanel.Sidebar>
                <ResizablePanel.Handle aria-label="Resize header" />
                <ResizablePanel.Content className="p-4">Scrollable content area</ResizablePanel.Content>
            </ResizablePanel>
        </div>
    );
}
```

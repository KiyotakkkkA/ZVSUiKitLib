```tsx
"use client";
import { ResizablePanel } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoResizablePanel() {
    return (
        <ResizablePanel defaultSize={260} minSize={200} maxSize={420}>
            <ResizablePanel.Sidebar className="p-4">
                Sidebar
            </ResizablePanel.Sidebar>
            <ResizablePanel.Handle />
            <ResizablePanel.Content className="p-4">
                Content
            </ResizablePanel.Content>
        </ResizablePanel>
    );
}
```


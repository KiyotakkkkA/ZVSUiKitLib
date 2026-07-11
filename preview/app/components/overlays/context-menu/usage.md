```tsx
"use client";
import { ContextMenu } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoContextMenu() {
    return (
        <ContextMenu>
            <ContextMenu.Trigger className="rounded-xl border border-main-700 p-6">
                Right click
            </ContextMenu.Trigger>

            <ContextMenu.Content>
                <ContextMenu.Item onClick={() => console.log("Open")}>
                    Open
                </ContextMenu.Item>
                <ContextMenu.Item variant="danger">Delete</ContextMenu.Item>
                <ContextMenu.Sub fixable>
                    <ContextMenu.SubTrigger>More</ContextMenu.SubTrigger>
                    <ContextMenu.SubContent sideOffset={4}>
                        <ContextMenu.Item>Option 1</ContextMenu.Item>
                        <ContextMenu.Item>Option 2</ContextMenu.Item>
                    </ContextMenu.SubContent>
                </ContextMenu.Sub>
            </ContextMenu.Content>
        </ContextMenu>
    );
}
```

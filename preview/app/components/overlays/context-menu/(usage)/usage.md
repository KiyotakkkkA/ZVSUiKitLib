```tsx
"use client";
import { Icon } from "@iconify/react";
import { ContextMenu } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoContextMenu() {
    return (
        <ContextMenu>
            <ContextMenu.Trigger className="rounded-xl border border-main-700 p-6">
                Right click
            </ContextMenu.Trigger>
            <ContextMenu.Content>
                <ContextMenu.Label>File</ContextMenu.Label>
                <ContextMenu.Item
                    leftSlot={<Icon icon="material-symbols:folder-open-outline" />}
                    rightSlot={<span className="text-xs">⌘O</span>}
                    onClick={() => console.log("Open")}
                >
                    Open
                </ContextMenu.Item>
                <ContextMenu.Sub fixable>
                    <ContextMenu.SubTrigger>More</ContextMenu.SubTrigger>
                    <ContextMenu.SubContent sideOffset={4}>
                        <ContextMenu.Item>Option 1</ContextMenu.Item>
                        <ContextMenu.Item>Option 2</ContextMenu.Item>
                    </ContextMenu.SubContent>
                </ContextMenu.Sub>
                <ContextMenu.Separator />
                <ContextMenu.ItemDanger
                    leftSlot={<Icon icon="material-symbols:delete-outline" />}
                >
                    Delete
                </ContextMenu.ItemDanger>
            </ContextMenu.Content>
        </ContextMenu>
    );
}
```

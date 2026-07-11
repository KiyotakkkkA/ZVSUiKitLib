"use client";
import { ContextMenu } from "@kiyotakkkka/zvs-uikit-lib/ui";
export function ContextMenuPreview() {
    return (
        <ContextMenu>
            <ContextMenu.Trigger>
                <div
                    style={{
                        padding: 40,
                        border: "1px dashed currentColor",
                        borderRadius: 12,
                    }}
                >
                    Right-click this area
                </div>
            </ContextMenu.Trigger>
            <ContextMenu.Content>
                <ContextMenu.Item>Open</ContextMenu.Item>
                <ContextMenu.Item>Rename</ContextMenu.Item>
                <ContextMenu.Separator />
                <ContextMenu.Item variant="danger">Delete</ContextMenu.Item>
            </ContextMenu.Content>
        </ContextMenu>
    );
}

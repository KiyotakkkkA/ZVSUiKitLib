```tsx
"use client";
import { ContextMenu, Icon, type IconName } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

type FileEntry = {
    name: string;
    meta: string;
    icon: IconName;
};

const files: FileEntry[] = [
    { name: "Brand assets", meta: "Folder · 24 items", icon: "folder-outline" },
    { name: "hero-banner.png", meta: "PNG · 1.8 MB", icon: "file-image-outline" },
    { name: "Q3 report.pdf", meta: "PDF · 420 KB", icon: "file-outline" },
    { name: "deploy.sh", meta: "Script · 2 KB", icon: "script" },
];

export function DemoContextMenuFiles() {
    const [lastAction, setLastAction] = useState("Right-click a file");

    const run = (action: string, file: FileEntry) =>
        setLastAction(`${action} · ${file.name}`);

    return (
        <div className="w-full max-w-xl space-y-3">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {files.map((file) => (
                    <ContextMenu key={file.name}>
                        <ContextMenu.Trigger className="flex cursor-default select-none flex-col items-center gap-2 rounded-xl border border-main-700/70 bg-main-900/50 p-4 text-center transition-colors hover:border-main-600">
                            <Icon
                                icon={file.icon}
                                className="text-main-300"
                                width={32}
                                height={32}
                            />
                            <span className="w-full truncate text-sm text-main-100">
                                {file.name}
                            </span>
                            <span className="text-[11px] text-main-500">
                                {file.meta}
                            </span>
                        </ContextMenu.Trigger>
                        <ContextMenu.Content>
                            <ContextMenu.Label>{file.name}</ContextMenu.Label>
                            <ContextMenu.Item
                                leftSlot={<Icon icon="folder-open-outline" />}
                                rightSlot={<span className="text-xs">Enter</span>}
                                onClick={() => run("Open", file)}
                            >
                                Open
                            </ContextMenu.Item>
                            <ContextMenu.Item
                                leftSlot={<Icon icon="pencil-outline" />}
                                rightSlot={<span className="text-xs">F2</span>}
                                onClick={() => run("Rename", file)}
                            >
                                Rename
                            </ContextMenu.Item>
                            <ContextMenu.Sub>
                                <ContextMenu.SubTrigger
                                    leftSlot={<Icon icon="link-variant" />}
                                >
                                    Share
                                </ContextMenu.SubTrigger>
                                <ContextMenu.SubContent sideOffset={4}>
                                    <ContextMenu.Item
                                        leftSlot={<Icon icon="content-copy" />}
                                        onClick={() => run("Copy link", file)}
                                    >
                                        Copy link
                                    </ContextMenu.Item>
                                    <ContextMenu.Item
                                        leftSlot={<Icon icon="email-outline" />}
                                        onClick={() => run("Send by email", file)}
                                    >
                                        Send by email
                                    </ContextMenu.Item>
                                </ContextMenu.SubContent>
                            </ContextMenu.Sub>
                            <ContextMenu.Item
                                leftSlot={<Icon icon="download" />}
                                onClick={() => run("Download", file)}
                            >
                                Download
                            </ContextMenu.Item>
                            <ContextMenu.Separator />
                            <ContextMenu.ItemDanger
                                leftSlot={<Icon icon="trash-can-outline" />}
                                rightSlot={<span className="text-xs">Del</span>}
                                onClick={() => run("Move to trash", file)}
                            >
                                Move to trash
                            </ContextMenu.ItemDanger>
                        </ContextMenu.Content>
                    </ContextMenu>
                ))}
            </div>
            <p className="font-mono text-xs text-main-500">{lastAction}</p>
        </div>
    );
}
```

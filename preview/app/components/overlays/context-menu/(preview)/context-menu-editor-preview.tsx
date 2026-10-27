"use client";
import { ContextMenu, Icon, Kbd } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

const highlights = [
    { value: "none", label: "No highlight", className: "" },
    { value: "yellow", label: "Yellow", className: "bg-yellow-400/25" },
    { value: "green", label: "Green", className: "bg-emerald-400/25" },
    { value: "blue", label: "Blue", className: "bg-sky-400/25" },
];

export function DemoContextMenuEditor() {
    const [highlight, setHighlight] = useState("none");
    const [pinned, setPinned] = useState(false);

    const highlightClass =
        highlights.find((item) => item.value === highlight)?.className ?? "";

    return (
        <div className="grid w-full max-w-xl gap-4 sm:grid-cols-[1fr_12rem]">
            <ContextMenu>
                <ContextMenu.Trigger className="min-h-40 rounded-xl border border-main-700/70 bg-main-900/50 p-4 text-sm leading-6 text-main-200">
                    <p className="mb-2 flex items-center gap-2 text-xs text-main-500">
                        Meeting notes
                        {pinned && (
                            <span className="text-main-300">· pinned</span>
                        )}
                    </p>
                    <p className={`rounded px-1 -mx-1 ${highlightClass}`}>
                        Ship the new form-factor in 8.6, then migrate Switcher
                        to the compound API and update every preview page.
                    </p>
                </ContextMenu.Trigger>
                <ContextMenu.Content>
                    <ContextMenu.Item rightSlot={<Kbd>Ctrl X</Kbd>}>
                        Cut
                    </ContextMenu.Item>
                    <ContextMenu.Item
                        leftSlot={<Icon icon="content-copy" />}
                        rightSlot={<Kbd>Ctrl C</Kbd>}
                    >
                        Copy
                    </ContextMenu.Item>
                    <ContextMenu.Item rightSlot={<Kbd>Ctrl V</Kbd>} disabled>
                        Paste
                    </ContextMenu.Item>
                    <ContextMenu.Separator />
                    <ContextMenu.Sub fixable>
                        <ContextMenu.SubTrigger
                            leftSlot={<Icon icon="palette-outline" />}
                        >
                            Highlight
                        </ContextMenu.SubTrigger>
                        <ContextMenu.SubContent sideOffset={4}>
                            {highlights.map((item) => (
                                <ContextMenu.Item
                                    key={item.value}
                                    inset={highlight !== item.value}
                                    leftSlot={
                                        highlight === item.value ? (
                                            <Icon icon="check" />
                                        ) : undefined
                                    }
                                    onClick={() => setHighlight(item.value)}
                                >
                                    {item.label}
                                </ContextMenu.Item>
                            ))}
                        </ContextMenu.SubContent>
                    </ContextMenu.Sub>
                    <ContextMenu.Item
                        leftSlot={<Icon icon="star-outline" />}
                        onClick={() => setPinned((value) => !value)}
                    >
                        {pinned ? "Unpin note" : "Pin note"}
                    </ContextMenu.Item>
                </ContextMenu.Content>
            </ContextMenu>
            <ContextMenu>
                <ContextMenu.Trigger
                    disabled
                    className="flex min-h-40 items-center justify-center rounded-xl border border-dashed border-main-700 p-4 text-center text-xs text-main-500"
                >
                    Disabled trigger: the browser menu opens instead
                </ContextMenu.Trigger>
                <ContextMenu.Content>
                    <ContextMenu.Item>Never shown</ContextMenu.Item>
                </ContextMenu.Content>
            </ContextMenu>
        </div>
    );
}

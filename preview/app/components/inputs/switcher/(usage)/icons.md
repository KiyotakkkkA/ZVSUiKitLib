```tsx
"use client";
import { Switcher, Tooltip } from "@kiyotakkkka/zvs-uikit-lib";
import {
    mdiFormatAlignCenter,
    mdiFormatAlignJustify,
    mdiFormatAlignLeft,
    mdiFormatAlignRight,
    mdiFormatListBulleted,
    mdiMonitor,
    mdiViewColumnOutline,
    mdiViewGridOutline,
    mdiWeatherNight,
    mdiWhiteBalanceSunny,
} from "@mdi/js";
import { useState } from "react";

function MdiIcon({ path }: { path: string }) {
    return (
        <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
            <path d={path} />
        </svg>
    );
}

const alignments = [
    { value: "left", label: "Align left", path: mdiFormatAlignLeft },
    { value: "center", label: "Align center", path: mdiFormatAlignCenter },
    { value: "right", label: "Align right", path: mdiFormatAlignRight },
    { value: "justify", label: "Justify", path: mdiFormatAlignJustify },
];

export function DemoSwitcherIcons() {
    const [view, setView] = useState("grid");
    const [theme, setTheme] = useState("system");
    const [align, setAlign] = useState("left");

    return (
        <div className="w-full max-w-md space-y-6">
            <div className="grid gap-3 border-b border-main-700/70 pb-6 md:grid-cols-[7rem_1fr]">
                <span className="font-mono text-xs text-main-500">
                    View mode
                </span>
                <Switcher.Root
                    model={view}
                    onModelChange={setView}
                    label="Board view"
                >
                    <Switcher.Option value="list">
                        <MdiIcon path={mdiFormatListBulleted} />
                        List
                    </Switcher.Option>
                    <Switcher.Option value="grid">
                        <MdiIcon path={mdiViewGridOutline} />
                        Grid
                    </Switcher.Option>
                    <Switcher.Option value="board">
                        <MdiIcon path={mdiViewColumnOutline} />
                        Board
                    </Switcher.Option>
                </Switcher.Root>
            </div>
            <div className="grid gap-3 border-b border-main-700/70 pb-6 md:grid-cols-[7rem_1fr]">
                <span className="font-mono text-xs text-main-500">Theme</span>
                <Switcher.Root
                    model={theme}
                    onModelChange={setTheme}
                    label="Color theme"
                    rounded="rounded-full"
                >
                    <Switcher.Option value="light" aria-label="Light theme">
                        <MdiIcon path={mdiWhiteBalanceSunny} />
                    </Switcher.Option>
                    <Switcher.Option value="dark" aria-label="Dark theme">
                        <MdiIcon path={mdiWeatherNight} />
                    </Switcher.Option>
                    <Switcher.Option value="system" aria-label="System theme">
                        <MdiIcon path={mdiMonitor} />
                    </Switcher.Option>
                </Switcher.Root>
            </div>
            <div className="grid gap-3 md:grid-cols-[7rem_1fr]">
                <span className="font-mono text-xs text-main-500">
                    Toolbar + tooltip
                </span>
                <Switcher.Root
                    model={align}
                    onModelChange={setAlign}
                    label="Text alignment"
                    rounded="rounded-md"
                >
                    {alignments.map((item) => (
                        <Tooltip key={item.value} label={item.label}>
                            <Switcher.Option
                                value={item.value}
                                aria-label={item.label}
                                className="px-2"
                            >
                                <MdiIcon path={item.path} />
                            </Switcher.Option>
                        </Tooltip>
                    ))}
                </Switcher.Root>
            </div>
        </div>
    );
}
```

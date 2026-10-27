```tsx
"use client";
import { Switcher } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoSwitcher() {
    const [tab, setTab] = useState("all");
    const [period, setPeriod] = useState("day");

    return (
        <div className="w-full max-w-sm space-y-6">
            <div className="grid gap-3 border-b border-main-700/70 pb-6 md:grid-cols-[6rem_1fr]">
                <span className="font-mono text-xs text-main-500">Default</span>
                <Switcher.Root model={period} onModelChange={setPeriod}>
                    <Switcher.Option value="day">Day</Switcher.Option>
                    <Switcher.Option value="week">Week</Switcher.Option>
                    <Switcher.Option value="month">Month</Switcher.Option>
                </Switcher.Root>
            </div>
            <div className="grid gap-3 md:grid-cols-[6rem_1fr]">
                <span className="font-mono text-xs text-main-500">Pill</span>
                <Switcher.Root
                    model={tab}
                    onModelChange={setTab}
                    rounded="rounded-full"
                >
                    <Switcher.Option value="all">All</Switcher.Option>
                    <Switcher.Option value="active">Active</Switcher.Option>
                    <Switcher.Option value="done">Done</Switcher.Option>
                </Switcher.Root>
            </div>
        </div>
    );
}
```

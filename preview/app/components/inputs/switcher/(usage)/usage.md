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
                <span className="font-mono text-xs text-main-500">Pill</span>
                <Switcher
                    value={tab}
                    onChange={setTab}
                    options={[
                        { value: "all", label: "All" },
                        { value: "active", label: "Active" },
                        { value: "done", label: "Done" },
                    ]}
                />
            </div>
            <div className="grid gap-3 md:grid-cols-[6rem_1fr]">
                <span className="font-mono text-xs text-main-500">Rounded</span>
                <Switcher
                    value={period}
                    onChange={setPeriod}
                    rounded="rounded-md"
                    options={[
                        { value: "day", label: "Day" },
                        { value: "week", label: "Week" },
                        { value: "month", label: "Month" },
                    ]}
                />
            </div>
        </div>
    );
}
```

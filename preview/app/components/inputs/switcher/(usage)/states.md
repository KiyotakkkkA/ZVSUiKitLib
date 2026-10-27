```tsx
"use client";
import { Switcher } from "@kiyotakkkka/zvs-uikit-lib";
import {
    mdiCellphone,
    mdiCodeTags,
    mdiEyeOutline,
    mdiLaptop,
    mdiTablet,
} from "@mdi/js";
import { useState } from "react";

function MdiIcon({ path }: { path: string }) {
    return (
        <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
            <path d={path} />
        </svg>
    );
}

export function DemoSwitcherStates() {
    const [mode, setMode] = useState("preview");
    const [device, setDevice] = useState("laptop");

    return (
        <div className="w-full max-w-md space-y-6">
            <div className="grid gap-3 border-b border-main-700/70 pb-6 md:grid-cols-[7rem_1fr]">
                <span className="font-mono text-xs text-main-500">
                    Editor tabs
                </span>
                <Switcher.Root
                    model={mode}
                    onModelChange={setMode}
                    label="Editor mode"
                    rounded="rounded-md"
                    className="border-transparent bg-transparent p-0"
                >
                    <Switcher.Option value="preview">
                        <MdiIcon path={mdiEyeOutline} />
                        Preview
                    </Switcher.Option>
                    <Switcher.Option value="code">
                        <MdiIcon path={mdiCodeTags} />
                        Code
                    </Switcher.Option>
                </Switcher.Root>
            </div>
            <div className="grid gap-3 md:grid-cols-[7rem_1fr]">
                <span className="font-mono text-xs text-main-500">
                    Disabled option
                </span>
                <Switcher.Root
                    model={device}
                    onModelChange={setDevice}
                    label="Preview device"
                >
                    <Switcher.Option value="phone">
                        <MdiIcon path={mdiCellphone} />
                        Phone
                    </Switcher.Option>
                    <Switcher.Option value="tablet" disabled>
                        <MdiIcon path={mdiTablet} />
                        Tablet
                    </Switcher.Option>
                    <Switcher.Option value="laptop">
                        <MdiIcon path={mdiLaptop} />
                        Laptop
                    </Switcher.Option>
                </Switcher.Root>
            </div>
        </div>
    );
}
```

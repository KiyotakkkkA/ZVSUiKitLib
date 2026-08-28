```tsx
"use client";
import { InputCheckSlided } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoInputCheckSlided() {
    const [enabled, setEnabled] = useState(true);

    return (
        <div className="flex flex-wrap items-center gap-8">
            <div className="flex flex-col items-center gap-3">
                <InputCheckSlided checked={enabled} onChange={setEnabled} />
                <span className="font-mono text-xs text-main-500">On</span>
            </div>
            <div className="flex flex-col items-center gap-3">
                <InputCheckSlided checked={false} onChange={() => {}} />
                <span className="font-mono text-xs text-main-500">Off</span>
            </div>
            <div className="flex flex-col items-center gap-3">
                <InputCheckSlided checked disabled onChange={() => {}} />
                <span className="font-mono text-xs text-main-500">
                    Disabled on
                </span>
            </div>
            <div className="flex flex-col items-center gap-3">
                <InputCheckSlided
                    checked={false}
                    disabled
                    onChange={() => {}}
                />
                <span className="font-mono text-xs text-main-500">
                    Disabled off
                </span>
            </div>
        </div>
    );
}
```

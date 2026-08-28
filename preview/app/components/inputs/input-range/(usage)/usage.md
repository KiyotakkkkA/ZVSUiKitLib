```tsx
"use client";
import { useState } from "react";
import { InputRange } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoInputRange() {
    const [value, setValue] = useState<[number, number]>([20, 80]);

    return (
        <div className="w-64 space-y-6">
            <div className="space-y-2">
                <span className="font-mono text-xs text-main-500">
                    Interactive
                </span>
                <InputRange
                    className="w-full"
                    min={0}
                    max={100}
                    value={value}
                    onChange={setValue}
                />
            </div>
            <div className="space-y-2">
                <span className="font-mono text-xs text-main-500">
                    Disabled
                </span>
                <InputRange
                    className="w-full"
                    min={0}
                    max={100}
                    value={[30, 60]}
                    onChange={() => {}}
                    disabled
                />
            </div>
        </div>
    );
}
```

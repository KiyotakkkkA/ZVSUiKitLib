```tsx
"use client";
import { useState } from "react";
import { InputSlider } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoInputSlider() {
    const [value, setValue] = useState(40);

    return (
        <div className="w-64 space-y-6">
            <div className="space-y-2">
                <span className="font-mono text-xs text-main-500">
                    Interactive
                </span>
                <InputSlider
                    value={value}
                    onChange={setValue}
                    min={0}
                    max={100}
                    step={5}
                    showValue
                    className="w-full"
                    valueFormatter={(next) => `${next}%`}
                />
            </div>
            <div className="space-y-2">
                <span className="font-mono text-xs text-main-500">
                    Disabled
                </span>
                <InputSlider
                    value={65}
                    onChange={() => {}}
                    disabled
                    showValue
                    className="w-full"
                    valueFormatter={(next) => `${next}%`}
                />
            </div>
        </div>
    );
}
```

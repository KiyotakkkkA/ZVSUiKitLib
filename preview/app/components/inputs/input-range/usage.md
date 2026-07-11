```tsx
"use client";
import { useState } from "react";
import { InputRange } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoInputRange() {
    const [value, setValue] = useState<[number, number]>([20, 80]);

    return (
        <InputRange
            value={value}
            onChange={setValue}
            min={0}
            max={100}
            step={5}
            showValue
            className="w-64"
            valueFormatter={(next) => `${next}%`}
        />
    );
}
```

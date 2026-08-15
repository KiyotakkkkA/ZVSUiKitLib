```tsx
"use client";
import { useState } from "react";
import { InputRange } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoInputRange() {
    const [value, setValue] = useState<[number, number]>([20, 80]);
    return (
        <InputRange
            className="w-64"
            min={0}
            max={100}
            value={value}
            onChange={setValue}
        />
    );
}
```

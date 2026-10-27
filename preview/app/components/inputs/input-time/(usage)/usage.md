```tsx
"use client";
import { InputTime } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoInputTime() {
    const [time, setTime] = useState<string | null>("09:30");

    return (
        <div className="grid w-full max-w-2xl gap-6 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
                <span className="font-mono text-xs text-main-500">
                    clearable · {time ?? "null"}
                </span>
                <InputTime value={time} onChange={setTime} clearable />
            </div>
            <div className="flex flex-col gap-2">
                <span className="font-mono text-xs text-main-500">
                    minuteStep 15 · closeOnSelect
                </span>
                <InputTime minuteStep={15} closeOnSelect />
            </div>
            <div className="flex flex-col gap-2">
                <span className="font-mono text-xs text-main-500">
                    disabled
                </span>
                <InputTime defaultValue="18:00" disabled />
            </div>
        </div>
    );
}
```

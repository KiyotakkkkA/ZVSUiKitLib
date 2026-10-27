```tsx
"use client";
import { InputDatetime } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoInputDatetime() {
    const [date, setDate] = useState<Date | null>(null);

    return (
        <div className="grid w-full max-w-2xl gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
                <span className="font-mono text-xs text-main-500">
                    clearable · minuteStep 5
                </span>
                <InputDatetime
                    value={date}
                    onChange={setDate}
                    clearable
                    minuteStep={5}
                />
            </div>
            <div className="flex flex-col gap-2">
                <span className="font-mono text-xs text-main-500">
                    disabled
                </span>
                <InputDatetime defaultValue={new Date()} disabled />
            </div>
        </div>
    );
}
```

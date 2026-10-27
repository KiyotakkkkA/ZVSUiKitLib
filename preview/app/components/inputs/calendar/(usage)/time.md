```tsx
"use client";

import { Calendar } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoCalendarTime() {
    const [date, setDate] = useState<Date | null>(() => {
        const initial = new Date();
        initial.setHours(14, 30, 0, 0);
        return initial;
    });

    return (
        <div className="flex flex-col items-start gap-3">
            <Calendar
                value={date}
                onChange={setDate}
                enableTime
                minuteStep={5}
            />
            <span className="font-mono text-xs text-main-500">
                {date ? date.toLocaleString("ru-RU") : "null"}
            </span>
        </div>
    );
}
```

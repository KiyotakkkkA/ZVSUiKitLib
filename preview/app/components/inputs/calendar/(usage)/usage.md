```tsx
"use client";

import { Calendar } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoCalendar() {
    const [date, setDate] = useState<Date | null>(new Date());
    const today = new Date();

    return (
        <Calendar
            value={date}
            onChange={setDate}
            minDate={new Date(2020, 0, 1)}
            maxDate={new Date()}
            allowDeselect
            disabledDates={[
                new Date(
                    today.getFullYear(),
                    today.getMonth(),
                    today.getDate() - 3,
                ),
                new Date(
                    today.getFullYear(),
                    today.getMonth(),
                    today.getDate() - 7,
                ),
            ]}
        />
    );
}
```

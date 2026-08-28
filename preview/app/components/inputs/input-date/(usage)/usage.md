```tsx
"use client";
import { InputDate } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoInputDate() {
    const [date, setDate] = useState<Date | null>(null);

    return (
        <div className="flex flex-wrap items-start gap-8">
            <InputDate
                value={date}
                onChange={setDate}
                clearable
                closeOnSelect
                placeholder="Выберите дату"
            />
            <InputDate
                value={new Date()}
                onChange={() => {}}
                disabled
                placeholder="Выберите дату"
            />
        </div>
    );
}
```

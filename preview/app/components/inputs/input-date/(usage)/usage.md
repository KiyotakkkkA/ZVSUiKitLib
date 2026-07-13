```tsx
"use client";
import { InputDate } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoInputDate() {
    const [date, setDate] = useState<Date | null>(null);

    return (
        <InputDate
            value={date}
            onChange={setDate}
            clearable
            closeOnSelect
            placeholder="Выберите дату"
        />
    );
}
```

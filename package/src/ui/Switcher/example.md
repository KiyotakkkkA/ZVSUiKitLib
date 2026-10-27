```tsx
"use client";
import { Switcher } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoSwitcher() {
    const [period, setPeriod] = useState("week");

    return (
        <Switcher.Root model={period} onModelChange={setPeriod}>
            <Switcher.Option value="day">Day</Switcher.Option>
            <Switcher.Option value="week">Week</Switcher.Option>
            <Switcher.Option value="month">Month</Switcher.Option>
        </Switcher.Root>
    );
}
```

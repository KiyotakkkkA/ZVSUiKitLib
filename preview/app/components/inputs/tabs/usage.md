```tsx
"use client";
import { useState } from "react";
import { Tabs } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoTabs() {
    const [tab, setTab] = useState("account");

    return (
        <Tabs
            value={tab}
            onChange={setTab}
            options={[
                { value: "account", label: "Account" },
                { value: "documents", label: "Documents" },
            ]}
        />
    );
}
```

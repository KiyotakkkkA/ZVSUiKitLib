```tsx
"use client";
import { Tabs } from "@kiyotakkkka/zvs-uikit-lib";
export function TabsExample() {
    return (
        <Tabs
            value="account"
            onChange={() => {}}
            options={[
                { value: "account", label: "Account" },
                { value: "docs", label: "Documents" },
            ]}
        />
    );
}
```

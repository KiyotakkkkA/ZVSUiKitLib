```tsx
"use client";
import { Switcher } from "@kiyotakkkka/zvs-uikit-lib/ui";
export function SwitcherExample() {
    return (
        <Switcher
            value="all"
            onChange={() => {}}
            options={[
                { value: "all", label: "All" },
                { value: "done", label: "Done" },
            ]}
        />
    );
}
```

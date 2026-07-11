```tsx
"use client";
import { Select } from "@kiyotakkkka/zvs-uikit-lib/ui";
export function SelectExample() {
    return (
        <Select
            value="design"
            onChange={() => {}}
            searchable
            options={[
                { value: "design", label: "Design" },
                { value: "product", label: "Product" },
            ]}
        />
    );
}
```

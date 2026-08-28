```tsx
"use client";
import { useState } from "react";
import { SelectNative } from "@kiyotakkkka/zvs-uikit-lib/server";

export function DemoSelectNative() {
    const [value, setValue] = useState("gray");
    const [value2, setValue2] = useState("");

    return (
        <div className="flex flex-wrap items-center gap-8">
            <SelectNative
                value={value}
                onChange={setValue}
                options={[
                    { value: "gray", label: "Gray" },
                    { value: "blue", label: "Blue" },
                ]}
            />
            <SelectNative
                value={value2}
                onChange={setValue2}
                placeholder="Choose a plan"
                rounded="rounded-md"
                options={[
                    { value: "basic", label: "Basic" },
                    { value: "pro", label: "Pro" },
                ]}
            />
        </div>
    );
}
```

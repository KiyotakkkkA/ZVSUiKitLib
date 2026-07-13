```tsx
"use client";
import { useState } from "react";
import { AutoFillSelector } from "@kiyotakkkka/zvs-uikit-lib";

const options = [
    { value: "react", label: "React" },
    { value: "ts", label: "TypeScript" },
    { value: "vite", label: "Vite" },
];

export function DemoAutoFillSelectorNoDesc() {
    const [tags, setTags] = useState<string[]>(["react"]);

    return (
        <AutoFillSelector value={tags} onChange={setTags} options={options}>
            <AutoFillSelector.Trigger>
                <AutoFillSelector.Tags />
                <AutoFillSelector.Input placeholder="Select technologies" />
            </AutoFillSelector.Trigger>

            <AutoFillSelector.Menu>
                <AutoFillSelector.Options />
                <AutoFillSelector.Empty />
            </AutoFillSelector.Menu>
        </AutoFillSelector>
    );
}
```

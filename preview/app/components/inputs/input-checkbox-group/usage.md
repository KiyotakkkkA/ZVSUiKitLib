```tsx
"use client";
import { InputCheckBox, InputCheckBoxGroup } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function Example() {
    const [model, setModel] = useState({ email: false, sms: false });

    return (
        <InputCheckBoxGroup
            model={model}
            onModelChange={setModel}
            default="email"
            multiple
        >
            <InputCheckBox modelValue="email" />
            <InputCheckBox modelValue="sms" />
        </InputCheckBoxGroup>
    );
}
```

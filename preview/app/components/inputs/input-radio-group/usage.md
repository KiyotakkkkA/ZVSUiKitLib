```tsx
"use client";
import { InputRadio, InputRadioGroup } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function Example() {
    const [model, setModel] = useState({ email: false, phone: false });

    return (
        <InputRadioGroup model={model} onModelChange={setModel} default="email">
            <InputRadio modelValue="email" />
            <InputRadio modelValue="phone" />
        </InputRadioGroup>
    );
}
```

## Example

```tsx
"use client";
import { InputRadio, InputRadioGroup } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

type ContactModel = {
    email: boolean;
    phone: boolean;
};

export function DemoInputRadioGroup() {
    const [model, setModel] = useState<ContactModel>({
        email: false,
        phone: false,
    });

    return (
        <InputRadioGroup
            model={model}
            onModelChange={setModel}
            default="email"
            name="contact"
        >
            <InputRadio modelValue="email" />
            <InputRadio modelValue="phone" />
        </InputRadioGroup>
    );
}
```

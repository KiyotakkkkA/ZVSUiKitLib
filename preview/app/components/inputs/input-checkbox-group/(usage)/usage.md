```tsx
"use client";
import { InputCheckBox, InputCheckBoxGroup } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

type NotificationModel = { email: boolean; sms: boolean };
export function DemoInputCheckBoxGroup() {
    const [model, setModel] = useState<NotificationModel>({ email: false, sms: false });
    return <InputCheckBoxGroup model={model} onModelChange={setModel} default="email" multiple>
        <InputCheckBox modelValue="email">Email</InputCheckBox>
        <InputCheckBox modelValue="sms">SMS</InputCheckBox>
    </InputCheckBoxGroup>;
}
```

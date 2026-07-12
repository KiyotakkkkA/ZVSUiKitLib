```tsx
"use client";
import { InputCheckBox } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoInputCheckBox() {
    const [checked, setChecked] = useState(false);

    return (
        <InputCheckBox checked={checked} onChange={setChecked}>
            Получать уведомления
        </InputCheckBox>
    );
}
```

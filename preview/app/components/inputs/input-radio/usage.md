```tsx
"use client";
import { InputRadio } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoInputRadio() {
    const [value, setValue] = useState("email");

    return (
        <div className="space-x-4">
            <InputRadio
                name="contact"
                checked={value === "email"}
                onChange={() => setValue("email")}
            >
                Email
            </InputRadio>
            <InputRadio
                name="contact"
                checked={value === "phone"}
                onChange={() => setValue("phone")}
            >
                Телефон
            </InputRadio>
        </div>
    );
}
```

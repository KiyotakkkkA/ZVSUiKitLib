```tsx
"use client";
import { InputRadio } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoInputRadio() {
    const [value, setValue] = useState("email");

    return (
        <div className="flex flex-wrap items-center gap-8">
            <div className="flex flex-col gap-3">
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
                    Phone
                </InputRadio>
            </div>
            <InputRadio checked disabled onChange={() => {}}>
                Disabled
            </InputRadio>
        </div>
    );
}
```

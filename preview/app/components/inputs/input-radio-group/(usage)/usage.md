```tsx
"use client";
import { InputRadio, InputRadioGroup } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

type ContactModel = { email: boolean; phone: boolean; mail: boolean };

export function DemoInputRadioGroup() {
    const [model, setModel] = useState<ContactModel>({
        email: false,
        phone: false,
        mail: false,
    });

    return (
        <div className="w-full max-w-sm space-y-6">
            <div className="grid gap-3 border-b border-main-700/70 pb-6 md:grid-cols-[6rem_1fr]">
                <span className="font-mono text-xs text-main-500">
                    Horizontal
                </span>
                <InputRadioGroup
                    model={model}
                    onModelChange={setModel}
                    default="email"
                    name="contact"
                >
                    <InputRadio modelValue="email">Email</InputRadio>
                    <InputRadio modelValue="phone">Phone</InputRadio>
                </InputRadioGroup>
            </div>
            <div className="grid gap-3 md:grid-cols-[6rem_1fr]">
                <span className="font-mono text-xs text-main-500">
                    Vertical, disabled
                </span>
                <InputRadioGroup
                    model={model}
                    onModelChange={setModel}
                    default="email"
                    name="contact-disabled"
                    orientation="vertical"
                    disabled
                >
                    <InputRadio modelValue="email">Email</InputRadio>
                    <InputRadio modelValue="phone">Phone</InputRadio>
                    <InputRadio modelValue="mail">Mail</InputRadio>
                </InputRadioGroup>
            </div>
        </div>
    );
}
```

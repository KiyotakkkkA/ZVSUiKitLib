"use client";

import { InputRadio, InputRadioGroup } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoInputRadioGroup() {
    const [model, setModel] = useState({ email: false, phone: false });

    return (
        <InputRadioGroup model={model} onModelChange={setModel} default="email">
            <div className="flex items-center gap-2 text-sm">
                <InputRadio modelValue="email" /> Email
            </div>
            <div className="flex items-center gap-2 text-sm">
                <InputRadio modelValue="phone" /> Phone
            </div>
        </InputRadioGroup>
    );
}

"use client";

import { InputCheckBox, InputCheckBoxGroup } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoInputCheckBoxGroup() {
    const [model, setModel] = useState({ email: false, sms: false });

    return (
        <InputCheckBoxGroup
            model={model}
            onModelChange={setModel}
            default="email"
            multiple
        >
            <div className="flex items-center gap-2 text-sm">
                <InputCheckBox modelValue="email" id="email" /> Email
            </div>
            <div className="flex items-center gap-2 text-sm">
                <InputCheckBox modelValue="sms" /> SMS
            </div>
        </InputCheckBoxGroup>
    );
}

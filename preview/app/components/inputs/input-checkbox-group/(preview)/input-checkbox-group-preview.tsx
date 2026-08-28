"use client";
import { InputCheckBox, InputCheckBoxGroup } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

type NotificationModel = { email: boolean; sms: boolean; push: boolean };

export function DemoInputCheckBoxGroup() {
    const [model, setModel] = useState<NotificationModel>({
        email: false,
        sms: false,
        push: false,
    });

    return (
        <div className="w-full max-w-sm space-y-6">
            <div className="grid gap-3 border-b border-main-700/70 pb-6 md:grid-cols-[6rem_1fr]">
                <span className="font-mono text-xs text-main-500">
                    Horizontal
                </span>
                <InputCheckBoxGroup
                    model={model}
                    onModelChange={setModel}
                    default="email"
                    multiple
                >
                    <InputCheckBox modelValue="email">Email</InputCheckBox>
                    <InputCheckBox modelValue="sms">SMS</InputCheckBox>
                    <InputCheckBox modelValue="push">Push</InputCheckBox>
                </InputCheckBoxGroup>
            </div>
            <div className="grid gap-3 md:grid-cols-[6rem_1fr]">
                <span className="font-mono text-xs text-main-500">
                    Vertical, disabled
                </span>
                <InputCheckBoxGroup
                    model={model}
                    onModelChange={setModel}
                    default="email"
                    multiple
                    orientation="vertical"
                    disabled
                >
                    <InputCheckBox modelValue="email">Email</InputCheckBox>
                    <InputCheckBox modelValue="sms">SMS</InputCheckBox>
                    <InputCheckBox modelValue="push">Push</InputCheckBox>
                </InputCheckBoxGroup>
            </div>
        </div>
    );
}

"use client";
import { InputCheckBox } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoInputCheckBox() {
    const [checked, setChecked] = useState(false);

    return (
        <div className="flex flex-wrap items-center gap-8">
            <div className="flex flex-col items-center gap-3">
                <InputCheckBox checked={checked} onChange={setChecked} />
                <span className="font-mono text-xs text-main-500">
                    Unchecked
                </span>
            </div>
            <div className="flex flex-col items-center gap-3">
                <InputCheckBox checked onChange={() => {}} />
                <span className="font-mono text-xs text-main-500">
                    Checked
                </span>
            </div>
            <div className="flex flex-col items-center gap-3">
                <InputCheckBox checked={false} disabled onChange={() => {}} />
                <span className="font-mono text-xs text-main-500">
                    Disabled
                </span>
            </div>
            <div className="flex flex-col items-center gap-3">
                <InputCheckBox checked disabled onChange={() => {}} />
                <span className="font-mono text-xs text-main-500">
                    Disabled checked
                </span>
            </div>
        </div>
    );
}

"use client";
import { InputCheckBox } from "@kiyotakkkka/zvs-uikit-lib/ui";
import { useState } from "react";
export function InputCheckBoxPreview() {
    const [v, setV] = useState(true);
    return (
        <label style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <InputCheckBox checked={v} onChange={setV} />
            Receive notifications
        </label>
    );
}

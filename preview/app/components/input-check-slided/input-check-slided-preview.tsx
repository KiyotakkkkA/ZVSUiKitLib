"use client";
import { InputCheckSlided } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";
export function InputCheckSlidedPreview() {
    const [v, setV] = useState(true);
    return (
        <label style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <InputCheckSlided checked={v} onChange={setV} />
            Automatic updates
        </label>
    );
}

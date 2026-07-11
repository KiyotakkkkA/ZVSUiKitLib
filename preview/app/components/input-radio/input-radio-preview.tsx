"use client";
import { InputRadio } from "@kiyotakkkka/zvs-uikit-lib/ui";
import { useState } from "react";
export function InputRadioPreview() {
    const [v, setV] = useState("one");
    return (
        <div style={{ display: "flex", gap: 18 }}>
            {["one", "two"].map((x) => (
                <label key={x} style={{ display: "flex", gap: 8 }}>
                    <InputRadio checked={v === x} onChange={() => setV(x)} />
                    {x}
                </label>
            ))}
        </div>
    );
}

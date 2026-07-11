"use client";
import { InputBig } from "@kiyotakkkka/zvs-uikit-lib/ui";
import { useState } from "react";
export function InputBigPreview() {
    const [v, setV] = useState("");
    return (
        <InputBig
            value={v}
            onChange={(e) => setV(e.target.value)}
            placeholder="Write a description"
        />
    );
}

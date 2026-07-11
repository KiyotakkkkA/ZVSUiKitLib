"use client";
import { InputColor } from "@kiyotakkkka/zvs-uikit-lib/ui";
import { useState } from "react";
export function InputColorPreview() {
    const [v, setV] = useState("#6366F1");
    return (
        <InputColor
            label="Accent color"
            value={v}
            onChange={setV}
            palettePresets={["#6366F1", "#22C55E", "#EAB308", "#EF4444"]}
        />
    );
}

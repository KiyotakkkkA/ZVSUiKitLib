"use client";

import { useState } from "react";
import { InputColor } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoInputColor() {
    const [color, setColor] = useState("#8B5CF6");

    return (
        <div className="flex flex-wrap items-end gap-8">
            <InputColor
                label="Small"
                size="sm"
                value={color}
                onChange={setColor}
                palettePresets={[
                    "#8B5CF6",
                    "#3B82F6",
                    "#10B981",
                    "#F59E0B",
                    "#EF4444",
                ]}
            />
            <InputColor
                label="Medium"
                value={color}
                onChange={setColor}
                palettePresets={[
                    "#8B5CF6",
                    "#3B82F6",
                    "#10B981",
                    "#F59E0B",
                    "#EF4444",
                ]}
            />
            <InputColor
                label="Disabled"
                value="#8B5CF6"
                onChange={() => {}}
                disabled
            />
        </div>
    );
}

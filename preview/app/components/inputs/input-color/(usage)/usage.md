```tsx
"use client";

import { useState } from "react";
import { InputColor } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoInputColor() {
    const [color, setColor] = useState("#8B5CF6");

    return (
        <InputColor
            label="Accent color"
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
    );
}
```

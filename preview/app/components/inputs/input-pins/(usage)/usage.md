```tsx
"use client";
import { useState } from "react";
import { InputPins } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoInputPins() {
    const [pin, setPin] = useState("");

    return <InputPins value={pin} onChange={setPin} label="Pin Input" />;
}
```


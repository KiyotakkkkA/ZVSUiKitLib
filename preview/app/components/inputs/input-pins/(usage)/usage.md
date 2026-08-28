```tsx
"use client";
import { useState } from "react";
import { InputPins } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoInputPins() {
    const [pin, setPin] = useState("");
    const [otp, setOtp] = useState("1234");

    return (
        <div className="flex flex-wrap items-start gap-10">
            <InputPins value={pin} onChange={setPin} label="Pin Input" />
            <InputPins
                value={otp}
                onChange={setOtp}
                mask
                label="Masked"
            />
            <InputPins
                value="12"
                onChange={() => {}}
                disabled
                label="Disabled"
            />
        </div>
    );
}
```

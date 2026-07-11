```tsx
"use client";
import { InputSmall } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoInputSmall() {
    const [email, setEmail] = useState("");

    return (
        <InputSmall
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
        />
    );
}
```

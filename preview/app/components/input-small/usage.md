```tsx
import { InputSmall } from "@kiyotakkkka/zvs-uikit-lib/ui";
import { useState } from "react";

export function EmailField() {
    const [email, setEmail] = useState("");

    return (
        <InputSmall
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="you@company.com"
            autoComplete="email"
        />
    );
}
```

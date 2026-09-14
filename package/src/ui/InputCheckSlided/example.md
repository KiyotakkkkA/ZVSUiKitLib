```tsx
"use client";
import { InputCheckSlided } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoInputCheckSlided() {
    const [enabled, setEnabled] = useState(true);

    return (
        <InputCheckSlided
            variant="success"
            checked={enabled}
            onChange={setEnabled}
        >
            Enable notifications
        </InputCheckSlided>
    );
}
```

`variant` colors the checked track and thumb. Available values: `primary`,
`secondary` (default), `tertiary`, `success`, `warning`, `danger`, and `info`.
Unchecked switches use neutral colors. Override individual slots with
`classNames.control` and `classNames.thumb`.

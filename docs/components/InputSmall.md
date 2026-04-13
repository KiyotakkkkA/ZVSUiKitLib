# InputSmall

## Purpose

Compact single-line input. For `type="password"`, it includes a built-in show/hide toggle.

## Props

Supports all standard `input` props (`value`, `onChange`, `placeholder`, `type`, etc.).

| Prop      | Type   | Default | Description                                            |
| --------- | ------ | ------- | ------------------------------------------------------ |
| className | string | `""`    | Extra classes for input element.                       |
| type      | string | -       | Input type. `password` enables visibility toggle icon. |

## Example

```tsx
import { InputSmall } from "@kiyotakkkka/zvs-uikit-lib/ui";
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

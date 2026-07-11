# InputSmall

## Purpose

Compact single-line input. For `type="password"`, it includes a built-in show/hide toggle.

## Import

```tsx
import { InputSmall } from "@kiyotakkkka/zvs-uikit-lib";
```

## Props

| Prop       | Type   | Default | Description                                            |
| ---------- | ------ | ------- | ------------------------------------------------------ |
| className  | string | -       | Extra classes for input element.                       |
| classNames | object | -       | Classes for internal slots.                            |
| type       | string | -       | Input type. `password` enables visibility toggle icon. |

### `classNames` slots

| Slot    | Description                 |
| ------- | --------------------------- |
| wrapper | Outer wrapper classes.      |
| icon    | Password toggle icon class. |

## Example

```tsx
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

# InputBig

## Purpose

Multiline text input based on `textarea`.

## Import

```tsx
import { InputBig } from "@kiyotakkkka/zvs-uikit-lib/ui";
```

## Props

Supports all standard `textarea` props (`value`, `onChange`, `rows`, `placeholder`, etc.).

| Prop      | Type   | Default | Description    |
| --------- | ------ | ------- | -------------- |
| className | string | -       | Extra classes. |

## Example

```tsx
import { InputBig } from "@kiyotakkkka/zvs-uikit-lib/ui";
import { useState } from "react";

export function DemoInputBig() {
    const [text, setText] = useState("");

    return (
        <InputBig
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Comment"
            rows={4}
        />
    );
}
```

# InputBig

## Purpose

Multiline text input based on `textarea`.

## Import

```tsx
import { InputBig } from "@kiyotakkkka/zvs-uikit-lib";
```

## Props

| Prop        | Type               | Default | Description                                                      |
| ----------- | ------------------ | ------- | ---------------------------------------------------------------- |
| label       | ReactNode          | -       | Accessible label displayed above the textarea.                   |
| description | ReactNode          | -       | Supporting text displayed below the textarea.                    |
| error       | ReactNode          | -       | Error message and invalid visual state.                          |
| showCount   | boolean            | `false` | Shows the current character count.                               |
| autoResize  | boolean            | `false` | Grows with content until `maxRows` is reached.                   |
| minRows     | number             | `3`     | Initial/minimum row count.                                       |
| maxRows     | number             | `10`    | Maximum row count in auto-resize mode.                           |
| className   | string             | -       | Extra textarea classes.                                          |
| classNames  | InputBigClassNames | -       | Classes for root, label, textarea, footer, message, and counter. |

All native `textarea` attributes are supported.

## Example

```tsx
"use client";
import { InputBig } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoInputBig() {
    const [text, setText] = useState("");

    return (
        <InputBig
            value={text}
            onChange={(e) => setText(e.target.value)}
            label="Комментарий"
            description="Добавьте контекст, который поможет быстрее разобраться."
            placeholder="Введите комментарий…"
            maxLength={500}
            showCount
            autoResize
        />
    );
}
```

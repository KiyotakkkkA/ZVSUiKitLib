# InputPins

## Purpose

Segmented input for PIN, OTP, or short confirmation codes.

## Import

```tsx
import { InputPins } from "@kiyotakkkka/zvs-uikit-lib";
```

## Props

| Prop       | Type              | Default | Description                                                         |
| ---------- | ----------------- | ------- | ------------------------------------------------------------------- |
| value      | string            | -       | Current PIN value.                                                  |
| onChange   | `(value) => void` | -       | Called with the positional value; empty preceding cells are spaces. |
| length     | number            | `4`     | Number of input cells.                                              |
| label      | string            | -       | Optional label under the cells.                                     |
| disabled   | boolean           | `false` | Disables all cells.                                                 |
| mask       | boolean           | `false` | Uses password inputs.                                               |
| className  | string            | -       | Wrapper classes.                                                    |
| classNames | object            | -       | Internal slot classes.                                              |

## Example

```tsx
"use client";
import { useState } from "react";
import { InputPins } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoInputPins() {
    const [pin, setPin] = useState("");

    return <InputPins value={pin} onChange={setPin} label="Pin Input" />;
}
```

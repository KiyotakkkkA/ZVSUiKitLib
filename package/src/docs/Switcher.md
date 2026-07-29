# Switcher

## Table of contents

- [Import](#import)
- [API](#api)
    - [SwitcherOption](#switcheroption)
    - [Switcher](#switcher)
        - [SwitcherClassNames](#switcherclassnames)
- [Example](#example)

## Import

```tsx
import { Switcher } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### SwitcherOption

| Property | Type     | Default | Required | Description                      |
| -------- | -------- | ------- | -------- | -------------------------------- |
| `value`  | `string` | -       | Yes      | The value used by the component. |
| `label`  | `string` | -       | Yes      | Text used for the label.         |

### Switcher

| Property     | Type                                           | Default          | Required | Description                                        |
| ------------ | ---------------------------------------------- | ---------------- | -------- | -------------------------------------------------- |
| `value`      | `string`                                       | -                | Yes      | The value used by the component.                   |
| `options`    | `SwitcherOption[]`                             | -                | Yes      | The options used by the component.                 |
| `onChange`   | `(value: string) => void`                      | -                | Yes      | Callback invoked when change occurs.               |
| `className`  | `DivClassName`                                 | -                | No       | CSS classes applied to the root element.           |
| `classNames` | `SwitcherClassNames`                           | -                | No       | CSS classes applied to the component slots.        |
| `rounded`    | [RoundVariants](./dict.md#roundvariants) \| "" | `"rounded-full"` | No       | The border-radius preset applied to the component. |

### SwitcherClassNames

| Property | Description                    |
| -------- | ------------------------------ |
| `tab`    | The tab used by the component. |

## Example

```tsx
"use client";
import { Switcher } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoSwitcher() {
    const [tab, setTab] = useState("all");

    return (
        <Switcher
            value={tab}
            onChange={setTab}
            options={[
                { value: "all", label: "All" },
                { value: "active", label: "Active" },
                { value: "done", label: "Done" },
            ]}
        />
    );
}
```

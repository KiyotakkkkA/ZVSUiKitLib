# Switcher

## Purpose

Segmented control for switching between fixed options.

## Import

```tsx
import { Switcher } from "@kiyotakkkka/zvs-uikit-lib/ui";
```

## Props

| Prop       | Type                                 | Default | Description                 |
| ---------- | ------------------------------------ | ------- | --------------------------- |
| value      | string                               | -       | Active value.               |
| options    | `{ value: string; label: string }[]` | -       | Segments list.              |
| onChange   | `(value: string) => void`            | -       | Called on selection change. |
| className  | string                               | -       | Extra wrapper classes.      |
| classNames | object                               | -       | Classes for internal slots. |

### `classNames` slots

| Slot | Description            |
| ---- | ---------------------- |
| tab  | Segment button classes |

## Example

```tsx
import { Switcher } from "@kiyotakkkka/zvs-uikit-lib/ui";
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

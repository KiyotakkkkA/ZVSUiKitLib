# InputSmall

## Purpose

Compact native input with optional behavior presets. `type` keeps its native
HTML meaning; `preset` configures a coordinated type, input mode, autocomplete,
icons, and interactions.

## Import

```tsx
import { InputSmall } from "@kiyotakkkka/zvs-uikit-lib";
```

## Props

| Prop       | Type                                                | Default          | Description                                           |
| ---------- | --------------------------------------------------- | ---------------- | ----------------------------------------------------- |
| preset     | [`InputPreset`](../../docs/dict.md#inputpreset)     | -                | Coordinated behavior preset.                          |
| type       | HTML input type                                     | preset           | Explicit native type; overrides non-password presets. |
| onClear    | `() => void`                                        | -                | Called when the search preset is cleared.             |
| rounded    | [`RoundVariants`](../../docs/dict.md#roundvariants) | `"rounded-full"` | Border radius shape.                                  |
| className  | string                                              | -                | Input element classes.                                |
| classNames | object                                              | -                | Classes for internal slots.                           |

All remaining native input attributes are forwarded.

### Presets

| Preset     | Behavior                                                         |
| ---------- | ---------------------------------------------------------------- |
| `password` | Password type, visibility toggle, current-password autocomplete. |
| `search`   | Search type, leading icon, clear button, Escape-to-clear.        |
| `email`    | Email type, email keyboard and autocomplete.                     |
| `phone`    | Telephone type, telephone keyboard and autocomplete.             |
| `url`      | URL type, URL keyboard and autocomplete.                         |

### `classNames` slots

| Slot           | Description                                   |
| -------------- | --------------------------------------------- |
| wrapper        | Outer wrapper classes.                        |
| icon           | Every preset icon.                            |
| leadingIcon    | Leading preset icon.                          |
| trailingButton | Password visibility and search clear buttons. |

## Example

```tsx
"use client";
import { InputSmall } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoInputSmall() {
    const [search, setSearch] = useState("");

    return (
        <div className="grid gap-3">
            <InputSmall placeholder="Name" />
            <InputSmall preset="email" placeholder="Email" />
            <InputSmall preset="password" placeholder="Password" />
            <InputSmall
                preset="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search"
            />
            <InputSmall preset="phone" placeholder="Phone" />
            <InputSmall preset="url" placeholder="Website" />
        </div>
    );
}
```

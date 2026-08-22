# InputSmall

## Table of contents

- [Import](#import)
- [API](#api)
  - [InputPreset](#inputpreset)
  - [InputPresets](#inputpresets)
  - [InputSmall](#inputsmall)
    - [InputSmallClassNames](#inputsmallclassnames)
- [Example](#example)

## Import

```tsx
import { InputSmall } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### InputPreset

```ts
type InputPreset = "password" | "search" | "email" | "phone" | "url";
```

### InputPresets

```ts
type InputPresets = InputPreset;
```

### InputSmall

Extends: `InputHTMLAttributes<HTMLInputElement>`.

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `classNames` | `InputSmallClassNames` | - | No | CSS classes applied to the component slots. |
| `preset` | `InputPresets` | - | No | The preset used by the component. |
| `onClear` | `() => void` | - | No | Callback invoked when clear occurs. |
| `rounded` | [RoundVariants](./dict.md#roundvariants) \| "" | - | No | The border-radius preset applied to the component. |


### InputSmallClassNames

| Property | Description |
| --- | --- |
| `input` | The input element used by the component. |
| `icon` | Content rendered for the icon. |
| `leadingIcon` | Content rendered for the leading icon. |
| `trailingButton` | The trailing button used by the component. |


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

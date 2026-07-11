# Tabs

## Purpose

Line-style tabs for switching between related views.

## Import

```tsx
import { Tabs } from "@kiyotakkkka/zvs-uikit-lib";
```

## Props

| Prop       | Type              | Default | Description                  |
| ---------- | ----------------- | ------- | ---------------------------- |
| value      | string            | -       | Active tab value.            |
| onChange   | `(value) => void` | -       | Called when a tab is chosen. |
| options    | `TabOption[]`     | -       | Tab items.                   |
| className  | string            | -       | Wrapper classes.             |
| classNames | object            | -       | Internal slot classes.       |
| tabProps   | button attributes | -       | Props shared by every tab.   |

## Example

```tsx
"use client";
import { useState } from "react";
import { Tabs } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoTabs() {
    const [tab, setTab] = useState("account");

    return (
        <Tabs
            value={tab}
            onChange={setTab}
            options={[
                { value: "account", label: "Account" },
                { value: "documents", label: "Documents" },
            ]}
        />
    );
}
```

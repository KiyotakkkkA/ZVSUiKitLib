# Tabs

## Table of contents

- [Import](#import)
- [API](#api)
    - [TabOption](#taboption)
    - [Tabs](#tabs)
        - [TabsClassNames](#tabsclassnames)
- [Example](#example)

## Import

```tsx
import { Tabs } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### TabOption

| Property   | Type      | Default | Required | Description                      |
| ---------- | --------- | ------- | -------- | -------------------------------- |
| `value`    | `string`  | -       | Yes      | The value used by the component. |
| `label`    | `string`  | -       | Yes      | Text used for the label.         |
| `disabled` | `boolean` | -       | No       | Whether disabled is enabled.     |

### Tabs

Extends: `Omit< ComponentPropsWithoutRef<"div">, "onChange" \| "children" >`.

| Property     | Type                                                       | Default | Required | Description                                 |
| ------------ | ---------------------------------------------------------- | ------- | -------- | ------------------------------------------- |
| `value`      | `string`                                                   | -       | Yes      | The value used by the component.            |
| `onChange`   | `(value: string) => void`                                  | -       | Yes      | Callback invoked when change occurs.        |
| `options`    | `TabOption[]`                                              | -       | Yes      | The options used by the component.          |
| `classNames` | `TabsClassNames`                                           | -       | No       | CSS classes applied to the component slots. |
| `tabProps`   | `Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">` | -       | No       | The tab props used by the component.        |

### TabsClassNames

| Property    | Description                     |
| ----------- | ------------------------------- |
| `list`      | The list used by the component. |
| `tab`       | The tab used by the component.  |
| `activeTab` | Whether active tab is enabled.  |

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

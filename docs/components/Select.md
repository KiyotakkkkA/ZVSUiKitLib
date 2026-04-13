# Select

## Purpose

Single-value selector built on top of `Dropdown`.

## Props

| Prop              | Type                                 | Default | Description                            |
| ----------------- | ------------------------------------ | ------- | -------------------------------------- |
| value             | string                               | -       | Selected value.                        |
| onChange          | `(value: string) => void`            | -       | Value change handler.                  |
| options           | `{ value: string; label: string }[]` | -       | Option list.                           |
| placeholder       | string                               | -       | Trigger text when nothing is selected. |
| searchable        | boolean                              | `false` | Enables option search.                 |
| searchPlaceholder | string                               | -       | Search input placeholder.              |
| emptyMessage      | string                               | -       | Message for empty search result.       |
| disabled          | boolean                              | -       | Disables selector.                     |
| className         | string                               | -       | Outer wrapper classes.                 |
| classNames        | object                               | -       | Classes for internal dropdown slots.   |

### classNames slots

| Slot        | Description                  |
| ----------- | ---------------------------- |
| trigger     | Trigger button classes.      |
| menu        | Popup menu classes.          |
| search      | Search input classes.        |
| option      | Option button classes.       |
| optionLabel | Option label text classes.   |
| optionIcon  | Option icon wrapper classes. |

## Example

```tsx
import { Select } from "@kiyotakkkka/zvs-uikit-lib/ui";
import { useState } from "react";

export function DemoSelect() {
    const [role, setRole] = useState("user");

    return (
        <Select
            value={role}
            onChange={setRole}
            options={[
                { value: "user", label: "User" },
                { value: "admin", label: "Admin" },
            ]}
            placeholder="Select role"
        />
    );
}
```

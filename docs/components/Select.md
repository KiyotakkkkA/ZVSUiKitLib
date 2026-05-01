# Select

## Purpose

Single-value selector built on top of `Dropdown`. `Select` owns option rendering, search filtering, empty state, selected check mark, and close-on-select behavior.

## Props

| Prop              | Type                                                                         | Default               | Description                                               |
| ----------------- | ---------------------------------------------------------------------------- | --------------------- | --------------------------------------------------------- |
| value             | string                                                                       | -                     | Selected value.                                           |
| onChange          | `(value: string) => void`                                                    | -                     | Value change handler.                                     |
| options           | `{ value: string; label: string; icon?: ReactNode; onClick?: () => void }[]` | -                     | Option list.                                              |
| placeholder       | string                                                                       | -                     | Trigger text when nothing is selected.                    |
| searchable        | boolean                                                                      | `false`               | Enables option search.                                    |
| searchPlaceholder | string                                                                       | `"Поиск..."`          | Search input placeholder.                                 |
| emptyMessage      | string                                                                       | `"Ничего не найдено"` | Message for empty search result.                          |
| disabled          | boolean                                                                      | -                     | Disables selector.                                        |
| className         | string                                                                       | -                     | Outer wrapper classes.                                    |
| menuWidth         | number \| string                                                             | auto                  | Popup width. Auto-calculated from option labels if empty. |
| menuPlacement     | `"bottom" \| "top"`                                                          | `"bottom"`            | Popup placement.                                          |
| closeOnSelect     | boolean                                                                      | `true`                | Close popup after selecting an option.                    |
| classNames        | object                                                                       | -                     | Classes for internal slots.                               |

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
import { Icon } from "@iconify/react";
import { Select } from "@kiyotakkkka/zvs-uikit-lib/ui";
import { useState } from "react";

export function DemoSelect() {
    const [role, setRole] = useState("user");

    return (
        <Select
            value={role}
            onChange={setRole}
            searchable
            options={[
                {
                    value: "user",
                    label: "User",
                    icon: <Icon icon="mdi:account" />,
                },
                {
                    value: "admin",
                    label: "Admin",
                    icon: <Icon icon="mdi:shield-account" />,
                    onClick: () => console.log("Admin selected"),
                },
            ]}
            placeholder="Select role"
        />
    );
}
```

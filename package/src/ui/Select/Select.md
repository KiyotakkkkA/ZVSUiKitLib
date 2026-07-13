# Select

## Purpose

Compound single-value selector built on `Dropdown`. The root owns selection,
search, positioning, and open-state behavior while its compound parts own
rendering and styles.

## Import

```tsx
import { Select } from "@kiyotakkkka/zvs-uikit-lib";
```

## Props

| Prop              | Type                      | Default               | Description                              |
| ----------------- | ------------------------- | --------------------- | ---------------------------------------- |
| value             | string                    | -                     | Selected value.                          |
| onChange          | `(value: string) => void` | -                     | Value change handler.                    |
| options           | `SelectOption[]`          | -                     | Option source for selection and search.  |
| children          | ReactNode                 | -                     | `Select.Trigger` and `Select.Menu`.      |
| placeholder       | string                    | `"Выберите"`          | Trigger text without a selected option.  |
| searchable        | boolean                   | `false`               | Enables search inside `Select.Menu`.     |
| searchPlaceholder | string                    | `"Поиск..."`          | Search input placeholder.                |
| emptyMessage      | string                    | `"Ничего не найдено"` | Empty search result.                     |
| disabled          | boolean                   | `false`               | Disables interaction.                    |
| menuWidth         | number \| string          | `"auto"`              | Popup width; `auto` matches the trigger. |
| menuPlacement     | `PositionAnchor`          | `"bottom-left"`       | Popup placement.                         |
| closeOnSelect     | boolean                   | `true`                | Closes the popup after option selection. |
| className         | string                    | -                     | Root wrapper classes.                    |
| classNames        | `{ search?: string }`     | -                     | Search input classes.                    |

## Compound parts

### `Select.Trigger`

| Prop      | Type                                                | Default         | Description             |
| --------- | --------------------------------------------------- | --------------- | ----------------------- |
| className | string                                              | -               | Trigger button classes. |
| rounded   | [`RoundVariants`](../../docs/dict.md#roundvariants) | `"rounded-2xl"` | Trigger border radius.  |

### `Select.Menu`

| Prop      | Type                                                | Default         | Description              |
| --------- | --------------------------------------------------- | --------------- | ------------------------ |
| children  | ReactNode                                           | -               | Mapped `Select.Option`s. |
| className | string                                              | -               | Popup classes.           |
| rounded   | [`RoundVariants`](../../docs/dict.md#roundvariants) | `"rounded-4xl"` | Popup border radius.     |

### `Select.Option`

| Prop      | Type                                                | Default          | Description                        |
| --------- | --------------------------------------------------- | ---------------- | ---------------------------------- |
| value     | string                                              | -                | Option value.                      |
| label     | string                                              | -                | Visible label and searchable text. |
| icon      | ReactNode                                           | -                | Optional leading icon.             |
| onClick   | `() => void`                                        | -                | Runs after the value changes.      |
| className | string                                              | -                | Option button classes.             |
| rounded   | [`RoundVariants`](../../docs/dict.md#roundvariants) | `"rounded-full"` | Option border radius.              |

## Example

```tsx
"use client";
import { Icon } from "@iconify/react";
import { Select, type SelectOption } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

const options: SelectOption[] = [
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
];

export function DemoSelect() {
    const [role, setRole] = useState("user");

    return (
        <Select
            value={role}
            onChange={setRole}
            options={options}
            searchable
            placeholder="Select role"
        >
            <Select.Trigger />
            <Select.Menu>
                {options.map((option) => (
                    <Select.Option key={option.value} {...option} />
                ))}
            </Select.Menu>
        </Select>
    );
}
```

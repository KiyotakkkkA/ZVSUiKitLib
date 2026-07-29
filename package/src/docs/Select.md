# Select

## Table of contents

- [Import](#import)
- [API](#api)
    - [SelectOption](#selectoption)
    - [Select](#select)
        - [SelectClassNames](#selectclassnames)
    - [Select.Trigger](#selecttrigger)
    - [Select.Menu](#selectmenu)
    - [Select.Option](#selectoption)
    - [SelectContextValue](#selectcontextvalue)
- [Example](#example)

## Import

```tsx
import { Select } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### SelectOption

| Property  | Type         | Default | Required | Description                         |
| --------- | ------------ | ------- | -------- | ----------------------------------- |
| `value`   | `string`     | -       | Yes      | The value used by the component.    |
| `label`   | `string`     | -       | Yes      | Text used for the label.            |
| `icon`    | `ReactNode`  | -       | No       | Content rendered for the icon.      |
| `onClick` | `() => void` | -       | No       | Callback invoked when click occurs. |

### Select

| Property            | Type                                       | Default               | Required | Description                                      |
| ------------------- | ------------------------------------------ | --------------------- | -------- | ------------------------------------------------ |
| `value`             | `string`                                   | -                     | Yes      | The value used by the component.                 |
| `onChange`          | `(value: string) => void`                  | -                     | Yes      | Callback invoked when change occurs.             |
| `options`           | `SelectOption[]`                           | -                     | Yes      | The options used by the component.               |
| `children`          | `ReactNode`                                | -                     | Yes      | The content rendered inside the component.       |
| `placeholder`       | `string`                                   | `"Выберите"`          | No       | Text used for the placeholder.                   |
| `searchable`        | `boolean`                                  | `false`               | No       | Whether searchable is enabled.                   |
| `searchPlaceholder` | `string`                                   | `"Поиск..."`          | No       | Text used for the search placeholder.            |
| `emptyMessage`      | `string`                                   | `"Ничего не найдено"` | No       | Text used for the empty message.                 |
| `disabled`          | `boolean`                                  | `false`               | No       | Whether disabled is enabled.                     |
| `className`         | `DivClassName`                             | -                     | No       | CSS classes applied to the root element.         |
| `classNames`        | `SelectClassNames`                         | -                     | No       | CSS classes applied to the component slots.      |
| `menuWidth`         | `number \| string`                         | -                     | No       | The width of the popup menu.                     |
| `menuPlacement`     | [PositionAnchor](./dict.md#positionanchor) | `"bottom-left"`       | No       | The popup menu position relative to its trigger. |
| `closeOnSelect`     | `boolean`                                  | `true`                | No       | Function used to close on select.                |

### SelectClassNames

| Property | Description                       |
| -------- | --------------------------------- |
| `search` | The search used by the component. |

### Select.Trigger

| Property    | Type                                           | Default         | Required | Description                                        |
| ----------- | ---------------------------------------------- | --------------- | -------- | -------------------------------------------------- |
| `className` | `string`                                       | -               | No       | CSS classes applied to the root element.           |
| `rounded`   | [RoundVariants](./dict.md#roundvariants) \| "" | `"rounded-2xl"` | No       | The border-radius preset applied to the component. |

### Select.Menu

| Property    | Type                                           | Default         | Required | Description                                        |
| ----------- | ---------------------------------------------- | --------------- | -------- | -------------------------------------------------- |
| `children`  | `ReactNode`                                    | -               | Yes      | The content rendered inside the component.         |
| `className` | `DivClassName`                                 | -               | No       | CSS classes applied to the root element.           |
| `rounded`   | [RoundVariants](./dict.md#roundvariants) \| "" | `"rounded-3xl"` | No       | The border-radius preset applied to the component. |

### Select.Option

Extends: `SelectOption`.

| Property    | Type                                           | Default          | Required | Description                                        |
| ----------- | ---------------------------------------------- | ---------------- | -------- | -------------------------------------------------- |
| `className` | `string`                                       | -                | No       | CSS classes applied to the root element.           |
| `rounded`   | [RoundVariants](./dict.md#roundvariants) \| "" | `"rounded-full"` | No       | The border-radius preset applied to the component. |

### SelectContextValue

| Property              | Type                                | Default | Required | Description                                      |
| --------------------- | ----------------------------------- | ------- | -------- | ------------------------------------------------ |
| `value`               | `string`                            | -       | Yes      | The value used by the component.                 |
| `selectedOption`      | `SelectOption`                      | -       | No       | Whether selected option is enabled.              |
| `placeholder`         | `string`                            | -       | Yes      | Text used for the placeholder.                   |
| `query`               | `string`                            | -       | Yes      | The query used by the component.                 |
| `searchable`          | `boolean`                           | -       | Yes      | Whether searchable is enabled.                   |
| `searchPlaceholder`   | `string`                            | -       | Yes      | Text used for the search placeholder.            |
| `emptyMessage`        | `string`                            | -       | Yes      | Text used for the empty message.                 |
| `classNames`          | `SelectClassNames`                  | -       | No       | CSS classes applied to the component slots.      |
| `closeOnSelect`       | `boolean`                           | -       | Yes      | Function used to close on select.                |
| `setQuery`            | `(query: string) => void`           | -       | Yes      | Function used to set query.                      |
| `select`              | `(option: SelectOption) => void`    | -       | Yes      | The select used by the component.                |
| `isVisible`           | `(option: SelectOption) => boolean` | -       | Yes      | Whether is visible is enabled.                   |
| `visibleOptionsCount` | `number`                            | -       | Yes      | The visible options count used by the component. |

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

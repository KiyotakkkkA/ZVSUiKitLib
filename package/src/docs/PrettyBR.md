# PrettyBR

## Table of contents

- [Import](#import)
- [API](#api)
    - [PrettyBR](#prettybr)
        - [PrettyBRClassNames](#prettybrclassnames)
- [Example](#example)

## Import

```tsx
import { PrettyBR } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### PrettyBR

| Property     | Type                 | Default | Required | Description                                 |
| ------------ | -------------------- | ------- | -------- | ------------------------------------------- |
| `icon`       | `ReactNode`          | -       | No       | Content rendered for the icon.              |
| `label`      | `string`             | -       | No       | Text used for the label.                    |
| `size`       | `number`             | -       | No       | The rendered icon size in pixels.           |
| `className`  | `DivClassName`       | -       | No       | CSS classes applied to the root element.    |
| `classNames` | `PrettyBRClassNames` | -       | No       | CSS classes applied to the component slots. |

### PrettyBRClassNames

| Property  | Description                        |
| --------- | ---------------------------------- |
| `divider` | The divider used by the component. |
| `icon`    | Content rendered for the icon.     |
| `label`   | Text used for the label.           |

## Example

```tsx
"use client";
import { Icon, PrettyBR } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoPrettyBR() {
    return (
        <PrettyBR label="Main block" icon={<Icon icon="sparkles-outline" />} />
    );
}
```

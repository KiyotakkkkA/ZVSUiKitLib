# InputCheckSlided

## Table of contents

- [Import](#import)
- [API](#api)
    - [InputCheckSlided](#inputcheckslided)
        - [InputCheckSlidedClassNames](#inputcheckslidedclassnames)
- [Example](#example)

## Import

```tsx
import { InputCheckSlided } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### InputCheckSlided

| Property     | Type                         | Default | Required | Description                                              |
| ------------ | ---------------------------- | ------- | -------- | -------------------------------------------------------- |
| `checked`    | `boolean`                    | -       | Yes      | Controls whether the switch is on.                       |
| `onChange`   | `(checked: boolean) => void` | -       | Yes      | Runs with the next checked state after user interaction. |
| `disabled`   | `boolean`                    | `false` | No       | Prevents interaction with the switch.                    |
| `type`       | `"slided"`                   | -       | No       | Identifies this control as the slided checkbox variant.  |
| `children`   | `ReactNode`                  | -       | No       | Renders the switch label.                                |
| `className`  | `LabelClassName`             | -       | No       | Applies CSS classes to the root label element.           |
| `classNames` | `InputCheckSlidedClassNames` | -       | No       | Applies CSS classes to the switch slots.                 |

### InputCheckSlidedClassNames

| Property  | Description                                       |
| --------- | ------------------------------------------------- |
| `input`   | Applies CSS classes to the native checkbox input. |
| `control` | Applies CSS classes to the visible switch track.  |
| `content` | Applies CSS classes to the switch label content.  |
| `thumb`   | Applies CSS classes to the moving switch thumb.   |

## Example

```tsx
"use client";
import { InputCheckSlided } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoInputCheckSlided() {
    const [enabled, setEnabled] = useState(true);

    return <InputCheckSlided checked={enabled} onChange={setEnabled} />;
}
```

# SelectNative

## Table of contents

- [Import](#import)
- [API](#api)
    - [SelectNativeOption](#selectnativeoption)
    - [SelectNative](#selectnative)
        - [SelectNativeClassNames](#selectnativeclassnames)
- [Example](#example)

## Import

```tsx
import { SelectNative } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### SelectNativeOption

| Property   | Type      | Default | Required | Description                      |
| ---------- | --------- | ------- | -------- | -------------------------------- |
| `value`    | `string`  | -       | Yes      | The value used by the component. |
| `label`    | `string`  | -       | Yes      | Text used for the label.         |
| `disabled` | `boolean` | -       | No       | Whether disabled is enabled.     |

### SelectNative

Extends: `BaseSelectNativeProps`.

| Property      | Type                                           | Default          | Required | Description                                        |
| ------------- | ---------------------------------------------- | ---------------- | -------- | -------------------------------------------------- |
| `ref`         | `Ref<HTMLSelectElement>`                       | -                | No       | Receives the native select node.                   |
| `options`     | `SelectNativeOption[]`                         | -                | Yes      | The options used by the component.                 |
| `onChange`    | `(value: string) => void`                      | -                | No       | Callback invoked when change occurs.               |
| `placeholder` | `string`                                       | -                | No       | Text used for the placeholder.                     |
| `rounded`     | [RoundVariants](./dict.md#roundvariants) \| "" | `"rounded-full"` | No       | The border-radius preset applied to the component. |
| `className`   | `DivClassName`                                 | -                | No       | CSS classes applied to the root element.           |
| `classNames`  | `SelectNativeClassNames`                       | -                | No       | CSS classes applied to the component slots.        |

### SelectNativeClassNames

| Property | Description                       |
| -------- | --------------------------------- |
| `select` | The select used by the component. |

```tsx
"use client";
import { useState } from "react";
import { SelectNative } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoSelectNative() {
    const [value, setValue] = useState("gray");

    return (
        <SelectNative
            value={value}
            onChange={setValue}
            options={[
                { value: "gray", label: "Gray" },
                { value: "blue", label: "Blue" },
            ]}
        />
    );
}
```

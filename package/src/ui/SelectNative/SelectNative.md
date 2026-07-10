# SelectNative

## Purpose

Styled native `select` control for cases where browser-native behavior is preferred.

## Import

```tsx
import { SelectNative } from "@kiyotakkkka/zvs-uikit-lib/ui";
```

## Props

| Prop        | Type              | Default | Description                       |
| ----------- | ----------------- | ------- | --------------------------------- |
| options     | `SelectNativeOption[]` | -  | Select options.                   |
| onChange    | `(value) => void` | -       | Called with selected value.       |
| placeholder | string            | -       | Disabled placeholder option.      |
| className   | string            | -       | Wrapper classes.                  |
| classNames  | object            | -       | Internal slot classes.            |

Native select attributes like `value`, `defaultValue`, `disabled`, and `name` are also supported.

## Example

```tsx
import { useState } from "react";
import { SelectNative } from "@kiyotakkkka/zvs-uikit-lib/ui";

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

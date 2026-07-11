# InputRadio

## Purpose

Radio control for selecting one option from a group.

## Import

```tsx
import { InputRadio } from "@kiyotakkkka/zvs-uikit-lib";
```

## Props

| Prop       | Type                         | Default | Description                 |
| ---------- | ---------------------------- | ------- | --------------------------- |
| checked    | boolean                      | -       | Current selected state.     |
| onChange   | `(checked: boolean) => void` | -       | Triggered on selection.     |
| disabled   | boolean                      | `false` | Disables interaction.       |
| className  | string                       | -       | Extra wrapper classes.      |
| classNames | object                       | -       | Classes for internal slots. |

### `classNames` slots

| Slot      | Description           |
| --------- | --------------------- |
| input     | Native input classes. |
| indicator | Radio frame classes.  |
| dot       | Selected dot classes. |

## Example

```tsx
import { InputRadio } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoInputRadio() {
    const [value, setValue] = useState("email");

    return (
        <div>
            <InputRadio
                name="contact"
                checked={value === "email"}
                onChange={() => setValue("email")}
            />
            <InputRadio
                name="contact"
                checked={value === "phone"}
                onChange={() => setValue("phone")}
            />
        </div>
    );
}
```

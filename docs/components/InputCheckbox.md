# InputCheckBox

## Purpose

Boolean checkbox control (`true/false`).

## Import

```tsx
import { InputCheckBox } from "@kiyotakkkka/zvs-uikit-lib/ui";
```

## Props

Supports standard `input` props except `type`, `checked`, `onChange`, and `className`.

| Prop       | Type                         | Default | Description                 |
| ---------- | ---------------------------- | ------- | --------------------------- |
| checked    | boolean                      | -       | Current value.              |
| onChange   | `(checked: boolean) => void` | -       | Triggered on toggle.        |
| disabled   | boolean                      | `false` | Disables interaction.       |
| className  | string                       | -       | Extra wrapper classes.      |
| classNames | object                       | -       | Classes for internal slots. |

### `classNames` slots

| Slot      | Description             |
| --------- | ----------------------- |
| input     | Native input classes.   |
| indicator | Checkbox frame classes. |
| mark      | Checked mark classes.   |

## Example

```tsx
import { InputCheckBox } from "@kiyotakkkka/zvs-uikit-lib/ui";
import { useState } from "react";

export function DemoInputCheckBox() {
    const [checked, setChecked] = useState(false);

    return <InputCheckBox checked={checked} onChange={setChecked} />;
}
```

# InputCheckbox

## Purpose

Boolean switch-style checkbox (`true/false`).

## Props

| Prop       | Type                         | Default | Description                                        |
| ---------- | ---------------------------- | ------- | -------------------------------------------------- |
| checked    | boolean                      | -       | Current value.                                     |
| onChange   | `(checked: boolean) => void` | -       | Triggered on toggle.                               |
| disabled   | boolean                      | `false` | Disables interaction.                              |
| type       | `"slided"`                   | -       | Reserved prop (currently does not change visuals). |
| className  | string                       | -       | Extra classes.                                     |
| classNames | object                       | -       | Classes for internal slots.                        |

### classNames slots

| Slot  | Description           |
| ----- | --------------------- |
| thumb | Switch thumb classes. |

## Example

```tsx
import { InputCheckbox } from "@kiyotakkkka/zvs-uikit-lib/ui";
import { useState } from "react";

export function DemoInputCheckbox() {
    const [enabled, setEnabled] = useState(true);

    return <InputCheckbox checked={enabled} onChange={setEnabled} />;
}
```

# InputRadioGroup

## Purpose

Connects `InputRadio` children to an exclusive boolean record.

## Import

```tsx
import {
    InputRadio,
    InputRadioGroup,
} from "@kiyotakkkka/zvs-uikit-lib";
```

## Props

| Prop          | Type                      | Default   | Description                                      |
| ------------- | ------------------------- | --------- | ------------------------------------------------ |
| model         | `Record<string, boolean>` | -         | Controlled boolean model.                        |
| onModelChange | `(model: T) => void`      | -         | Triggered with the next immutable model.         |
| default       | `keyof T`                 | -         | Active fallback key when model has no selection. |
| orientation   | `"vertical" \| "horizontal"` | `"horizontal"` | Child layout direction.               |
| disabled      | boolean                   | `false`   | Disables every radio in the group.               |
| name          | string                    | generated | Native name shared by child radio inputs.        |
| className     | string                    | -         | Extra group wrapper classes.                     |
| children      | ReactNode                 | -         | `InputRadio` controls with `modelValue`.          |

The component also forwards native `div` attributes except `default` and
`onChange`.

## Example

```tsx
"use client";
import {
    InputRadio,
    InputRadioGroup,
} from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

type ContactModel = {
    email: boolean;
    phone: boolean;
};

export function DemoInputRadioGroup() {
    const [model, setModel] = useState<ContactModel>({
        email: false,
        phone: false,
    });

    return (
        <InputRadioGroup
            model={model}
            onModelChange={setModel}
            default="email"
            name="contact"
        >
            <InputRadio modelValue="email" />
            <InputRadio modelValue="phone" />
        </InputRadioGroup>
    );
}
```

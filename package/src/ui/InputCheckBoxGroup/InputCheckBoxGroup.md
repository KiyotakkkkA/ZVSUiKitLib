# InputCheckBoxGroup

## Purpose

Connects `InputCheckBox` children to a boolean record.

## Import

```tsx
import { InputCheckBox, InputCheckBoxGroup } from "@kiyotakkkka/zvs-uikit-lib";
```

## Props

| Prop          | Type                                            | Default        | Description                                      |
| ------------- | ----------------------------------------------- | -------------- | ------------------------------------------------ |
| model         | `Record<string, boolean>`                       | -              | Controlled boolean model.                        |
| onModelChange | `(model: T) => void`                            | -              | Triggered with the next immutable model.         |
| default       | `keyof T`                                       | -              | Active fallback key when model has no selection. |
| multiple      | boolean                                         | `true`         | Allows several active keys.                      |
| orientation   | [`Orientation`](../../docs/dict.md#orientation) | `"horizontal"` | Child layout direction.                          |
| disabled      | boolean                                         | `false`        | Disables every checkbox in the group.            |
| className     | string                                          | -              | Extra group wrapper classes.                     |
| children      | ReactNode                                       | -              | `InputCheckBox` controls with `modelValue`.      |

The component also forwards native `div` attributes except `default` and
`onChange`.

## Example

```tsx
"use client";
import { InputCheckBox, InputCheckBoxGroup } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

type NotificationModel = {
    email: boolean;
    sms: boolean;
};

export function DemoInputCheckBoxGroup() {
    const [model, setModel] = useState<NotificationModel>({
        email: false,
        sms: false,
    });

    return (
        <InputCheckBoxGroup
            model={model}
            onModelChange={setModel}
            default="email"
            multiple
        >
            <InputCheckBox modelValue="email" />
            <InputCheckBox modelValue="sms" />
        </InputCheckBoxGroup>
    );
}
```

`multiple={false}` makes the group exclusive. `default` is used only as the
initial fallback and does not prevent the last active checkbox from being
cleared.

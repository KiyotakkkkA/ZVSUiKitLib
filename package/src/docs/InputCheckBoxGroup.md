# InputCheckBoxGroup

## Table of contents

- [Import](#import)
- [API](#api)
    - [BooleanModel](#booleanmodel)
    - [InputCheckBoxGroup](#inputcheckboxgroup)
- [Example](#example)

## Import

```tsx
import { InputCheckBoxGroup } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### BooleanModel

```ts
type BooleanModel = Record<string, boolean>;
```

### InputCheckBoxGroup

Extends: `Omit< HTMLAttributes<HTMLDivElement>, "default" \| "onChange" >`.

| Property        | Type                                 | Default        | Required | Description                                                    |
| --------------- | ------------------------------------ | -------------- | -------- | -------------------------------------------------------------- |
| `ref`           | `Ref<HTMLDivElement>`                | -              | No       | Receives the group root element.                               |
| `model`         | `T`                                  | -              | Yes      | Maps each checkbox value to its checked state.                 |
| `onModelChange` | `(model: T) => void`                 | -              | Yes      | Runs with the updated checked-state model.                     |
| `default`       | `Extract<keyof T, string>`           | -              | No       | Selects the model key checked when no key is currently active. |
| `multiple`      | `boolean`                            | `true`         | No       | Allows more than one model entry to be checked at once.        |
| `orientation`   | [Orientation](./dict.md#orientation) | `"horizontal"` | No       | Sets the horizontal or vertical layout of the checkboxes.      |
| `disabled`      | `boolean`                            | `false`        | No       | Disables every checkbox in the group.                          |
| `children`      | `ReactNode`                          | -              | Yes      | Renders the grouped checkbox controls.                         |

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

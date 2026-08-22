# InputRadioGroup

## Table of contents

- [Import](#import)
- [API](#api)
  - [InputRadioGroup](#inputradiogroup)
- [Example](#example)

## Import

```tsx
import { InputRadioGroup } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### InputRadioGroup

Extends: `Omit< HTMLAttributes<HTMLDivElement>, "default" \| "onChange" >`.

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `ref` | `Ref<HTMLDivElement>` | - | No | Receives the group root element. |
| `model` | `T` | - | Yes | Maps each radio value to its selected state. |
| `onModelChange` | `(model: T) => void` | - | Yes | Runs with the model after the selected radio changes. |
| `default` | `Extract<keyof T, string>` | - | No | Selects the model key used when no radio is currently active. |
| `orientation` | [Orientation](./dict.md#orientation) | `"horizontal"` | No | Sets the horizontal or vertical layout of the radios. |
| `disabled` | `boolean` | `false` | No | Disables every radio in the group. |
| `name` | `string` | - | No | Assigns the shared native input name to grouped radios. |
| `children` | `ReactNode` | - | Yes | Renders the grouped radio controls. |


```tsx
"use client";
import { InputRadio, InputRadioGroup } from "@kiyotakkkka/zvs-uikit-lib";
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

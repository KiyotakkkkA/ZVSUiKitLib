# InputRadio

## Table of contents

- [Import](#import)
- [API](#api)
  - [InputRadio](#inputradio)
    - [InputRadioClassNames](#inputradioclassnames)
- [Example](#example)

## Import

```tsx
import { InputRadio } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### InputRadio

Extends: `BaseInputProps`.

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `ref` | `Ref<HTMLInputElement>` | - | No | Receives the native radio input node. |
| `checked` | `boolean` | - | No | Controls whether the radio is selected. |
| `onChange` | `(checked: boolean) => void` | - | No | Runs with the next selected state after user interaction. |
| `modelValue` | `string` | - | No | Identifies the radio entry when used inside a radio group. |
| `children` | `ReactNode` | - | No | Renders the radio label. |
| `className` | `LabelClassName` | - | No | Applies CSS classes to the root label element. |
| `classNames` | `InputRadioClassNames` | - | No | Applies CSS classes to the radio slots. |


### InputRadioClassNames

| Property | Description |
| --- | --- |
| `input` | Applies CSS classes to the native radio input. |
| `control` | Applies CSS classes to the visible radio control. |
| `content` | Applies CSS classes to the label content. |
| `dot` | Applies CSS classes to the selected-state dot. |
| `indicator` | Applies CSS classes to the selected-state indicator. |


```tsx
"use client";
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

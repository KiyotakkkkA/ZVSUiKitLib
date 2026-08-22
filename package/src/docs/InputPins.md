# InputPins

## Table of contents

- [Import](#import)
- [API](#api)
  - [InputPins](#inputpins)
    - [InputPinsClassNames](#inputpinsclassnames)
- [Example](#example)

## Import

```tsx
import { InputPins } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### InputPins

Extends: `BaseInputPinsProps`.

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | - | Yes | The value used by the component. |
| `onChange` | `(value: string) => void` | - | Yes | Callback invoked when change occurs. |
| `length` | `number` | - | No | The length used by the component. |
| `label` | `string` | - | No | Text used for the label. |
| `disabled` | `boolean` | - | No | Whether disabled is enabled. |
| `mask` | `boolean` | - | No | The mask used by the component. |
| `className` | `DivClassName` | - | No | CSS classes applied to the root element. |
| `classNames` | `InputPinsClassNames` | - | No | CSS classes applied to the component slots. |


### InputPinsClassNames

| Property | Description |
| --- | --- |
| `group` | The group used by the component. |
| `input` | The input used by the component. |


```tsx
"use client";
import { useState } from "react";
import { InputPins } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoInputPins() {
    const [pin, setPin] = useState("");

    return <InputPins value={pin} onChange={setPin} label="Pin Input" />;
}
```

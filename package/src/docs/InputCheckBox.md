# InputCheckBox

## Table of contents

- [Import](#import)
- [API](#api)
  - [InputCheckBox](#inputcheckbox)
    - [InputCheckBoxClassNames](#inputcheckboxclassnames)
- [Example](#example)

## Import

```tsx
import { InputCheckBox } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### InputCheckBox

Extends: `BaseInputProps`.

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `ref` | `Ref<HTMLInputElement>` | - | No | Receives the native checkbox input node. |
| `checked` | `boolean` | - | No | Controls whether the checkbox is checked. |
| `onChange` | `(checked: boolean) => void` | - | No | Runs with the next checked state after user interaction. |
| `modelValue` | `string` | - | No | Identifies the checkbox entry when used inside a checkbox group. |
| `children` | `ReactNode` | - | No | Renders the checkbox label. |
| `className` | `LabelClassName` | - | No | Applies CSS classes to the root label element. |
| `classNames` | `InputCheckBoxClassNames` | - | No | Applies CSS classes to the checkbox slots. |


### InputCheckBoxClassNames

| Property | Description |
| --- | --- |
| `input` | Applies CSS classes to the native checkbox input. |
| `control` | Applies CSS classes to the visible checkbox control. |
| `content` | Applies CSS classes to the label content. |
| `mark` | Applies CSS classes to the checkbox check mark. |
| `indicator` | Applies CSS classes to the checked-state indicator. |


```tsx
"use client";
import { InputCheckBox } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoInputCheckBox() {
    const [checked, setChecked] = useState(false);

    return <InputCheckBox checked={checked} onChange={setChecked} />;
}
```

# InputSlider

## Table of contents

- [Import](#import)
- [API](#api)
  - [InputSlider](#inputslider)
    - [InputSliderClassNames](#inputsliderclassnames)
- [Example](#example)

## Import

```tsx
import { InputSlider } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### InputSlider

Extends: `BaseInputSliderProps`.

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `ref` | `Ref<HTMLDivElement>` | - | No | Receives the slider root element. |
| `value` | `number` | - | Yes | Controls the current numeric slider value. |
| `onChange` | `(value: number) => void` | - | Yes | Runs with the next value while the slider changes. |
| `min` | `number` | `0` | No | Sets the minimum selectable value. |
| `max` | `number` | `100` | No | Sets the maximum selectable value. |
| `step` | `number` | `1` | No | Sets the increment between selectable values. |
| `disabled` | `boolean` | `false` | No | Prevents interaction with the slider. |
| `className` | `DivClassName` | - | No | Applies CSS classes to the slider root element. |
| `classNames` | `InputSliderClassNames` | - | No | Applies CSS classes to the slider slots. |
| `showValue` | `boolean` | `false` | No | Displays the formatted current value beside the slider. |
| `valueFormatter` | `(value: number) => string` | - | No | Formats the current value for its visible label. |


### InputSliderClassNames

| Property | Description |
| --- | --- |
| `track` | Applies CSS classes to the full slider track. |
| `fill` | Applies CSS classes to the filled track segment. |
| `thumb` | Applies CSS classes to the draggable thumb. |
| `input` | Applies CSS classes to the native range input. |
| `value` | Applies CSS classes to the visible value label. |


```tsx
"use client";
import { useState } from "react";
import { InputSlider } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoInputSlider() {
    const [value, setValue] = useState(40);

    return (
        <InputSlider
            value={value}
            onChange={setValue}
            min={0}
            max={100}
            step={5}
            showValue
            valueFormatter={(next) => `${next}%`}
        />
    );
}
```

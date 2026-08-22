# InputBig

## Table of contents

- [Import](#import)
- [API](#api)
  - [InputBig](#inputbig)
    - [InputBigClassNames](#inputbigclassnames)
- [Example](#example)

## Import

```tsx
import { InputBig } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### InputBig

Extends: `TextareaHTMLAttributes<HTMLTextAreaElement>`.

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `label` | `ReactNode` | - | No | Text used for the label. |
| `description` | `ReactNode` | - | No | Text used for the description. |
| `error` | `ReactNode` | - | No | The error used by the component. |
| `showCount` | `boolean` | - | No | Whether show count is enabled. |
| `autoResize` | `boolean` | - | No | Whether the input grows automatically to fit its content. |
| `minRows` | `number` | - | No | The min rows used by the component. |
| `maxRows` | `number` | - | No | The max rows used by the component. |
| `className` | `string` | - | No | The CSS class applied to the component. |
| `classNames` | `InputBigClassNames` | - | No | CSS classes applied to the component slots. |


### InputBigClassNames

| Property | Description |
| --- | --- |
| `label` | Text used for the label. |
| `textarea` | The textarea used by the component. |
| `footer` | Content rendered for the footer. |
| `message` | Text used for the message. |
| `counter` | The counter used by the component. |


```tsx
"use client";
import { InputBig } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoInputBig() {
    const [text, setText] = useState("");

    return (
        <InputBig
            value={text}
            onChange={(e) => setText(e.target.value)}
            label="Комментарий"
            description="Добавьте контекст, который поможет быстрее разобраться."
            placeholder="Введите комментарий…"
            maxLength={500}
            showCount
            autoResize
        />
    );
}
```

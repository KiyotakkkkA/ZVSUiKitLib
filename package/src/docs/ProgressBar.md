# ProgressBar

## Table of contents

- [Import](#import)
- [API](#api)
  - [ProgressBar](#progressbar)
    - [ProgressBarClassNames](#progressbarclassnames)
- [Example](#example)

## Import

```tsx
import { ProgressBar } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### ProgressBar

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `ref` | `Ref<HTMLDivElement>` | - | No | Receives the progress bar root element. |
| `variant` | [ColorVariantsBase](./dict.md#colorvariantsbase) | `"primary"` | No | The visual style variant applied to the component. |
| `value` | `number` | - | Yes | The value used by the component. |
| `max` | `number` | `100` | No | The max used by the component. |
| `label` | `string` | - | No | Text used for the label. |
| `showValue` | `boolean` | `false` | No | Whether show value is enabled. |
| `className` | `DivClassName` | - | No | CSS classes applied to the root element. |
| `classNames` | `ProgressBarClassNames` | - | No | CSS classes applied to the component slots. |


### ProgressBarClassNames

| Property | Description |
| --- | --- |
| `header` | Content rendered for the header. |
| `label` | Text used for the label. |
| `value` | The value used by the component. |
| `track` | The track used by the component. |
| `indicator` | The indicator used by the component. |


```tsx
"use client";
import { ProgressBar } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoProgressBar() {
    return <ProgressBar label="Upload" value={64} showValue />;
}
```

# ProgressBar

## Purpose

Progress indicator with optional label and percentage value.

## Import

```tsx
import { ProgressBar } from "@kiyotakkkka/zvs-uikit-lib";
```

## Props

| Prop       | Type                                                                                     | Default   | Description                                   |
| ---------- | ---------------------------------------------------------------------------------------- | --------- | --------------------------------------------- |
| value      | number                                                                                   | -         | Current value. Clamped between `0` and `max`. |
| max        | number                                                                                   | `100`     | Maximum value.                                |
| label      | string                                                                                   | -         | Optional label above the bar.                 |
| showValue  | boolean                                                                                  | `false`   | Shows calculated percentage.                  |
| className  | string                                                                                   | -         | Root classes.                                 |
| classNames | object                                                                                   | -         | Classes for internal slots.                   |
| variant    | [`ColorVariantsBase`](../../docs/dict.md#colorvariantsbase) | `primary` | Color variant of the progress bar. |

### `classNames` slots

| Slot      | Description               |
| --------- | ------------------------- |
| header    | Label/value row classes.  |
| label     | Label text classes.       |
| value     | Percentage text classes.  |
| track     | Progress track classes.   |
| indicator | Filled indicator classes. |

## Example

```tsx
"use client";
import { ProgressBar } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoProgressBar() {
    return <ProgressBar label="Upload" value={64} showValue />;
}
```

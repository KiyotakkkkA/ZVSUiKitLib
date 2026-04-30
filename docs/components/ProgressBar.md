# ProgressBar

## Purpose

Progress indicator with optional label and percentage value.

## Props

| Prop       | Type    | Default | Description                                   |
| ---------- | ------- | ------- | --------------------------------------------- |
| value      | number  | -       | Current value. Clamped between `0` and `max`. |
| max        | number  | `100`   | Maximum value.                                |
| label      | string  | -       | Optional label above the bar.                 |
| showValue  | boolean | `false` | Shows calculated percentage.                  |
| className  | string  | -       | Root classes.                                 |
| classNames | object  | -       | Classes for internal slots.                   |

### classNames slots

| Slot      | Description                |
| --------- | -------------------------- |
| header    | Label/value row classes.   |
| label     | Label text classes.        |
| value     | Percentage text classes.   |
| track     | Progress track classes.    |
| indicator | Filled indicator classes.  |

## Example

```tsx
import { ProgressBar } from "@kiyotakkkka/zvs-uikit-lib/ui";

export function DemoProgressBar() {
    return <ProgressBar label="Upload" value={64} showValue />;
}
```

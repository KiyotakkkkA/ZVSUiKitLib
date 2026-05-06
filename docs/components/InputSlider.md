# InputSlider

## Purpose

Controlled range input with a styled track, fill, thumb, and optional value label.

## Import

```tsx
import { InputSlider } from "@kiyotakkkka/zvs-uikit-lib/ui";
```

## Props

Supports standard `input` props except `type`, `value`, `onChange`, `min`, `max`, `step`, and `className`.

| Prop           | Type                       | Default | Description                         |
| -------------- | -------------------------- | ------- | ----------------------------------- |
| value          | number                     | -       | Controlled slider value.            |
| onChange       | `(value: number) => void`  | -       | Called when the value changes.      |
| min            | number                     | `0`     | Minimum value.                      |
| max            | number                     | `100`   | Maximum value.                      |
| step           | number                     | `1`     | Step increment.                     |
| disabled       | boolean                    | `false` | Disables interaction.               |
| showValue      | boolean                    | `false` | Shows the formatted value label.    |
| valueFormatter | `(value: number) => string` | -       | Formats the visible value label.    |
| className      | string                     | -       | Root wrapper classes.               |
| classNames     | object                     | -       | Classes for internal slots.         |

### `classNames` slots

| Slot  | Description                   |
| ----- | ----------------------------- |
| track | Track wrapper classes.        |
| fill  | Filled track classes.         |
| thumb | Thumb indicator classes.      |
| input | Hidden native range classes.  |
| value | Visible value label classes.  |

## Example

```tsx
import { useState } from "react";
import { InputSlider } from "@kiyotakkkka/zvs-uikit-lib/ui";

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

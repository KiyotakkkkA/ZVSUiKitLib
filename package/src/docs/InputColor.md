# InputColor

## Table of contents

- [Import](#import)
- [API](#api)
    - [InputColorSize](#inputcolorsize)
    - [InputColor](#inputcolor)
        - [InputColorClassNames](#inputcolorclassnames)
- [Example](#example)

## Import

```tsx
import { InputColor } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### InputColorSize

```ts
type InputColorSize = "sm" | "md" | "lg";
```

### InputColor

Extends: `BaseInputColorProps`.

| Property         | Type                           | Default | Required | Description                                         |
| ---------------- | ------------------------------ | ------- | -------- | --------------------------------------------------- |
| `value`          | `string`                       | -       | No       | The value used by the component.                    |
| `defaultValue`   | `string`                       | -       | No       | The default value used by the component.            |
| `onChange`       | `(value: string) => void`      | -       | No       | Callback invoked when change occurs.                |
| `label`          | `ReactNode`                    | -       | No       | Text used for the label.                            |
| `showValue`      | `boolean`                      | -       | No       | Whether show value is enabled.                      |
| `size`           | `InputColorSize`               | -       | No       | The size preset applied to the color input trigger. |
| `palettePresets` | `string[] \| null`             | -       | No       | The palette presets used by the component.          |
| `valueFormatter` | `(value: string) => ReactNode` | -       | No       | The value formatter used by the component.          |
| `className`      | `DivClassName`                 | -       | No       | CSS classes applied to the root element.            |
| `classNames`     | `InputColorClassNames`         | -       | No       | CSS classes applied to the component slots.         |

### InputColorClassNames

| Property         | Description                                 |
| ---------------- | ------------------------------------------- |
| `label`          | Text used for the label.                    |
| `control`        | The control used by the component.          |
| `picker`         | The picker used by the component.           |
| `preview`        | The preview used by the component.          |
| `input`          | The input used by the component.            |
| `value`          | The value used by the component.            |
| `panel`          | The panel used by the component.            |
| `colorArea`      | The color area used by the component.       |
| `colorAreaThumb` | The color area thumb used by the component. |
| `hueTrack`       | The hue track used by the component.        |
| `hueThumb`       | The hue thumb used by the component.        |
| `alphaTrack`     | The alpha track used by the component.      |
| `alphaThumb`     | The alpha thumb used by the component.      |
| `eyeDropper`     | The eye dropper used by the component.      |
| `hexInput`       | The hex input used by the component.        |
| `palette`        | The palette used by the component.          |
| `preset`         | The preset used by the component.           |

## Example

```tsx
import { useState } from "react";
import { InputColor } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoInputColor() {
    const [color, setColor] = useState("#8B5CF6");

    return (
        <InputColor
            label="Accent color"
            value={color}
            onChange={setColor}
            palettePresets={[
                "#8B5CF6",
                "#3B82F6",
                "#10B981",
                "#F59E0B",
                "#EF4444",
            ]}
        />
    );
}
```

### Without palette

The palette is disabled by default. Omit `palettePresets` or pass `null`:

```tsx
<InputColor defaultValue="#0EA5E9" palettePresets={null} />
```

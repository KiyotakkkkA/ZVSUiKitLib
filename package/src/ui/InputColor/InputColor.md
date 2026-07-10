# InputColor

## Purpose

Custom color picker with a saturation/brightness area, hue and alpha sliders, screen eyedropper, editable HEX value, and an optional preset palette.

## Import

```tsx
import { InputColor } from "@kiyotakkkka/zvs-uikit-lib/ui";
```

## Props

| Prop           | Type                           | Default     | Description                                         |
| -------------- | ------------------------------ | ----------- | --------------------------------------------------- |
| value          | string                         | -           | Controlled color in `#RRGGBB` or `#RRGGBBAA` format. |
| defaultValue   | string                         | `"#6366F1"` | Initial color in uncontrolled mode.                 |
| onChange       | `(value: string) => void`      | -           | Called with `#RRGGBB`, or `#RRGGBBAA` when translucent. |
| label          | ReactNode                      | -           | Label rendered above the trigger.                   |
| showValue      | boolean                        | `true`      | Shows the current formatted color in the trigger.   |
| size           | `"sm" \| "md" \| "lg"`    | `"md"`      | Trigger size.                                       |
| palettePresets | `string[] \| null`             | `null`      | Optional quick-select palette inside the popup.     |
| valueFormatter | `(value: string) => ReactNode` | -           | Formats the value displayed in the trigger.         |
| disabled       | boolean                        | `false`     | Disables the trigger and all picker interactions.   |
| readOnly       | boolean                        | `false`     | Prevents changes and opening the picker.            |
| className      | string                         | -           | Root wrapper classes.                               |
| classNames     | object                         | -           | Classes for internal slots.                         |

The selected value is submitted through an underlying hidden input. Compatible native attributes such as `name`, `form`, and ARIA attributes are forwarded to it. The screen eyedropper uses the browser EyeDropper API when available and preserves the current alpha value.

### `classNames` slots

| Slot           | Description                              |
| -------------- | ---------------------------------------- |
| label          | Label classes.                           |
| control        | Picker trigger classes.                  |
| picker         | Trigger color-preview container classes. |
| preview        | Trigger solid color preview classes.     |
| input          | Hidden form input classes.               |
| value          | Trigger value classes.                   |
| panel          | Popup panel classes.                     |
| colorArea      | Saturation/brightness area classes.       |
| colorAreaThumb | Saturation/brightness pointer classes.    |
| hueTrack       | Hue slider track classes.                |
| hueThumb       | Hue slider pointer classes.              |
| alphaTrack     | Alpha slider track classes.              |
| alphaThumb     | Alpha slider pointer classes.            |
| eyeDropper     | Screen eyedropper button classes.        |
| hexInput       | Editable HEX input classes.              |
| palette        | Preset palette section classes.          |
| preset         | Individual preset button classes.        |

## Controlled example

```tsx
import { useState } from "react";
import { InputColor } from "@kiyotakkkka/zvs-uikit-lib/ui";

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

## Without palette

The palette is disabled by default. Omit `palettePresets` or pass `null`:

```tsx
<InputColor defaultValue="#0EA5E9" palettePresets={null} />
```

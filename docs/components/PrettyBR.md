# PrettyBR

## Purpose

Decorative horizontal separator with icon and center label.

## Props

| Prop      | Type   | Default         | Description        |
| --------- | ------ | --------------- | ------------------ |
| icon      | string | `"mdi:script"`  | Iconify icon id.   |
| label     | string | `"New Section"` | Center label text. |
| size      | number | `16`            | Icon size.         |
| className | string | -               | Extra classes.     |

## Example

```tsx
import { PrettyBR } from "@kiyotakkkka/zvs-uikit-lib/ui";

export function DemoPrettyBR() {
    return <PrettyBR label="Main block" icon="mdi:star-outline" />;
}
```

# PrettyBR

## Purpose

Decorative horizontal separator with icon and center label.

## Import

```tsx
import { PrettyBR } from "@kiyotakkkka/zvs-uikit-lib/ui";
```

## Props

| Prop       | Type   | Default         | Description                 |
| ---------- | ------ | --------------- | --------------------------- |
| icon       | string | `"mdi:script"`  | Iconify icon id.            |
| label      | string | `"New Section"` | Center label text.          |
| size       | number | `16`            | Icon size.                  |
| className  | string | -               | Extra classes.              |
| classNames | object | -               | Classes for internal slots. |

### `classNames` slots

| Slot    | Description                |
| ------- | -------------------------- |
| divider | Horizontal line classes.   |
| icon    | Icon classes.              |
| label   | Center label text classes. |

## Example

```tsx
import { PrettyBR } from "@kiyotakkkka/zvs-uikit-lib/ui";

export function DemoPrettyBR() {
    return <PrettyBR label="Main block" icon="mdi:star-outline" />;
}
```

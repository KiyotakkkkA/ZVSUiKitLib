# Badge

## Purpose

Compact status indicator.

## Import

```tsx
import { Badge } from "@kiyotakkkka/zvs-uikit-lib";
```

## Props

| Prop      | Type                                                        | Default        | Description          |
| --------- | ----------------------------------------------------------- | -------------- | -------------------- |
| variant   | [`ColorVariantsBase`](../../docs/dict.md#colorvariantsbase) | `"secondary"`  | Badge color style.   |
| rounded   | [`RoundVariants`](../../docs/dict.md#roundvariants)         | `"rounded-lg"` | Border radius shape. |
| className | string                                                      | -              | Extra classes.       |
| children  | ReactNode                                                   | -              | Badge content.       |

## Example

```tsx
"use client";
import { Badge } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoBadge() {
    return <Badge variant="success">Active</Badge>;
}
```

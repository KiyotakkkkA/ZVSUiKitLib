# Badge

## Purpose

Compact status indicator.

## Import

```tsx
import { Badge } from "@kiyotakkkka/zvs-uikit-lib";
```

## Props

| Prop      | Type                                                        | Default     | Description        |
| --------- | ----------------------------------------------------------- | ----------- | ------------------ |
| variant   | `"neutral" \| "success" \| "warning" \| "danger" \| "info"` | `"neutral"` | Badge color style. |
| className | string                                                      | -           | Extra classes.     |
| children  | ReactNode                                                   | -           | Badge content.     |

## Example

```tsx
"use client";
import { Badge } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoBadge() {
    return <Badge variant="success">Active</Badge>;
}
```

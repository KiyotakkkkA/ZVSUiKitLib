# Badge

## Purpose

Compact status indicator.

## Props

Extends `HTMLAttributes<HTMLSpanElement>`.

| Prop      | Type                                                        | Default     | Description        |
| --------- | ----------------------------------------------------------- | ----------- | ------------------ |
| variant   | `"neutral" \| "success" \| "warning" \| "danger" \| "info"` | `"neutral"` | Badge color style. |
| className | string                                                      | -           | Extra classes.     |
| children  | ReactNode                                                   | -           | Badge content.     |

## Example

```tsx
import { Badge } from "@kiyotakkkka/zvs-uikit-lib/ui";

export function DemoBadge() {
    return <Badge variant="success">Active</Badge>;
}
```

# Separator

## Purpose

Horizontal or vertical visual separator.

## Props

Extends `HTMLAttributes<HTMLDivElement>`.

| Prop        | Type                         | Default        | Description            |
| ----------- | ---------------------------- | -------------- | ---------------------- |
| orientation | `"horizontal" \| "vertical"` | `"horizontal"` | Separator orientation. |
| className   | string                       | -              | Extra classes.         |

## Example

```tsx
import { Separator } from "@kiyotakkkka/zvs-uikit-lib/ui";

export function DemoSeparator() {
    return <Separator className="my-4" />;
}
```

# ScrollArea

## Purpose

Scrollable container with unified custom scrollbar styles for the UI kit.

## Props

Extends `HTMLAttributes<HTMLDivElement>`.

| Prop        | Type                                   | Default      | Description            |
| ----------- | -------------------------------------- | ------------ | ---------------------- |
| orientation | `"horizontal" \| "vertical" \| "both"` | `"vertical"` | Scroll direction mode. |
| className   | string                                 | -            | Extra classes.         |
| children    | ReactNode                              | -            | Scrollable content.    |

## Example

```tsx
import { ScrollArea } from "@kiyotakkkka/zvs-uikit-lib/ui";

export function DemoScrollArea() {
    return (
        <ScrollArea orientation="both" className="max-h-40 border p-2">
            <div style={{ width: 600, height: 300 }}>Large content</div>
        </ScrollArea>
    );
}
```

# ScrollArea

## Table of contents

- [Import](#import)
- [API](#api)
    - [ScrollArea](#scrollarea)
- [Example](#example)

## Import

```tsx
import { ScrollArea } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### ScrollArea

Extends: `HTMLAttributes<HTMLDivElement>`.

| Property        | Type                                           | Default      | Required | Description                                               |
| --------------- | ---------------------------------------------- | ------------ | -------- | --------------------------------------------------------- |
| `ref`           | `Ref<HTMLDivElement>`                          | -            | No       | Receives the scroll container element.                    |
| `orientation`   | [Orientation](./dict.md#orientation) \| "both" | `"vertical"` | No       | The direction in which the component content is arranged. |
| `showScrollbar` | `boolean`                                      | `true`       | No       | Whether show scrollbar is enabled.                        |

## Example

```tsx
"use client";
import { ScrollArea } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoScrollArea() {
    return (
        <ScrollArea orientation="both" className="max-h-40 border p-2">
            <div style={{ width: 600, height: 300 }}>Large content</div>
        </ScrollArea>
    );
}
```

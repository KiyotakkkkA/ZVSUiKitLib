# Separator

## Purpose

Horizontal or vertical visual separator.

## Import

```tsx
import { Separator } from "@kiyotakkkka/zvs-uikit-lib";
```

## Props

Extends `HTMLAttributes<HTMLDivElement>`.

| Prop        | Type                                            | Default        | Description            |
| ----------- | ----------------------------------------------- | -------------- | ---------------------- |
| orientation | [`Orientation`](../../docs/dict.md#orientation) | `"horizontal"` | Separator orientation. |
| className   | string                                          | -              | Extra classes.         |

## Example

```tsx
"use client";
import { Separator } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoSeparator() {
    return <Separator className="my-4" />;
}
```

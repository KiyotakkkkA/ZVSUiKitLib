# Tooltip

## Purpose

Small hover/focus label attached to a wrapped element.

## Import

```tsx
import { Tooltip } from "@kiyotakkkka/zvs-uikit-lib";
```

## Props

| Prop      | Type                                                                                              | Default        | Description                    |
| --------- | ------------------------------------------------------------------------------------------------- | -------------- | ------------------------------ |
| children  | ReactNode                                                                                         | -              | Wrapped trigger element.       |
| label     | ReactNode                                                                                         | -              | Tooltip content.               |
| placement | [`PositionAnchor`](../../docs/dict.md#positionanchor) | `"top-center"` | Tooltip and arrow positioning. |
| rounded   | [`RoundVariants`](../../docs/dict.md#roundvariants) | `"rounded-lg"` | Tooltip border radius. |
| className | string                                                                                            | -              | Tooltip panel classes.         |

## Example

```tsx
"use client";
import { Button, Tooltip } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoTooltip() {
    return (
        <Tooltip label="The quick brown fox">
            <Button>Hover here</Button>
        </Tooltip>
    );
}
```

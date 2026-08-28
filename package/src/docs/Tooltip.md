# Tooltip

## Table of contents

- [Import](#import)
- [API](#api)
    - [Tooltip](#tooltip)
- [Example](#example)

## Import

```tsx
import { Tooltip } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### Tooltip

| Property    | Type                                           | Default          | Required | Description                                        |
| ----------- | ---------------------------------------------- | ---------------- | -------- | -------------------------------------------------- |
| `ref`       | `Ref<HTMLSpanElement>`                         | -                | No       | Receives the tooltip wrapper element.              |
| `children`  | `ReactNode`                                    | -                | Yes      | The content rendered inside the component.         |
| `label`     | `ReactNode`                                    | -                | Yes      | Text used for the label.                           |
| `placement` | [PositionAnchor](./dict.md#positionanchor)     | `"top-center"`   | No       | The content position relative to its trigger.      |
| `className` | `DivClassName`                                 | -                | No       | CSS classes applied to the root element.           |
| `rounded`   | [RoundVariants](./dict.md#roundvariants) \| "" | `"rounded-full"` | No       | The border-radius preset applied to the component. |

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

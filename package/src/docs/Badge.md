# Badge

## Table of contents

- [Import](#import)
- [API](#api)
    - [Badge](#badge)
- [Example](#example)

## Import

```tsx
import { Badge } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### Badge

Extends: `HTMLAttributes<HTMLSpanElement>`.

| Property  | Type                                             | Default        | Required | Description                                                       |
| --------- | ------------------------------------------------ | -------------- | -------- | ----------------------------------------------------------------- |
| `ref`     | `Ref<HTMLSpanElement>`                           | -              | No       | Receives the underlying \`HTMLSpanElement\` node.                 |
| `variant` | [ColorVariantsBase](./dict.md#colorvariantsbase) | `"secondary"`  | No       | Selects the badge color scheme.                                   |
| `rounded` | [RoundVariants](./dict.md#roundvariants) \| ""   | `"rounded-lg"` | No       | Selects the badge border radius.                                  |
| `size`    | [SizeVariants](./dict.md#sizevariants)           | -              | No       | Selects the badge padding and text size on the shared size scale. |

```tsx
"use client";
import { Badge } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoBadge() {
    return <Badge variant="success">Active</Badge>;
}
```

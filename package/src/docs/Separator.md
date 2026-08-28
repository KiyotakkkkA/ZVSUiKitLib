# Separator

## Table of contents

- [Import](#import)
- [API](#api)
    - [Separator](#separator)
- [Example](#example)

## Import

```tsx
import { Separator } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### Separator

Extends: `HTMLAttributes<HTMLDivElement>`.

| Property      | Type                                 | Default        | Required | Description                                               |
| ------------- | ------------------------------------ | -------------- | -------- | --------------------------------------------------------- |
| `ref`         | `Ref<HTMLDivElement>`                | -              | No       | Receives the underlying \`HTMLDivElement\` node.          |
| `orientation` | [Orientation](./dict.md#orientation) | `"horizontal"` | No       | The direction in which the component content is arranged. |

```tsx
"use client";
import { Separator } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoSeparator() {
    return <Separator className="my-4" />;
}
```

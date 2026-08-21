# Skeleton

## Table of contents

- [Import](#import)
- [API](#api)
    - [SkeletonRadius](#skeletonradius)
    - [SkeletonTone](#skeletontone)
    - [Skeleton](#skeleton)
- [Example](#example)

## Import

```tsx
import { Skeleton } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### SkeletonRadius

```ts
type SkeletonRadius = "none" | "sm" | "md" | "lg" | "xl" | "full";
```

### SkeletonTone

```ts
type SkeletonTone = "default" | "subtle" | "strong";
```

### Skeleton

Extends: `HTMLAttributes<HTMLDivElement>`.

| Property   | Type                  | Default     | Required | Description                                        |
| ---------- | --------------------- | ----------- | -------- | -------------------------------------------------- |
| `ref`      | `Ref<HTMLDivElement>` | -           | No       | Receives the underlying \`HTMLDivElement\` node.   |
| `animated` | `boolean`             | `true`      | No       | The animated used by the component.                |
| `rounded`  | `SkeletonRadius`      | `"md"`      | No       | The border-radius preset applied to the component. |
| `tone`     | `SkeletonTone`        | `"default"` | No       | The color tone applied to the component.           |

## Example

```tsx
"use client";
import { Skeleton } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoSkeleton() {
    return (
        <div className="space-y-3">
            <Skeleton className="h-5 w-48" />
            <Skeleton className="h-4 w-full" tone="subtle" rounded="sm" />
            <Skeleton className="h-4 w-2/3" tone="strong" />
        </div>
    );
}
```

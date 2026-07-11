# Skeleton

## Purpose

Placeholder block for content that is loading.

## Import

```tsx
import { Skeleton } from "@kiyotakkkka/zvs-uikit-lib";
```

## Props

| Prop      | Type                                             | Default   | Description                        |
| --------- | ------------------------------------------------ | --------- | ---------------------------------- |
| animated  | boolean                                          | true      | Enables shimmer animation.         |
| rounded   | "none" \| "sm" \| "md" \| "lg" \| "xl" \| "full" | "md"      | Border radius preset.              |
| tone      | "default" \| "subtle" \| "strong"                | "default" | Background intensity preset.       |
| className | string                                           | -         | Extra classes for size and layout. |

Also accepts native `div` attributes.

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

# Loader

## Purpose

Minimal loading spinner.

## Import

```tsx
import { Loader } from "@kiyotakkkka/zvs-uikit-lib";
```

## Props

| Prop      | Type   | Default | Description                           |
| --------- | ------ | ------- | ------------------------------------- |
| className | string | -       | Extra classes (size, color, spacing). |

## Example

```tsx
"use client";
import { Loader } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoLoader() {
    return <Loader className="h-6 w-6" />;
}
```

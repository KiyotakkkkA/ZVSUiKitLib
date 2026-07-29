# Loader

## Table of contents

- [Import](#import)
- [API](#api)
    - [Loader](#loader)
- [Example](#example)

## Import

```tsx
import { Loader } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### Loader

| Property    | Type           | Default | Required | Description                             |
| ----------- | -------------- | ------- | -------- | --------------------------------------- |
| `className` | `DivClassName` | -       | No       | Applies CSS classes to the spinner SVG. |

## Example

```tsx
"use client";
import { Loader } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoLoader() {
    return <Loader className="h-6 w-6" />;
}
```

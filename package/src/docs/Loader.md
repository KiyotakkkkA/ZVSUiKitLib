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

| Property    | Type                  | Default                          | Required | Description                             |
| ----------- | --------------------- | -------------------------------- | -------- | --------------------------------------- |
| `ref`       | `Ref<HTMLDivElement>` | -                                | No       | Receives the loader element.            |
| `label`     | `string`              | `defaultDictionary.loader.label` | No       | Loading label                           |
| `className` | `DivClassName`        | -                                | No       | Applies CSS classes to the spinner SVG. |

```tsx
"use client";
import { Loader } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoLoader() {
    return <Loader className="h-6 w-6" />;
}
```

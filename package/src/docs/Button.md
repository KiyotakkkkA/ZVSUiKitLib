# Button

## Table of contents

- [Import](#import)
- [API](#api)
    - [ButtonVariants](#buttonvariants)
    - [Button](#button)
        - [ButtonClassNames](#buttonclassnames)
- [Example](#example)

## Import

```tsx
import { Button } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### ButtonVariants

```ts
type ButtonVariants = ColorVariantsBase | ColorVariantOutline | "ghost";
```

### Button

Extends: `ButtonHTMLAttributes<HTMLButtonElement>`.

| Property      | Type                   | Default          | Required | Description                                                            |
| ------------- | ---------------------- | ---------------- | -------- | ---------------------------------------------------------------------- |
| `children`    | `ReactNode`            | -                | Yes      | Renders the normal button content.                                     |
| `label`       | `string`               | -                | No       | Provides an accessible label when the visible content is insufficient. |
| `loading`     | `boolean`              | `false`          | No       | Disables the button and displays its loading state.                    |
| `loadingText` | `string`               | -                | No       | Replaces the button content while loading.                             |
| `variant`     | `ButtonVariants \| ""` | `"secondary"`    | No       | Selects the button color and emphasis style.                           |
| `rounded`     | `RoundVariants \| ""`  | `"rounded-full"` | No       | Selects the button border radius.                                      |
| `classNames`  | `ButtonClassNames`     | -                | No       | Applies CSS classes to the button loading slots.                       |

### ButtonClassNames

| Property     | Description                                    |
| ------------ | ---------------------------------------------- |
| `loaderIcon` | Applies CSS classes to the loading spinner.    |
| `loaderText` | Applies CSS classes to the loading-state text. |

## Example

```tsx
"use client";
import { Button } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoButton() {
    return (
        <Button variant="primary" onClick={() => alert("Clicked")}>
            Save
        </Button>
    );
}
```

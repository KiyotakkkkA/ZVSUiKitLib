# Alert

## Purpose

Notification block with variant, title, and content.

## Import

```tsx
import { Alert } from "@kiyotakkkka/zvs-uikit-lib";
```

## Props

| Prop       | Type                                                                                     | Default       | Description                          |
| ---------- | ---------------------------------------------------------------------------------------- | ------------- | ------------------------------------ |
| variant    | `"primary" \| "secondary" \| "tertiary" \| "success" \| "warning" \| "danger" \| "info"` | `"secondary"` | Alert visual style.                  |
| rounded    | `RoundVariants`                                                                            | `"rounded-lg"` | Border radius shape.                 |
| title      | ReactNode                                                                                | -             | Alert title.                         |
| icon       | ReactNode                                                                                | -             | Custom icon (replaces default icon). |
| className  | string                                                                                   | -             | Extra classes.                       |
| classNames | object                                                                                   | -             | Classes for internal slots.          |
| children   | ReactNode                                                                                | -             | Alert body content.                  |

### `classNames` slots

| Slot    | Description                |
| ------- | -------------------------- |
| icon    | Icon wrapper classes.      |
| content | Content wrapper classes.   |
| title   | Title text classes.        |
| body    | Body text wrapper classes. |

## Example

```tsx
"use client";
import { Alert } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoAlert() {
    return (
        <Alert variant="warning" title="Warning">
            Please check required fields.
        </Alert>
    );
}
```

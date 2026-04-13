# Alert

## Purpose

Notification block with variant, title, and content.

## Props

Extends `HTMLAttributes<HTMLDivElement>`.

| Prop       | Type                                                        | Default     | Description                          |
| ---------- | ----------------------------------------------------------- | ----------- | ------------------------------------ |
| variant    | `"neutral" \| "success" \| "warning" \| "danger" \| "info"` | `"neutral"` | Alert visual style.                  |
| title      | ReactNode                                                   | -           | Alert title.                         |
| icon       | ReactNode                                                   | -           | Custom icon (replaces default icon). |
| className  | string                                                      | -           | Extra classes.                       |
| classNames | object                                                      | -           | Classes for internal slots.          |
| children   | ReactNode                                                   | -           | Alert body content.                  |

### classNames slots

| Slot    | Description                |
| ------- | -------------------------- |
| icon    | Icon wrapper classes.      |
| content | Content wrapper classes.   |
| title   | Title text classes.        |
| body    | Body text wrapper classes. |

## Example

```tsx
import { Alert } from "@kiyotakkkka/zvs-uikit-lib/ui";

export function DemoAlert() {
    return (
        <Alert variant="warning" title="Warning">
            Please check required fields.
        </Alert>
    );
}
```

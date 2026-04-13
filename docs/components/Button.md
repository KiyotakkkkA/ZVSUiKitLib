# Button

## Purpose

Base button with color variants and shape options.

## Props

Supports all standard `button` props (`onClick`, `disabled`, `type`, etc.).

| Prop      | Type                                                                                                                             | Default          | Description                                                 |
| --------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ----------------------------------------------------------- |
| children  | ReactNode                                                                                                                        | -                | Button content.                                             |
| label     | string                                                                                                                           | -                | Value for `aria-label`.                                     |
| variant   | `"ghost" \| "primary" \| "secondary" \| "danger" \| "success" \| "warning" \| ""`                                                | `"secondary"`    | Visual style. Empty string disables built-in variant style. |
| shape     | `"rounded-none" \| "rounded-sm" \| "rounded-md" \| "rounded-lg" \| "rounded-full" \| "rounded-l-full" \| "rounded-r-full" \| ""` | `"rounded-full"` | Border radius shape.                                        |
| className | string                                                                                                                           | -                | Extra classes.                                              |

## Example

```tsx
import { Button } from "@kiyotakkkka/zvs-uikit-lib/ui";

export function DemoButton() {
    return (
        <Button variant="primary" onClick={() => alert("Clicked")}>
            Save
        </Button>
    );
}
```

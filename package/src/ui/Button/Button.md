# Button

## Purpose

Base button with color variants and shape options.

## Import

```tsx
import { Button } from "@kiyotakkkka/zvs-uikit-lib/ui";
```

## Props

| Prop        | Type                                                                                                                             | Default          | Description                                                           |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------------- | --------------------------------------------------------------------- |
| children    | ReactNode                                                                                                                        | -                | Button content.                                                       |
| label       | string                                                                                                                           | -                | Value for `aria-label`.                                               |
| loading     | boolean                                                                                                                          | `false`          | Shows loading state and disables the button.                          |
| loadingText | string                                                                                                                           | -                | Text shown while loading. Without it, the centered `Loader` is shown. |
| variant     | `"ghost" \| "primary" \| "secondary" \| "danger" \| "success" \| "warning" \| ""`                                                | `"secondary"`    | Visual style. Empty string disables built-in variant style.           |
| shape       | `"rounded-none" \| "rounded-sm" \| "rounded-md" \| "rounded-lg" \| "rounded-full" \| "rounded-l-full" \| "rounded-r-full" \| ""` | `"rounded-full"` | Border radius shape.                                                  |
| className   | string                                                                                                                           | -                | Extra classes.                                                        |

### `classNames` slots

| Slot       | Description                  |
| ---------- | ---------------------------- |
| loaderIcon | Loader icon wrapper classes. |
| loaderText | Loader text wrapper classes. |

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

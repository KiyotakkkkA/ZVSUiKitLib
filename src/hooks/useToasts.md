# useToasts

## Purpose

Hook for accessing toast notification API from `ToastContext`.

## Usage Requirement

`useToasts` must be called inside `ToastProvider`, otherwise it throws an error.

## Return Value

Object with methods:

| Method  | Signature               | Description                                                            |
| ------- | ----------------------- | ---------------------------------------------------------------------- |
| push    | `(type, input) => void` | Show toast by type (`normal`, `info`, `warning`, `success`, `danger`). |
| normal  | `(input) => void`       | Show `normal` toast.                                                   |
| info    | `(input) => void`       | Show `info` toast.                                                     |
| warning | `(input) => void`       | Show `warning` toast.                                                  |
| success | `(input) => void`       | Show `success` toast.                                                  |
| danger  | `(input) => void`       | Show `danger` toast.                                                   |

`input`:

- `title: string`
- `description?: string`
- `durationMs?: number`

## Example

```tsx
import { useToasts } from "@kiyotakkkka/zvs-uikit-lib/hooks";
import { ToastProvider } from "@kiyotakkkka/zvs-uikit-lib/providers";
import { Button } from "@kiyotakkkka/zvs-uikit-lib/ui";

function SaveButton() {
    const toasts = useToasts();

    return (
        <Button
            onClick={() =>
                toasts.success({
                    title: "Saved",
                    description: "Changes were applied",
                })
            }
        >
            Save
        </Button>
    );
}

export function DemoToasts() {
    return (
        <ToastProvider>
            <SaveButton />
        </ToastProvider>
    );
}
```

# useToasts

## Purpose

Hook for accessing toast notification API from `ToastContext`.

## Usage Requirement

`useToasts` must be called inside `ToastProvider`, otherwise it throws an error.

## Return Value

Object with methods:

| Method    | Signature               | Description                                                                                      |
| --------- | ----------------------- | ------------------------------------------------------------------------------------------------ |
| push      | `(type, input) => void` | Show toast by type (`primary`, `secondary`, `tertiary`, `info`, `warning`, `success`, `danger`). |
| primary   | `(input) => void`       | Show `primary` toast.                                                                            |
| secondary | `(input) => void`       | Show `secondary` toast.                                                                          |
| tertiary  | `(input) => void`       | Show `tertiary` toast.                                                                           |
| info      | `(input) => void`       | Show `info` toast.                                                                               |
| warning   | `(input) => void`       | Show `warning` toast.                                                                            |
| success   | `(input) => void`       | Show `success` toast.                                                                            |
| danger    | `(input) => void`       | Show `danger` toast.                                                                             |

`input`:

- `title: string`
- `description?: string`
- `durationMs?: number`

## Example

```tsx
import { useToasts } from "@kiyotakkkka/zvs-uikit-lib";
import { ToastProvider } from "@kiyotakkkka/zvs-uikit-lib";
import { Button } from "@kiyotakkkka/zvs-uikit-lib";

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

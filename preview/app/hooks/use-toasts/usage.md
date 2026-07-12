```tsx
"use client";
import { Button, ToastProvider, useToasts } from "@kiyotakkkka/zvs-uikit-lib";

function SaveButton() {
    const toasts = useToasts();

    return (
        <Button
            onClick={() =>
                toasts.success({
                    title: "Changes saved",
                    description: "Your settings were updated.",
                })
            }
        >
            Save
        </Button>
    );
}

export function App() {
    return (
        <ToastProvider>
            <SaveButton />
        </ToastProvider>
    );
}
```

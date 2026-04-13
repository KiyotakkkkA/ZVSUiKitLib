# SlidedPanel

## Purpose

Slide-in side panel (drawer) with title and optional subtitle.

## Props

| Prop                | Type                                                  | Default | Description                             |
| ------------------- | ----------------------------------------------------- | ------- | --------------------------------------- |
| open                | boolean                                               | -       | Controls panel visibility.              |
| title               | ReactNode                                             | -       | Panel title.                            |
| subtitle            | ReactNode                                             | -       | Optional subtitle.                      |
| onClose             | `() => void`                                          | -       | Close handler.                          |
| closeOnOverlayClick | boolean                                               | `true`  | Close when clicking overlay.            |
| classes             | `{ width?: string; main?: string; content?: string }` | -       | Class overrides for width/root/content. |
| children            | ReactNode                                             | -       | Panel content.                          |

## Example

```tsx
import { SlidedPanel, Button } from "@kiyotakkkka/zvs-uikit-lib/ui";
import { useState } from "react";

export function DemoSlidedPanel() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setOpen(true)}>Open panel</Button>
            <SlidedPanel
                open={open}
                onClose={() => setOpen(false)}
                title="Filters"
                subtitle="Adjust parameters"
            >
                Panel content
            </SlidedPanel>
        </>
    );
}
```

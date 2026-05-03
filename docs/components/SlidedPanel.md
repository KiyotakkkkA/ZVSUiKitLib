# SlidedPanel

## Purpose

Slide-in side panel (drawer) with overlay, Escape closing, optional overlay-click closing, and composable header/content/footer sections.

## Import

```tsx
import { SlidedPanel } from "@kiyotakkkka/zvs-uikit-lib/ui";
```

## Props

| Prop                | Type         | Default | Description                  |
| ------------------- | ------------ | ------- | ---------------------------- |
| open                | boolean      | -       | Controls panel visibility.   |
| onClose             | `() => void` | -       | Close handler.               |
| closeOnOverlayClick | boolean      | `true`  | Close when clicking overlay. |
| className           | string       | -       | Panel container classes.     |
| children            | ReactNode    | -       | Panel sections/content.      |

## Compound parts

| Component              | Extends                                | Description                                |
| ---------------------- | -------------------------------------- | ------------------------------------------ |
| `SlidedPanel.Header`   | `HTMLAttributes<HTMLElement>`          | Header section with built-in close button. |
| `SlidedPanel.Title`    | `HTMLAttributes<HTMLParagraphElement>` | Header title text.                         |
| `SlidedPanel.Subtitle` | `HTMLAttributes<HTMLParagraphElement>` | Header subtitle text.                      |
| `SlidedPanel.Content`  | `HTMLAttributes<HTMLDivElement>`       | Flexible main content section.             |
| `SlidedPanel.Footer`   | `HTMLAttributes<HTMLElement>`          | Footer section.                            |

All compound parts must be rendered inside `SlidedPanel`. They accept `children`, `className`, and the native HTML attributes for their rendered element.

## Example

```tsx
import { useState } from "react";
import { SlidedPanel, Button } from "@kiyotakkkka/zvs-uikit-lib/ui";

export function DemoSlidedPanel() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setOpen(true)}>Open panel</Button>

            <SlidedPanel open={open} onClose={() => setOpen(false)}>
                <SlidedPanel.Header>
                    <SlidedPanel.Title>Filters</SlidedPanel.Title>
                    <SlidedPanel.Subtitle>
                        Adjust parameters
                    </SlidedPanel.Subtitle>
                </SlidedPanel.Header>

                <SlidedPanel.Content>Panel content</SlidedPanel.Content>

                <SlidedPanel.Footer className="flex justify-end gap-2">
                    <Button variant="ghost" onClick={() => setOpen(false)}>
                        Cancel
                    </Button>
                    <Button onClick={() => setOpen(false)}>Apply</Button>
                </SlidedPanel.Footer>
            </SlidedPanel>
        </>
    );
}
```

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

### `SlidedPanel.Header` props

| Prop      | Type      | Default | Description                       |
| --------- | --------- | ------- | --------------------------------- |
| className | string    | -       | Header wrapper classes.           |
| children  | ReactNode | -       | Header content (title, subtitle). |

### `SlidedPanel.Title` props

| Prop      | Type      | Default | Description         |
| --------- | --------- | ------- | ------------------- |
| className | string    | -       | Title text classes. |
| children  | ReactNode | -       | Title text content. |

### `SlidedPanel.Subtitle` props

| Prop      | Type      | Default | Description            |
| --------- | --------- | ------- | ---------------------- |
| className | string    | -       | Subtitle text classes. |
| children  | ReactNode | -       | Subtitle text content. |

### `SlidedPanel.Content` props

| Prop      | Type      | Default | Description              |
| --------- | --------- | ------- | ------------------------ |
| className | string    | -       | Content wrapper classes. |
| children  | ReactNode | -       | Main content of panel.   |

### `SlidedPanel.Footer` props

| Prop      | Type      | Default | Description               |
| --------- | --------- | ------- | ------------------------- |
| className | string    | -       | Footer wrapper classes.   |
| children  | ReactNode | -       | Footer content (buttons). |

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

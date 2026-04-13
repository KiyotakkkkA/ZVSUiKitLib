# SlidedPanel

## Purpose

Slide-in side panel (drawer) with title and optional subtitle.

## Props

| Prop                | Type         | Default | Description                  |
| ------------------- | ------------ | ------- | ---------------------------- |
| open                | boolean      | -       | Controls panel visibility.   |
| title               | ReactNode    | -       | Panel title.                 |
| subtitle            | ReactNode    | -       | Optional subtitle.           |
| onClose             | `() => void` | -       | Close handler.               |
| className           | string       | -       | Panel root classes.          |
| classNames          | object       | -       | Classes for internal slots.  |
| closeOnOverlayClick | boolean      | `true`  | Close when clicking overlay. |
| children            | ReactNode    | -       | Panel content.               |

### classNames slots

| Slot        | Description                        |
| ----------- | ---------------------------------- |
| overlay     | Overlay classes.                   |
| panel       | Panel container classes.           |
| width       | Width class for panel (`w-96` etc) |
| header      | Header wrapper classes.            |
| title       | Title text classes.                |
| subtitle    | Subtitle text classes.             |
| closeButton | Close button classes.              |
| content     | Content wrapper classes.           |

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

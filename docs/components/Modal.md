# Modal

## Purpose

Portal-based modal dialog with Escape and overlay-click closing support.

## Props

| Prop                | Type         | Default | Description                  |
| ------------------- | ------------ | ------- | ---------------------------- |
| open                | boolean      | -       | Controls modal visibility.   |
| title               | ReactNode    | -       | Header title.                |
| onClose             | `() => void` | -       | Close handler.               |
| footer              | ReactNode    | -       | Optional footer content.     |
| className           | string       | -       | Modal container classes.     |
| classNames          | object       | -       | Classes for internal slots.  |
| closeOnOverlayClick | boolean      | `true`  | Close when clicking overlay. |
| children            | ReactNode    | -       | Modal content.               |

### classNames slots

| Slot        | Description                   |
| ----------- | ----------------------------- |
| overlay     | Overlay classes.              |
| content     | Main modal container classes. |
| header      | Header wrapper classes.       |
| title       | Title text classes.           |
| closeButton | Close button classes.         |
| body        | Body scroll area classes.     |
| footer      | Footer wrapper classes.       |

## Example

```tsx
import { Modal, Button } from "@kiyotakkkka/zvs-uikit-lib/ui";
import { useState } from "react";

export function DemoModal() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setOpen(true)}>Open</Button>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                title="Confirmation"
                footer={<Button onClick={() => setOpen(false)}>Close</Button>}
            >
                Modal content
            </Modal>
        </>
    );
}
```

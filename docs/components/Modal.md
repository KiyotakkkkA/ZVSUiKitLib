# Modal

## Purpose

A compound modal component rendered through a portal with support for closing by `Escape` and overlay interaction.

## Import

```tsx
import { Modal } from "@kiyotakkkka/zvs-uikit-lib/ui";
```

## Props

| Prop                | Type         | Default | Description                                               |
| ------------------- | ------------ | ------- | --------------------------------------------------------- |
| open                | boolean      | -       | Controls modal visibility.                                |
| onClose             | `() => void` | -       | Close handler for `Escape`, overlay, and close button.    |
| className           | string       | -       | Classes for the modal container.                          |
| overlayClassName    | string       | -       | Classes for the overlay element.                          |
| closeOnOverlayClick | boolean      | `true`  | Closes when clicking overlay (and `Enter`/`Space` on it). |
| children            | ReactNode    | -       | `Modal.Header`, `Modal.Content`, `Modal.Footer` blocks.   |

## Compound parts

| Component       | Description                                |
| --------------- | ------------------------------------------ |
| `Modal.Header`  | Header section with optional close button. |
| `Modal.Content` | Scrollable content area.                   |
| `Modal.Footer`  | Footer section, usually for actions.       |

### `Modal.Header`

| Prop                 | Type      | Default          | Description                      |
| -------------------- | --------- | ---------------- | -------------------------------- |
| className            | string    | -                | Header wrapper classes.          |
| closeButtonClassName | string    | -                | Extra classes for close button.  |
| closeButtonAriaLabel | string    | `"Закрыть окно"` | `aria-label` for close button.   |
| showCloseButton      | boolean   | `true`           | Toggles close button visibility. |
| children             | ReactNode | -                | Header content (title/actions).  |

### `Modal.Content`

| Prop      | Type      | Default | Description                          |
| --------- | --------- | ------- | ------------------------------------ |
| className | string    | -       | Classes for scrollable content area. |
| children  | ReactNode | -       | Main body content.                   |

### `Modal.Footer`

| Prop      | Type      | Default | Description                      |
| --------- | --------- | ------- | -------------------------------- |
| className | string    | -       | Footer wrapper classes.          |
| children  | ReactNode | -       | Footer actions, usually buttons. |

## Notes

- Renders into `document.body` via `createPortal`.
- Adds `role="dialog"` and `aria-modal` to overlay.
- Closes on `Escape` when open.
- Can close on overlay click (configurable with `closeOnOverlayClick`).

## Example

```tsx
import { Modal, Button } from "@kiyotakkkka/zvs-uikit-lib/ui";
import { useState } from "react";

export function DemoModal() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setOpen(true)}>Открыть</Button>

            <Modal open={open} onClose={() => setOpen(false)}>
                <Modal.Header>Подтверждение</Modal.Header>

                <Modal.Content>
                    Вы уверены, что хотите продолжить?
                </Modal.Content>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setOpen(false)}>
                        Отмена
                    </Button>
                    <Button onClick={() => setOpen(false)}>Подтвердить</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
```

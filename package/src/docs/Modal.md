# Modal

## Table of contents

- [Import](#import)
- [API](#api)
    - [Modal](#modal)
    - [Modal.Content](#modalcontent)
    - [Modal.Footer](#modalfooter)
    - [Modal.Header](#modalheader)
- [Example](#example)

## Import

```tsx
import { Modal } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### Modal

| Property              | Type                                           | Default        | Required | Description                                        |
| --------------------- | ---------------------------------------------- | -------------- | -------- | -------------------------------------------------- |
| `open`                | `boolean`                                      | -              | Yes      | Whether open is enabled.                           |
| `onClose`             | `() => void`                                   | -              | Yes      | Callback invoked when close occurs.                |
| `className`           | `DivClassName`                                 | -              | No       | CSS classes applied to the root element.           |
| `overlayClassName`    | `DivClassName`                                 | -              | No       | CSS classes applied to the overlay element.        |
| `closeOnOverlayClick` | `boolean`                                      | `true`         | No       | Function used to close on overlay click.           |
| `rounded`             | [RoundVariants](./dict.md#roundvariants) \| "" | `"rounded-lg"` | No       | The border-radius preset applied to the component. |

### Modal.Content

| Property    | Type           | Default | Required | Description                              |
| ----------- | -------------- | ------- | -------- | ---------------------------------------- |
| `className` | `DivClassName` | -       | No       | CSS classes applied to the root element. |

### Modal.Footer

| Property    | Type           | Default | Required | Description                              |
| ----------- | -------------- | ------- | -------- | ---------------------------------------- |
| `className` | `DivClassName` | -       | No       | CSS classes applied to the root element. |

### Modal.Header

Extends: `ModalSectionProps`.

| Property               | Type              | Default          | Required | Description                                      |
| ---------------------- | ----------------- | ---------------- | -------- | ------------------------------------------------ |
| `closeButtonClassName` | `ButtonClassName` | -                | No       | CSS classes applied to the close button element. |
| `closeButtonAriaLabel` | `string`          | `"Закрыть окно"` | No       | Function used to close button aria label.        |
| `showCloseButton`      | `boolean`         | `true`           | No       | Whether show close button is enabled.            |

## Example

```tsx
"use client";
import { Modal, Button } from "@kiyotakkkka/zvs-uikit-lib";
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

# Alert

## Table of contents

- [Import](#import)
- [API](#api)
    - [Alert](#alert)
        - [AlertClassNames](#alertclassnames)
- [Example](#example)

## Import

```tsx
import { Alert } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### Alert

Extends: `HTMLAttributes<HTMLDivElement>`.

| Property     | Type                                             | Default        | Required | Description                                              |
| ------------ | ------------------------------------------------ | -------------- | -------- | -------------------------------------------------------- |
| `ref`        | `Ref<HTMLDivElement>`                            | -              | No       | Receives the underlying \`HTMLDivElement\` node.         |
| `variant`    | [ColorVariantsBase](./dict.md#colorvariantsbase) | `"secondary"`  | No       | Selects the alert color scheme and default status icon.  |
| `title`      | `ReactNode`                                      | -              | No       | Renders an optional heading above the alert body.        |
| `icon`       | `ReactNode`                                      | -              | No       | Replaces the default icon selected by the alert variant. |
| `classNames` | `AlertClassNames`                                | -              | No       | Applies CSS classes to the alert slots.                  |
| `rounded`    | [RoundVariants](./dict.md#roundvariants) \| ""   | `"rounded-lg"` | No       | Selects the alert container border radius.               |

### AlertClassNames

| Property  | Description                                          |
| --------- | ---------------------------------------------------- |
| `icon`    | Applies CSS classes to the icon wrapper.             |
| `content` | Applies CSS classes to the title and body container. |
| `title`   | Applies CSS classes to the title paragraph.          |
| `body`    | Applies CSS classes to the alert body container.     |

## Example

```tsx
"use client";
import { Alert } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoAlert() {
    return (
        <Alert variant="warning" title="Warning">
            Please check required fields.
        </Alert>
    );
}
```

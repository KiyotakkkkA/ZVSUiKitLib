# Floating

## Table of contents

- [Import](#import)
- [API](#api)
    - [Floating](#floating)
    - [Floating.Trigger](#floatingtrigger)
    - [Floating.Content](#floatingcontent)
    - [FloatingContextValue](#floatingcontextvalue)
- [Example](#example)

## Import

```tsx
import { Floating } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### Floating

Extends: `HTMLAttributes<HTMLDivElement>`.

| Property     | Type                                       | Default       | Required | Description                                                                                         |
| ------------ | ------------------------------------------ | ------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `ref`        | `Ref<HTMLDivElement>`                      | -             | No       | Receives the floating root element.                                                                 |
| `children`   | `ReactNode`                                | -             | Yes      | The content rendered inside the component.                                                          |
| `anchor`     | [PositionAnchor](./dict.md#positionanchor) | `"top-right"` | No       | Content rendered for the anchor.                                                                    |
| `fixOnClick` | `boolean`                                  | `true`        | No       | Clicking the trigger pins the panel open until the next trigger click, an outside click, or Escape. |

### Floating.Trigger

```ts
type FloatingTriggerProps = HTMLAttributes<HTMLDivElement>;
```

### Floating.Content

Extends: `HTMLAttributes<HTMLDivElement>`.

| Property  | Type                                           | Default        | Required | Description                                        |
| --------- | ---------------------------------------------- | -------------- | -------- | -------------------------------------------------- |
| `rounded` | [RoundVariants](./dict.md#roundvariants) \| "" | `"rounded-lg"` | No       | The border-radius preset applied to the component. |

### FloatingContextValue

| Property           | Type                                       | Default | Required | Description                                                    |
| ------------------ | ------------------------------------------ | ------- | -------- | -------------------------------------------------------------- |
| `anchor`           | [PositionAnchor](./dict.md#positionanchor) | -       | Yes      | Content rendered for the anchor.                               |
| `open`             | `boolean`                                  | -       | Yes      | Whether the panel is currently visible.                        |
| `fixed`            | `boolean`                                  | -       | Yes      | Whether the panel is pinned open by a trigger click.           |
| `fixOnClick`       | `boolean`                                  | -       | Yes      | Whether clicking the trigger pins the panel open.              |
| `rootRef`          | `RefObject<HTMLDivElement \| null>`        | -       | Yes      | Receives the floating root element used to position the panel. |
| `setContentActive` | `(active: boolean) => void`                | -       | Yes      | Reports hover/focus state changes from the portaled panel.     |
| `setFixed`         | `Dispatch<SetStateAction<boolean>>`        | -       | Yes      | Updates the pinned state of the panel.                         |

```tsx
"use client";
import { Floating, Button } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoFloating() {
    return (
        <Floating anchor="bottom-right">
            <Floating.Trigger>
                <Button variant="secondary">Hover me</Button>
            </Floating.Trigger>

            <Floating.Content className="text-sm">
                Action tooltip
            </Floating.Content>
        </Floating>
    );
}
```

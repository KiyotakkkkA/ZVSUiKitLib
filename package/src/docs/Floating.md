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

| Property   | Type                                       | Default       | Required | Description                                |
| ---------- | ------------------------------------------ | ------------- | -------- | ------------------------------------------ |
| `children` | `ReactNode`                                | -             | Yes      | The content rendered inside the component. |
| `anchor`   | [PositionAnchor](./dict.md#positionanchor) | `"top-right"` | No       | Content rendered for the anchor.           |

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

| Property | Type                                       | Default | Required | Description                      |
| -------- | ------------------------------------------ | ------- | -------- | -------------------------------- |
| `anchor` | [PositionAnchor](./dict.md#positionanchor) | -       | Yes      | Content rendered for the anchor. |

## Example

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

# Floating

## Purpose

Compound hover/focus panel attached to a trigger element.

## Import

```tsx
import { Floating } from "@kiyotakkkka/zvs-uikit-lib";
```

## Props

| Prop      | Type                                                                                              | Default       | Description                                |
| --------- | ------------------------------------------------------------------------------------------------- | ------------- | ------------------------------------------ |
| children  | `ReactNode`                                                                                       | -             | `Floating.Trigger` and `Floating.Content`. |
| anchor    | `"top-left" \| "top-center" \| "top-right" \| "bottom-left" \| "bottom-center" \| "bottom-right"` | `"top-right"` | Content position relative to the trigger.  |
| className | `string`                                                                                          | -             | Root wrapper classes.                      |

The root also accepts standard `HTMLAttributes<HTMLDivElement>`.

## Compound parts

| Component          | Extends                          | Description                                   |
| ------------------ | -------------------------------- | --------------------------------------------- |
| `Floating.Trigger` | `HTMLAttributes<HTMLDivElement>` | Hover/focus trigger wrapper.                  |
| `Floating.Content` | `HTMLAttributes<HTMLDivElement>` | Floating panel shown relative to the trigger. |

### "Floating.Trigger" Props

| Prop      | Type        | Default | Description              |
| --------- | ----------- | ------- | ------------------------ |
| children  | `ReactNode` | -       | Trigger content.         |
| className | `string`    | -       | Trigger wrapper classes. |

### "Floating.Content" Props

| Prop      | Type        | Default | Description               |
| --------- | ----------- | ------- | ------------------------- |
| children  | `ReactNode` | -       | Content of the floating.  |
| className | `string`    | -       | Floating wrapper classes. |

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

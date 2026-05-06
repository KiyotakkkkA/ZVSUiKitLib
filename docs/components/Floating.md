# Floating

## Purpose

Hover/focus panel attached to an anchor element.

## Import

```tsx
import { Floating } from "@kiyotakkkka/zvs-uikit-lib/ui";
```

## Props

| Prop       | Type                                                           | Default       | Description                                   |
| ---------- | -------------------------------------------------------------- | ------------- | --------------------------------------------- |
| children   | ReactNode                                                      | -             | Anchor element.                               |
| content    | ReactNode                                                      | -             | Floating panel content.                       |
| anchor     | `"top-left" \| "top-right" \| "bottom-left" \| "bottom-right"` | `"top-right"` | Panel position relative to anchor.            |
| className  | string                                                         | -             | Wrapper classes.                              |
| classNames | object                                                         | -             | Classes for internal slots (see table below). |

### `classNames` slots

| Slot    | Description                  |
| ------- | ---------------------------- |
| panel   | Floating panel classes.      |
| content | Inner content wrapper class. |

## Example

```tsx
import { Floating, Button } from "@kiyotakkkka/zvs-uikit-lib/ui";

export function DemoFloating() {
    return (
        <Floating
            anchor="bottom-right"
            content={<div className="text-sm">Action tooltip</div>}
        >
            <Button variant="secondary">Hover me</Button>
        </Floating>
    );
}
```

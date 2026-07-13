# Kbd

## Purpose

Compact visual token for keyboard input.

## Import

```tsx
import { Kbd } from "@kiyotakkkka/zvs-uikit-lib";
```

This component is also available from `@kiyotakkkka/zvs-uikit-lib/server`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| className | string | - | Additional kbd element classes. |
| children | ReactNode | - | Key label. |

The component forwards the native attributes supported by its underlying semantic element.

## Example

```tsx
import { Kbd } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoKbd() {
    return <Kbd>Esc</Kbd>;
}
```


# Em

## Purpose

Semantic stress emphasis for running text.

## Import

```tsx
import { Em } from "@kiyotakkkka/zvs-uikit-lib";
```

This component is also available from `@kiyotakkkka/zvs-uikit-lib/server`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| className | string | - | Additional em element classes. |
| children | ReactNode | - | Emphasized content. |

The component forwards the native attributes supported by its underlying semantic element.

## Example

```tsx
import { Em } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoEm() {
    return <Em>Important nuance</Em>;
}
```


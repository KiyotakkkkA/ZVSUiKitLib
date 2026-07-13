# Strong

## Purpose

Semantic importance with restrained visual emphasis.

## Import

```tsx
import { Strong } from "@kiyotakkkka/zvs-uikit-lib";
```

This component is also available from `@kiyotakkkka/zvs-uikit-lib/server`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| className | string | - | Additional strong element classes. |
| children | ReactNode | - | Important content. |

The component forwards the native attributes supported by its underlying semantic element.

## Example

```tsx
import { Strong } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoStrong() {
    return <Strong>Unsaved changes</Strong>;
}
```


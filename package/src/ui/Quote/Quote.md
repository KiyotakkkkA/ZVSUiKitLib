# Quote

## Purpose

Inline semantic quotation within surrounding prose.

## Import

```tsx
import { Quote } from "@kiyotakkkka/zvs-uikit-lib";
```

This component is also available from `@kiyotakkkka/zvs-uikit-lib/server`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| className | string | - | Additional q element classes. |
| children | ReactNode | - | Quoted content. |

The component forwards the native attributes supported by its underlying semantic element.

## Example

```tsx
import { Quote } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoQuote() {
    return <Quote>quiet and predictable</Quote>;
}
```


# Blockquote

## Purpose

Block quotation with an optional source or attribution.

## Import

```tsx
import { Blockquote } from "@kiyotakkkka/zvs-uikit-lib";
```

This component is also available from `@kiyotakkkka/zvs-uikit-lib/server`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| cite | ReactNode | - | Optional attribution rendered in the footer. |
| className | string | - | Additional blockquote classes. |
| children | ReactNode | - | Quoted content. |

The component forwards the native attributes supported by its underlying semantic element.

## Example

```tsx
import { Blockquote } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoBlockquote() {
    return <Blockquote cite="Design principle">Make structure obvious.</Blockquote>;
}
```


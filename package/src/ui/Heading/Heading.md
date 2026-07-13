# Heading

## Purpose

Semantic headings from h1 through h6 with a consistent visual scale.

## Import

```tsx
import { Heading } from "@kiyotakkkka/zvs-uikit-lib";
```

This component is also available from `@kiyotakkkka/zvs-uikit-lib/server`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| level | HeadingLevel | 2 | Semantic heading level and matching visual size. |
| className | string | - | Additional heading classes. |
| children | ReactNode | - | Heading content. |

The component forwards the native attributes supported by its underlying semantic element.

## Example

```tsx
import { Heading } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoHeading() {
    return <Heading level={2}>Section title</Heading>;
}
```


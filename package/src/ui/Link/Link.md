# Link

## Purpose

Styled native anchor with hover and focus affordances.

## Import

```tsx
import { Link } from "@kiyotakkkka/zvs-uikit-lib";
```

This component is also available from `@kiyotakkkka/zvs-uikit-lib/server`.

## Props

| Prop      | Type      | Default | Description                |
| --------- | --------- | ------- | -------------------------- |
| href      | string    | -       | Link destination.          |
| className | string    | -       | Additional anchor classes. |
| children  | ReactNode | -       | Link content.              |

The component forwards the native attributes supported by its underlying semantic element.

## Example

```tsx
import { Link } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoLink() {
    return <Link href="/components">Browse components</Link>;
}
```

# Code

## Purpose

Inline or block code treatment for technical content.

## Import

```tsx
import { Code } from "@kiyotakkkka/zvs-uikit-lib";
```

This component is also available from `@kiyotakkkka/zvs-uikit-lib/server`.

## Props

| Prop      | Type      | Default | Description                                                 |
| --------- | --------- | ------- | ----------------------------------------------------------- |
| block     | boolean   | false   | Renders a scrollable pre/code block instead of inline code. |
| className | string    | -       | Additional code or pre classes.                             |
| children  | ReactNode | -       | Code content.                                               |

The component forwards the native attributes supported by its underlying semantic element.

## Example

```tsx
import { Code } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoCode() {
    return <Code block>{`npm install @kiyotakkkka/zvs-uikit-lib`}</Code>;
}
```

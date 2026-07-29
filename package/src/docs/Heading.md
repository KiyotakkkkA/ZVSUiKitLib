# Heading

## Table of contents

- [Import](#import)
- [API](#api)
    - [HeadingLevel](#headinglevel)
    - [Heading](#heading)
- [Example](#example)

## Import

```tsx
import { Heading } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### HeadingLevel

```ts
type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
```

### Heading

| Property    | Type           | Default | Required | Description                                                      |
| ----------- | -------------- | ------- | -------- | ---------------------------------------------------------------- |
| `level`     | `HeadingLevel` | `2`     | No       | Selects the semantic heading element from \`h1\` through \`h6\`. |
| `children`  | `ReactNode`    | -       | Yes      | Renders the heading content.                                     |
| `className` | `string`       | -       | No       | Applies CSS classes to the heading element.                      |

## Example

```tsx
import { Heading } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoHeading() {
    return <Heading level={2}>Section title</Heading>;
}
```

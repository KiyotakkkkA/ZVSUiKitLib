# Text

## Table of contents

- [Import](#import)
- [API](#api)
    - [TextTone](#texttone)
    - [TextSize](#textsize)
    - [Text](#text)
- [Example](#example)

## Import

```tsx
import { Text } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### TextTone

```ts
type TextTone = "default" | "muted" | "subtle";
```

### TextSize

```ts
type TextSize = "sm" | "md" | "lg";
```

### Text

Extends: `HTMLAttributes<HTMLParagraphElement>`.

| Property | Type                        | Default     | Required | Description                                            |
| -------- | --------------------------- | ----------- | -------- | ------------------------------------------------------ |
| `ref`    | `Ref<HTMLParagraphElement>` | -           | No       | Receives the underlying \`HTMLParagraphElement\` node. |
| `tone`   | `TextTone`                  | `"default"` | No       | Selects the text contrast and color treatment.         |
| `size`   | `TextSize`                  | `"md"`      | No       | Selects the text font size and line height.            |

## Example

```tsx
import { Text } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoText() {
    return (
        <Text size="lg" tone="muted">
            Supporting copy
        </Text>
    );
}
```

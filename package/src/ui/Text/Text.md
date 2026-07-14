# Text

## Purpose

Body and supporting text with deliberate size and contrast.

## Import

```tsx
import { Text } from "@kiyotakkkka/zvs-uikit-lib";
```

This component is also available from `@kiyotakkkka/zvs-uikit-lib/server`.

## Props

| Prop      | Type      | Default   | Description                   |
| --------- | --------- | --------- | ----------------------------- |
| tone      | TextTone  | "default" | Text color emphasis.          |
| size      | TextSize  | "md"      | Font size and line height.    |
| className | string    | -         | Additional paragraph classes. |
| children  | ReactNode | -         | Text content.                 |

The component forwards the native attributes supported by its underlying semantic element.

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

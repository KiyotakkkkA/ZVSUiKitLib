# Card

## Purpose

Container with optional header/body/footer sections.

## Props

Extends `HTMLAttributes<HTMLDivElement>`.

| Prop            | Type      | Default | Description     |
| --------------- | --------- | ------- | --------------- |
| title           | ReactNode | -       | Card title.     |
| subtitle        | ReactNode | -       | Card subtitle.  |
| footer          | ReactNode | -       | Footer content. |
| headerClassName | string    | -       | Header classes. |
| bodyClassName   | string    | -       | Body classes.   |
| footerClassName | string    | -       | Footer classes. |
| className       | string    | -       | Root classes.   |

## Example

```tsx
import { Card, Button } from "@kiyotakkkka/zvs-uikit-lib/ui";

export function DemoCard() {
    return (
        <Card
            title="Profile"
            subtitle="Basic information"
            footer={<Button>Save</Button>}
        >
            Card body content
        </Card>
    );
}
```

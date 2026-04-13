# Card

## Purpose

Container with optional header/body/footer sections.

## Props

Extends `HTMLAttributes<HTMLDivElement>`.

| Prop       | Type      | Default | Description                                   |
| ---------- | --------- | ------- | --------------------------------------------- |
| title      | ReactNode | -       | Card title.                                   |
| subtitle   | ReactNode | -       | Card subtitle.                                |
| footer     | ReactNode | -       | Footer content.                               |
| className  | string    | -       | Root classes.                                 |
| classNames | object    | -       | Classes for internal slots (see table below). |

### classNames slots

| Slot     | Description             |
| -------- | ----------------------- |
| header   | Header wrapper classes. |
| body     | Body wrapper classes.   |
| footer   | Footer wrapper classes. |
| title    | Title classes.          |
| subtitle | Subtitle classes.       |

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

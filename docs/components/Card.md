# Card

## Purpose

Composable container with optional header, content, and footer sections.

## Import

```tsx
import { Card } from "@kiyotakkkka/zvs-uikit-lib/ui";
```

## Props

| Prop      | Type   | Default | Description   |
| --------- | ------ | ------- | ------------- |
| className | string | -       | Root classes. |

## Compound parts

| Component       | Extends                                | Description                |
| --------------- | -------------------------------------- | -------------------------- |
| `Card`          | `HTMLAttributes<HTMLElement>`          | Root card container.       |
| `Card.Header`   | `HTMLAttributes<HTMLElement>`          | Header section.            |
| `Card.Title`    | `HTMLAttributes<HTMLHeadingElement>`   | Heading inside the header. |
| `Card.Subtitle` | `HTMLAttributes<HTMLParagraphElement>` | Secondary header text.     |
| `Card.Content`  | `HTMLAttributes<HTMLDivElement>`       | Main content section.      |
| `Card.Footer`   | `HTMLAttributes<HTMLElement>`          | Footer section.            |

### `Card.Header` props

| Prop      | Type      | Default | Description             |
| --------- | --------- | ------- | ----------------------- |
| className | string    | -       | Header wrapper classes. |
| children  | ReactNode | -       | Header content.         |

### `Card.Title` props

| Prop      | Type      | Default | Description    |
| --------- | --------- | ------- | -------------- |
| className | string    | -       | Title classes. |
| children  | ReactNode | -       | Title content. |

### `Card.Subtitle` props

| Prop      | Type      | Default | Description                  |
| --------- | --------- | ------- | ---------------------------- |
| className | string    | -       | Subtitle classes.            |
| children  | ReactNode | -       | Subtitle content (optional). |

### `Card.Content` props

| Prop      | Type      | Default | Description               |
| --------- | --------- | ------- | ------------------------- |
| className | string    | -       | Content wrapper classes.  |
| children  | ReactNode | -       | Main content of the card. |

### `Card.Footer` props

| Prop      | Type      | Default | Description             |
| --------- | --------- | ------- | ----------------------- |
| className | string    | -       | Footer wrapper classes. |
| children  | ReactNode | -       | Footer content.         |

## Example

```tsx
import { Card, Button } from "@kiyotakkkka/zvs-uikit-lib/ui";

export function DemoCard() {
    return (
        <Card className="max-w-sm">
            <Card.Header>
                <Card.Title>Profile</Card.Title>
                <Card.Subtitle>Basic information</Card.Subtitle>
            </Card.Header>

            <Card.Content>Card body content</Card.Content>

            <Card.Footer className="flex justify-end">
                <Button>Save</Button>
            </Card.Footer>
        </Card>
    );
}
```

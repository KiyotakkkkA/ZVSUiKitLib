# Card

## Purpose

Composable container with optional header, content, and footer sections.

## API

`Card` is a compound component. Use the root component as the outer container and compose the internal slots only when you need them.

| Component       | Extends                           | Description                    |
| --------------- | --------------------------------- | ------------------------------ |
| `Card`          | `HTMLAttributes<HTMLElement>`     | Root card container.           |
| `Card.Header`   | `HTMLAttributes<HTMLElement>`     | Header section.                |
| `Card.Title`    | `HTMLAttributes<HTMLHeadingElement>` | Heading inside the header.     |
| `Card.Subtitle` | `HTMLAttributes<HTMLParagraphElement>` | Secondary header text.      |
| `Card.Content`  | `HTMLAttributes<HTMLDivElement>`  | Main content section.          |
| `Card.Footer`   | `HTMLAttributes<HTMLElement>`     | Footer section.                |

All parts accept `children`, `className`, and the native HTML attributes for their rendered element.

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

            <Card.Content>
                Card body content
            </Card.Content>

            <Card.Footer className="flex justify-end">
                <Button>Save</Button>
            </Card.Footer>
        </Card>
    );
}
```

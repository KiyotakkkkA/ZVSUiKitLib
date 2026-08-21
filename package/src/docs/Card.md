# Card

## Table of contents

- [Import](#import)
- [API](#api)
    - [Card](#card)
    - [Card.Header](#cardheader)
    - [Card.Title](#cardtitle)
    - [Card.Subtitle](#cardsubtitle)
    - [Card.Content](#cardcontent)
    - [Card.Footer](#cardfooter)
- [Example](#example)

## Import

```tsx
import { Card } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### Card

Extends: `HTMLAttributes<HTMLElement>`.

| Property  | Type                                           | Default        | Required | Description                               |
| --------- | ---------------------------------------------- | -------------- | -------- | ----------------------------------------- |
| `ref`     | `Ref<HTMLElement>`                             | -              | No       | Receives the card \`<section>\` element.  |
| `rounded` | [RoundVariants](./dict.md#roundvariants) \| "" | `"rounded-lg"` | No       | Selects the card container border radius. |

### Card.Header

```ts
type CardHeaderProps = HTMLAttributes<HTMLElement>;
```

### Card.Title

```ts
type CardTitleProps = HTMLAttributes<HTMLHeadingElement>;
```

### Card.Subtitle

```ts
type CardSubtitleProps = HTMLAttributes<HTMLParagraphElement>;
```

### Card.Content

```ts
type CardContentProps = HTMLAttributes<HTMLDivElement>;
```

### Card.Footer

```ts
type CardFooterProps = HTMLAttributes<HTMLElement>;
```

## Example

```tsx
"use client";
import { Card, Button } from "@kiyotakkkka/zvs-uikit-lib";

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

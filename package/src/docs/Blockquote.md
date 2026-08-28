# Blockquote

## Table of contents

- [Import](#import)
- [API](#api)
    - [Blockquote](#blockquote)
- [Example](#example)

## Import

```tsx
import { Blockquote } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### Blockquote

Extends: `HTMLAttributes<HTMLQuoteElement>`.

| Property | Type                    | Default | Required | Description                                                 |
| -------- | ----------------------- | ------- | -------- | ----------------------------------------------------------- |
| `ref`    | `Ref<HTMLQuoteElement>` | -       | No       | Receives the underlying \`HTMLQuoteElement\` node.          |
| `cite`   | `ReactNode`             | -       | No       | Renders the quotation attribution below the quoted content. |

```tsx
import { Blockquote } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoBlockquote() {
    return (
        <Blockquote cite="Design principle">Make structure obvious.</Blockquote>
    );
}
```

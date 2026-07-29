# Code

## Table of contents

- [Import](#import)
- [API](#api)
    - [Code](#code)
- [Example](#example)

## Import

```tsx
import { Code } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### Code

Extends: `HTMLAttributes<HTMLElement>`.

| Property | Type      | Default | Required | Description                              |
| -------- | --------- | ------- | -------- | ---------------------------------------- |
| `block`  | `boolean` | `false` | No       | Whether the code is rendered as a block. |

## Example

```tsx
import { Code } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoCode() {
    return <Code block>{`npm install @kiyotakkkka/zvs-uikit-lib`}</Code>;
}
```

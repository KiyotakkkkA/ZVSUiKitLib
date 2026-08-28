# Link

## Table of contents

- [Import](#import)
- [API](#api)
    - [Link](#link)
- [Example](#example)

## Import

```tsx
import { Link } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### Link

```ts
type LinkProps = ComponentPropsWithRef<"a">;
```

```tsx
import { Link } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoLink() {
    return <Link href="/components">Browse components</Link>;
}
```

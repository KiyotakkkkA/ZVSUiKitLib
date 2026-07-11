# @kiyotakkkka/zvs-uikit-lib

React UI kit with TypeScript components, hooks, and providers.

## Installation

```bash
npm install @kiyotakkkka/zvs-uikit-lib
```

Import client components and the generated stylesheet:

```tsx
import { Calendar } from "@kiyotakkkka/zvs-uikit-lib";
import "@kiyotakkkka/zvs-uikit-lib/styles.css";
```

The root entry is a React client boundary and exports all components, hooks,
and providers. React and React DOM are peer dependencies and must be provided
by the consuming application.

Server Components can import the server-safe component subset separately:

```tsx
import { Badge, Button, Card } from "@kiyotakkkka/zvs-uikit-lib/server";
```

Available entry points:

- `@kiyotakkkka/zvs-uikit-lib`
- `@kiyotakkkka/zvs-uikit-lib/server`
- `@kiyotakkkka/zvs-uikit-lib/styles.css`

## License

MIT

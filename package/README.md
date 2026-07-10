# @kiyotakkkka/zvs-uikit-lib

React UI kit with TypeScript, Tailwind CSS components, hooks, and providers.

## Installation

```bash
npm install @kiyotakkkka/zvs-uikit-lib
```

Import components and the generated stylesheet:

```tsx
import { Button } from "@kiyotakkkka/zvs-uikit-lib/ui";
import "@kiyotakkkka/zvs-uikit-lib/styles.css";
```

React and React DOM are peer dependencies and must be provided by the consuming
application.

## Tailwind CSS 4

Tailwind does not scan dependencies by default. Add the library output as a
source in the CSS file that imports Tailwind:

```css
@import "tailwindcss";
@source "../node_modules/@kiyotakkkka/zvs-uikit-lib/dist/**/*.{js,cjs,mjs,ts,tsx,jsx}";
```

Available entry points:

- `@kiyotakkkka/zvs-uikit-lib`
- `@kiyotakkkka/zvs-uikit-lib/ui`
- `@kiyotakkkka/zvs-uikit-lib/hooks`
- `@kiyotakkkka/zvs-uikit-lib/providers`
- `@kiyotakkkka/zvs-uikit-lib/styles.css`

## License

MIT

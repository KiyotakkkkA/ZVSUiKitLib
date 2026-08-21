# @kiyotakkkka/zvs-uikit-lib

React UI kit with TypeScript components, hooks, and providers.

Component styles and the CSS reset are precompiled and loaded automatically by
the main entry. Tailwind CSS and PostCSS are not required in consumer projects.

## Installation

```bash
npm install @kiyotakkkka/zvs-uikit-lib
```

Available entry points:

- `@kiyotakkkka/zvs-uikit-lib` — every component except the two below
- `@kiyotakkkka/zvs-uikit-lib/chart` — `Chart` (pulls in `recharts`)
- `@kiyotakkkka/zvs-uikit-lib/code-view` — `CodeView` (pulls in `shiki`)
- `@kiyotakkkka/zvs-uikit-lib/server` — components safe to render on the server
- `@kiyotakkkka/zvs-uikit-lib/styles.css` (optional explicit CSS entry)

`Chart` and `CodeView` live behind their own entry points so that projects
that do not use them never pay for `recharts` or `shiki`.

## Overriding styles

The stylesheet ships inside a cascade layer named `zvs-uikit`, so a plain
`className` overrides a component without `!important`. On Tailwind v4 the
layer has to sit after `base` and before `utilities` — declare the order at the
top of the CSS entry that imports Tailwind:

```css
@layer theme, base, zvs-uikit, components, utilities;
@import "tailwindcss";
```

This line is required. Ordered before `base`, the library loses to Tailwind's
Preflight and the components render without their backgrounds, borders and
padding; ordered after `utilities`, it outranks your own classes again.

## License

MIT

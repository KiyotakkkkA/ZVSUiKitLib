# @kiyotakkkka/zvs-uikit-lib

React UI kit with TypeScript components, hooks, and providers.

Components are styled with Tailwind utilities, so Tailwind v4 is required in
the consuming project. See Styles below for the three lines of setup.

## Installation

```bash
npm install @kiyotakkkka/zvs-uikit-lib
```

Available entry points:

- `@kiyotakkkka/zvs-uikit-lib` — every component except the two below
- `@kiyotakkkka/zvs-uikit-lib/chart` — `Chart` (pulls in `recharts`)
- `@kiyotakkkka/zvs-uikit-lib/code-view` — `CodeView` (pulls in `shiki`)
- `@kiyotakkkka/zvs-uikit-lib/server` — components safe to render on the server
- `@kiyotakkkka/zvs-uikit-lib/styles.css` — design tokens and the few rules utilities cannot express

`Chart` and `CodeView` live behind their own entry points so that projects
that do not use them never pay for `recharts` or `shiki`.

## Styles

Components carry Tailwind utility classes and `cn()` merges them with
`tailwind-merge`, so `className` overrides a component without `!important`.

Tailwind v4 is required. In your CSS entry:

```css
@import "tailwindcss";
@import "@kiyotakkkka/zvs-uikit-lib/styles.css";
@source "../node_modules/@kiyotakkkka/zvs-uikit-lib/dist";
```

`styles.css` holds the design tokens and the few rules utilities cannot
express. `@source` lets Tailwind compile the classes the components use —
without it the components render unstyled.

## License

MIT

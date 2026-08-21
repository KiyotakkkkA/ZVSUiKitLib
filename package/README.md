# @kiyotakkkka/zvs-uikit-lib

React UI kit with TypeScript components, hooks, and providers.

Component styles and the CSS reset are precompiled. Tailwind CSS and PostCSS
are not required in consumer projects. Import the stylesheet once in your app's
entry — see Styles below.

## Installation

```bash
npm install @kiyotakkkka/zvs-uikit-lib
```

Available entry points:

- `@kiyotakkkka/zvs-uikit-lib` — every component except the two below
- `@kiyotakkkka/zvs-uikit-lib/chart` — `Chart` (pulls in `recharts`)
- `@kiyotakkkka/zvs-uikit-lib/code-view` — `CodeView` (pulls in `shiki`)
- `@kiyotakkkka/zvs-uikit-lib/server` — components safe to render on the server
- `@kiyotakkkka/zvs-uikit-lib/styles.css` — the stylesheet, imported by you
- `@kiyotakkkka/zvs-uikit-lib/styles-layered.css` — the same CSS in a cascade layer

`Chart` and `CodeView` live behind their own entry points so that projects
that do not use them never pay for `recharts` or `shiki`.

## Styles

The entry points do not import CSS. Import one stylesheet in your app's entry:

```tsx
import "@kiyotakkkka/zvs-uikit-lib/styles.css";
```

- `styles.css` — unlayered. Nothing in your CSS can strip a component;
  overriding one from Tailwind needs `!important`. Use this unless you want the
  other behaviour.
- `styles-layered.css` — wrapped in `@layer zvs-uikit`. A plain `className`
  overrides a component, but you must declare
  `@layer theme, base, zvs-uikit, components, utilities;` above
  `@import "tailwindcss"` and keep your own global CSS inside a layer,
  otherwise unlayered rules — Tailwind's Preflight included — strip the
  components.

See the repository README for the full comparison.

## License

MIT

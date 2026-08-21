# Changelog

All notable changes to `@kiyotakkkka/zvs-uikit-lib` are documented here. The
format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the
project uses [semantic versioning](https://semver.org/).

## [7.0.0] — unreleased

This release closes the findings of a full audit of the library: a component
that rendered unstyled in production, roles announced without the behaviour
they imply, a bundle that pulled megabytes nobody asked for, an untested code
base and an inconsistent public surface.

### Breaking

- **`Chart` and `CodeView` moved to their own entry points.** Import them from
  `@kiyotakkkka/zvs-uikit-lib/chart` and
  `@kiyotakkkka/zvs-uikit-lib/code-view`. They are no longer re-exported from
  the package root, so a project that does not use them no longer loads
  `recharts` or `shiki`.
- **`Icon`'s `icon` prop is typed as `IconName`.** A name that is not bundled
  is now a compile error instead of a silently empty SVG. `IconName` is
  exported for use in your own prop types.
- **`Switcher` renders as a `radiogroup`.** It announced itself as a `tablist`
  while controlling no panels. Its options are now `role="radio"` with roving
  tabindex and arrow-key selection.
- **`Button` and `ScrollArea` no longer use `forwardRef`.** `ref` is a plain
  prop, as everywhere else. Passing a ref is unchanged for callers.
- **`SortState` moved** from `Table/types` to `lib/sorting`. It is still
  re-exported from the package root.

### Added

- **`ref` on every component that renders a DOM root.** 49 of 56 components
  previously gave no access to their node, which broke `react-hook-form`'s
  `register()`, programmatic focus and anything measuring or anchoring to a
  component. Each ref points at the node a caller actually wants: the native
  input for `InputCheckBox`, `InputRadio` and `InputCheckSlided`, the select
  for `SelectNative`, the `<table>` for `Table`, the dialog panel for `Modal`
  and `SlidedPanel`. `ContextMenu` and `Select` render no root element of their
  own and therefore take no ref.
- **`Field`**, a wrapper that gives any control a label, a description and an
  error message, and hands the control the ids and ARIA attributes tying them
  together.
- **`LocaleProvider`, `useLocale`, `defaultDictionary` and `enDictionary`.**
  Every string the components render now comes from one dictionary. Without a
  provider the library falls back to the strings it always shipped with, so
  existing apps are unaffected. Components exported from `/server` cannot read
  the provider — React context needs a client component — so they take the
  string as a prop defaulting to `defaultDictionary`.
- **`SizeVariants`**, a shared `"sm" | "md" | "lg"` scale. `Button` and `Badge`
  accept `size`; omitting it keeps their current appearance exactly.
  `InputColorSize` is now an alias of it.
- **`Modal`**: `closeOnEscape` and `label`. **`SlidedPanel`**: `closeOnEscape`
  and `label`. **`Tabs`**: `orientation`, `label`, and `tabId`/`panelId` per
  option. **`Select.Menu`** and **`Switcher`**: `label`. **`Table`**:
  `caption`, `captionVisible` and `emptyMessage`; sort modes may declare a
  `direction` reported through `aria-sort`.
- **Tests.** Vitest, plus 44 tests over the colour conversions, popup
  placement, the table sort cycle, palette validation and dictionary merging.
- **CI on pull requests**, running typecheck, lint, tests, build and a
  `npm pack --dry-run` content check. The publish workflow runs the same gates
  before publishing.

### Fixed

- **`ToastProvider` rendered completely unstyled** in any project without
  Tailwind. It was the one component styled with bare utility classes
  (`bg-main-900`, `text-main-100`, `border-accent-dark/70`), none of which are
  emitted into `dist/zvs-uikit-lib.css`. It now uses CSS Modules like every
  other component, and honours `prefers-reduced-motion`.
- **`Modal` and `SlidedPanel` did not manage focus.** Both now trap Tab inside
  the dialog, move focus in on open and back to the trigger on close, lock body
  scroll (reference counted, so nested dialogs behave) and handle Escape.
  `role="dialog"` and `aria-modal` moved from the overlay onto the panel, which
  is labelled by its header. A closed `SlidedPanel` is `inert`, so its contents
  no longer take focus while off screen.
- **`Select` was not a listbox.** The menu now uses `role="listbox"`, options
  use `role="option"` with `aria-selected`, the trigger has
  `aria-haspopup="listbox"`, opening focuses the selected option or the search
  field, and arrows, Home, End and typeahead all work.
- **`Tabs` announced a tablist without the pattern.** It now has roving
  tabindex and arrow, Home and End navigation.
- **`Accordion`'s trigger had no `aria-expanded`**, and its collapsed panel was
  only clipped to zero height, so screen readers still read it and Tab still
  reached it. The panel is now `inert` and the trigger carries `aria-expanded`
  and `aria-controls`.
- **`Table` headers** had no `scope="col"` and reported no `aria-sort`.
- **`package/tsconfig.eslint.json` was never committed** although
  `eslint.config.js` requires it, so `npm run lint` failed on a fresh clone.
- **The `/server` entry stopped being usable from a React Server Component.**
  `Loader` is exported from `/server` and had started reading the locale
  dictionary through `useLocale`, which uses `useContext`; importing `/server`
  from a server component then failed with "You're importing a module that
  depends on `createContext` into a React Server Component module". `Loader`
  now takes a `label` prop defaulting to the plain `defaultDictionary`
  constant, and `npm run check:server` walks the import graph of the entry and
  fails on any client-only React API, so this cannot come back unnoticed.

### Changed

- **The stylesheet ships inside a cascade layer, `@layer zvs-uikit`.** It used
  to be unlayered, and unlayered CSS beats layered CSS whatever the source
  order — so the library's rules won against Tailwind's `@layer utilities` and
  every override needed `!important`. Inside its own layer the library loses to
  Tailwind utilities and to plain unlayered app CSS, which is what a consumer
  expects. Tailwind v4 projects should declare the order once:
  `@layer zvs-uikit, theme, base, components, utilities;` above
  `@import "tailwindcss"`. Tailwind v3 and non-Tailwind projects need nothing.
  The `@property` rules Tailwind registers are hoisted out of the layer, since
  registration inside `@layer` is not reliable across browsers.
- **`shiki` no longer compiles all 24 grammars up front.** The highlighter
  starts empty and loads the requested grammar on demand, the way themes were
  already handled. An unavailable grammar still falls back to plaintext.
- **Colour maths, popup geometry and the sort-state machine moved** into
  `lib/color.ts`, `lib/position.ts` and `lib/sorting.ts`, out of the components
  and under test.
- **Developer-facing context errors are in English**, matching the rest of the
  package.

### Known follow-ups

- `dist/zvs-uikit-lib.css` is still one 191 KB file loaded by every entry
  point. Splitting it needs `build.cssCodeSplit` and a build run to verify.
- Component render tests (Testing Library) are not yet part of the suite.
- The generated documentation under `package/src/docs` still describes the
  previous props. Run `npm run docs:fill` to regenerate it.
- `size` is implemented on `Button` and `Badge`; the remaining components can
  adopt the same three steps.

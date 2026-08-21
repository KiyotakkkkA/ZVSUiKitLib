# Changelog

## [7.0.0]

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

- **`ref` on every component that renders a DOM root.**
  Each ref points at the node a caller actually wants: the native
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
  existing apps are unaffected.
- **`SizeVariants`**, a shared `"sm" | "md" | "lg"` scale. `Button` and `Badge`
  accept `size`; omitting it keeps their current appearance exactly.
- **`Modal`**: `closeOnEscape` and `label`. **`SlidedPanel`**: `closeOnEscape`
  and `label`. **`Tabs`**: `orientation`, `label`, and `tabId`/`panelId` per
  option. **`Select.Menu`** and **`Switcher`**: `label`. **`Table`**:
  `caption`, `captionVisible` and `emptyMessage`; sort modes may declare a
  `direction` reported through `aria-sort`.
- **Tests.** Vitest, plus 44 tests over the colour conversions, popup
  placement, the table sort cycle, palette validation and dictionary merging.

### Fixed

- **`ToastProvider` rendered completely unstyled** in any project without
  Tailwind.
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

### Changed

- **`shiki` no longer compiles all 24 grammars up front.** The highlighter
  starts empty and loads the requested grammar on demand.

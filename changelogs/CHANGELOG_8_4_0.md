# Changelog

## [8.4.0]

### Added

- **`InputCheckSlided` color variants:** `primary`, `secondary` (default),
  `tertiary`, `success`, `warning`, `danger`, and `info`;

### Changed

- **Migrated library icons to `@mdi/js`**, replacing hardcoded SVG
  paths with named imports while preserving existing icon names and props.
  `@mdi/js` is a development dependency; only the selected icon paths are
  bundled, with no runtime dependency on the icon package.

### Fixed

- **Nested overlays could drift away from their triggers**, for example a
  `Select` inside a `Dropdown`. `Dropdown`, `Select`, `InputDate`, `Floating`
  and `Tooltip` now track anchor movement caused by ancestor animations and
  layout changes, as well as scrolling and resizing.
- **`Floating` and `Tooltip` could render behind native popovers and dialogs.**
  Both now render in the browser's top layer while preserving their DOM nesting.
  They also hide when their containing popover or dialog closes.
- **`Floating` and `Tooltip` could extend beyond viewport edges.** All five
  anchored components now share placement calculations and viewport clamping
  for every `PositionAnchor` value.
- **`Floating` animated position updates**, causing content to lag behind its
  trigger. Its transition now applies only to opacity.

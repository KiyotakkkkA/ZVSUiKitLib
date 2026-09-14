# Changelog

## [8.1.0]

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

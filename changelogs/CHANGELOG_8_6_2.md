# Changelog

## [8.6.2]

### Performance

- **Positioning of `Tooltip`, `Floating` and `Dropdown` does less work.** Scroll, resize and `ResizeObserver` events no longer call the position update directly; they go through the same geometry check as the frame loop. An open overlay re-renders once per real anchor movement instead of once per scroll event plus once per frame.
- **Closed menus no longer render their content.** `Dropdown.Menu` mounts its children on the first open and keeps them afterwards. A closed `Select` no longer renders all its options, and a `Calendar` (also inside `InputDate` / `InputDatetime`) no longer renders its month and year lists (~140 buttons) until a picker is opened.
- **`onOpenChange` of `Dropdown` fires only when the open state changes.** It used to run after every render when an inline callback was passed — which `Select` and `AutoFillSelector` always do — and once on mount with `false`.
- **`CodeView` keeps visible blocks highlighted.** The highlight cache is now least-recently-used and never evicts a block that is still mounted. Pages with more than 100 code blocks no longer fall back to the skeleton and re-highlight on re-render. Cache keys are the exact `theme`/`language`/`code` instead of a 32-bit hash, so two different snippets can no longer share a highlight. A failed highlighter load is retried on the next block instead of being cached forever.
- **`InputDropZone` stops re-creating previews.** The default `files` / `previewUrls` are stable, so a parent re-render no longer creates new object URLs and reloads the preview images.
- **`Table` resolves class names once per column.** Static row and cell classes are merged once and reused for every row; `tailwind-merge` runs per cell only for function `cellClassName` / `rowDynamic`.
- **`Calendar` memoizes its days grid.** The 42 day cells are only rebuilt when the month, selection, limits or disabled dates change, not on every render.
- **Dragging `InputRange` and `InputColor` skips no-op updates.** `onChange` is no longer called when the pointer moves but the snapped value stays the same.

### Fixed

- **Escape closes only the topmost dialog.** With a `Modal` or `SlidedPanel` opened over another one, Escape (and the Tab focus trap) is now handled by the top dialog only, instead of closing all of them.
- **`Calendar` year list respects `maxDate`.** Years after the current one are listed when `maxDate` (or the shown month) is in the future; previously the list always stopped at the current year.
- **`Tooltip` opens on keyboard focus** of its trigger, not only on hover.
- **`Table` rows without a `rowKey` value** use their index as the key instead of an empty string shared by all of them.
- **`InputDropZone` drag highlight no longer flickers** while the pointer moves over the zone's own content.

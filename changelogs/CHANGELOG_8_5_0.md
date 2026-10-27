# Changelog

## [8.5.0]

### Added

- **`Floating` can be pinned with a click.** Clicking `Floating.Trigger` keeps the panel open after the pointer leaves; it closes on the next trigger click, an outside click, or `Escape`. Opt out with `fixOnClick={false}`. The root gets `data-fixed` while pinned.

### Changed

- **Removed `useStyle` hook**. The `useStyle` hook has been removed from the library. Choose native CSS themes instead of StyleProvider

### Fixed

- **`Modal` clips its sections to the rounded panel.** Header and footer borders and backgrounds no longer stick out past the panel corners. The panel now has `overflow-hidden`; popovers inside a modal are positioned with `position: fixed` and are not affected.

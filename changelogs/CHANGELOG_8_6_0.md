# Changelog

## [8.6.0]

### Added

- **New `AccordionGroup` component.** Wraps `Accordion` elements and controls how many can be open at once with `showMode`: `"multiple"` (default) lets each accordion toggle independently, `"only-one"` closes the others when one opens. Accordions outside a group behave as before.
- **`Accordion` gets a `preset` prop.** `"solid"` (default) keeps the bordered card with the current paddings; `"ghost"` drops the borders and background and uses compact paddings.

### Changed

- **Base field form-factor is now square-rounded.** The default `rounded` value changed from `"rounded-full"` to `"rounded-lg"` for `Button`, `InputSmall`, `InputColor`, `Select` (including its search field), `SelectNative`, `AutoFillSelector`, `Dropdown` trigger, `Switcher` and `Tooltip`. Pass `rounded="rounded-full"` to keep the previous pill shape.

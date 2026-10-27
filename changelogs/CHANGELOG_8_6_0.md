# Changelog

## [8.6.0]

### Added

- **New `InputTime` component.** A styled time field with a popup of hours and minutes columns. The value is a 24-hour `"HH:mm"` string (or `null`); supports `minuteStep`, `clearable`, `closeOnSelect` (closes after a minute is picked) and the usual `menuPlacement` / `menuWidth` / `classNames`.
- **New `InputDatetime` component.** Same API as `InputDate` (minus `closeOnSelect`) plus `minuteStep`; the popup shows a calendar with a time block and the trigger label includes the time.
- **`Calendar` gets `enableTime` (default `false`) and `minuteStep`.** When enabled, an hours/minutes block is shown to the right of the days grid: picking a day keeps the selected time, picking a time keeps the selected day (today when none is selected). New `classNames.time` slot.
- **New locale strings:** `calendar.time`, `calendar.hours`, `calendar.minutes`, `inputTime.placeholder` / `clear`, `inputDatetime.placeholder` / `clear`. Custom dictionaries passed to the locale provider need these keys.
- **New `AccordionGroup` component.** Wraps `Accordion` elements and controls how many can be open at once with `showMode`: `"multiple"` (default) lets each accordion toggle independently, `"only-one"` closes the others when one opens. Accordions outside a group behave as before.
- **`Accordion` gets a `preset` prop.** `"solid"` (default) keeps the bordered card with the current paddings; `"ghost"` drops the borders and background and uses compact paddings.

### Changed

- **Base field form-factor is now square-rounded.** The default `rounded` value changed from `"rounded-full"` to `"rounded-lg"` for `Button`, `InputSmall`, `InputColor`, `Select` (including its search field), `SelectNative`, `AutoFillSelector`, `Dropdown` trigger, `Switcher` and `Tooltip`. Pass `rounded="rounded-full"` to keep the previous pill shape.
- **Menus and options follow the new form-factor.** `Dropdown.Menu`, `Select.Menu` and `AutoFillSelector.Menu` default to `"rounded-xl"` (was `"rounded-4xl"` / `"rounded-3xl"`); `Dropdown.Item`, `Select.Option` and `AutoFillSelector.Options` default to `"rounded-md"` (was `"rounded-3xl"` / `"rounded-lg"`); `AutoFillSelector.Trigger` defaults to `"rounded-lg"` (was `"rounded-2xl"`). `Calendar` (and the `InputDate` popover that renders it) uses a `rounded-xl` panel with `rounded-md` day cells and navigation buttons.

## Install

```bash
npm i @kiyotakkkka/zvs-uikit-lib
```

## Updates

- See 8.0.0 version update notes in [8.0.0 CHANGELOG](changelogs/CHANGELOG_8_0_0.md).
- See 8.4.0 version update notes in [8.4.0 CHANGELOG](changelogs/CHANGELOG_8_4_0.md).
- See 8.5.0 version update notes in [8.5.0 CHANGELOG](changelogs/CHANGELOG_8_5_0.md).
- See 8.6.0 version update notes in [8.6.0 CHANGELOG](changelogs/CHANGELOG_8_6_0.md).

### Configure Tailwind scanning

<details><summary><b>Tailwind 4 setup</b></summary>

Tailwind 4 does not scan `node_modules` by default. Add this line to the CSS file where you import Tailwind (`@import "tailwindcss"`):

```css
@import "tailwindcss";
@import "@kiyotakkkka/zvs-uikit-lib/styles.css";
@source "...node_modules/@kiyotakkkka/zvs-uikit-lib/dist";
```

</details>

<details><summary><b>Tailwind 3 setup</b></summary>

Add the package path to `content` in `tailwind.config.js`:

```js
module.exports = {
    content: [
        "...node_modules/@kiyotakkkka/zvs-uikit-lib/dist/**/*.{js,cjs,mjs,ts,tsx,jsx}",
        // other paths...
    ],
    // other config...
};
```

</details>

## Entry points

| Entry point                             | Contents                                              |
| --------------------------------------- | ----------------------------------------------------- |
| `@kiyotakkkka/zvs-uikit-lib`            | Every component except `Chart` and `CodeView`.        |
| `@kiyotakkkka/zvs-uikit-lib/chart`      | `Chart`. Pulls in `recharts`.                         |
| `@kiyotakkkka/zvs-uikit-lib/code-view`  | `CodeView`. Pulls in `shiki`.                         |
| `@kiyotakkkka/zvs-uikit-lib/server`     | Components safe to render on the server.              |
| `@kiyotakkkka/zvs-uikit-lib/styles.css` | Design tokens and the rules utilities cannot express. |

`Chart` and `CodeView` are the only components with heavy third-party
dependencies. They sit behind their own entry points so a project that does not
use them never loads `recharts` or `shiki`:

```tsx
import { Button } from "@kiyotakkkka/zvs-uikit-lib";
import { Chart } from "@kiyotakkkka/zvs-uikit-lib/chart";
import { CodeView } from "@kiyotakkkka/zvs-uikit-lib/code-view";
```

## Themes

```css
:root {
    --color-main-50: #fafafa;
    --color-main-100: #f5f5f5;
    --color-main-200: #e5e5e5;
    --color-main-300: #d4d4d4;
    --color-main-400: #a3a3a3;
    --color-main-500: #737373;
    --color-main-600: #525252;
    --color-main-700: #404040;
    --color-main-800: #1c1c1c;
    --color-main-900: #0e0e0e;

    --color-accent-light: #d8ff8d;
    --color-accent-medium: #b7f34a;
    --color-accent-dark: #8fc52b;

    --color-danger-light: #fca5a5;
    --color-danger-medium: #ef4444;
    --color-danger-dark: #b91c1c;

    --color-warning-light: #fde68a;
    --color-warning-medium: #f59e0b;
    --color-warning-dark: #b45309;

    --color-success-light: #86efac;
    --color-success-medium: #22c55e;
    --color-success-dark: #15803d;

    --color-info-light: #93c5fd;
    --color-info-medium: #3b82f6;
    --color-info-dark: #1e40af;
}
```

### Runtime theme with CSS variables

Themes are controlled natively by CSS. Define each palette as a selector and
switch themes by changing an attribute on the root element:

```css
:root,
:root[data-theme="default"] {
    --color-main-50: #fafafa;
    --color-main-500: #737373;
    --color-accent-medium: #b7f34a;
}

:root[data-theme="rose"] {
    --color-main-50: #fff7ed;
    --color-main-500: #f97316;
    --color-accent-medium: #f43f5e;
}
```

The same CSS selectors work during SSR, so the initial theme is available
without a provider or a client-side theme API.

---

## Localisation

Every string the components render — placeholders, empty states, aria-labels —
comes from one dictionary. Without a provider the library falls back to
`defaultDictionary`, which holds the Russian strings the components have always
shipped with, so nothing changes for an app that ignores this.

To translate, wrap the tree in `LocaleProvider`. `enDictionary` ships with the
package:

```tsx
"use client";

import { LocaleProvider, enDictionary } from "@kiyotakkkka/zvs-uikit-lib";

export function AppLocale({ children }: { children: React.ReactNode }) {
    return <LocaleProvider base={enDictionary}>{children}</LocaleProvider>;
}
```

Overrides are merged group by group, so a single string can be replaced without
restating the rest:

```tsx
<LocaleProvider
    base={enDictionary}
    dictionary={{ select: { emptyMessage: "No matching options" } }}
>
    {children}
</LocaleProvider>
```

`useLocale()` returns the resolved dictionary and works without a provider.
Props such as `placeholder` still win over the dictionary wherever a component
accepts them.

Components imported from `@kiyotakkkka/zvs-uikit-lib/server` are the exception:
React context is a client-only API, so they cannot read `LocaleProvider`. They
take their strings as props instead, defaulting to `defaultDictionary` — for
example `<Loader label="Loading" />`. `npm run check:server` guards this by
walking the import graph of that entry point.

## Component Catalog & API

<a id="readme-nav"></a>

### Navigation

- [Themes](#themes)
- [Components](#components)
- [Hooks](#hooks)
- [Providers](#providers)

<a id="components"></a>

### Components (@kiyotakkkka/zvs-uikit-lib)

### Components: Input & Form Controls

| Component            | Purpose                                                                  | Documentation                                                | SSR |
| -------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------ | --- |
| `AutoFillSelector`   | Multi-select with search/autocomplete.                                   | [AutoFillSelector](package/src/docs/AutoFillSelector.md)     | No  |
| `Button`             | Base button with variants and shape options.                             | [Button](package/src/docs/Button.md)                         | Yes |
| `Calendar`           | Date calendar with constraints and custom day rendering.                 | [Calendar](package/src/docs/Calendar.md)                     | No  |
| `InputBig`           | Multiline text input.                                                    | [InputBig](package/src/docs/InputBig.md)                     | No  |
| `Field`              | Label, description and error wrapper for any control.                    | [Field](package/src/docs/Field.md)                           | No  |
| `InputCheckBox`      | `true/false` checkbox control.                                           | [InputCheckBox](package/src/docs/InputCheckBox.md)           | No  |
| `InputCheckBoxGroup` | Connects checkbox controls to a shared boolean model.                    | [InputCheckBoxGroup](package/src/docs/InputCheckBoxGroup.md) | No  |
| `InputCheckSlided`   | `true/false` switch control.                                             | [InputCheckSlided](package/src/docs/InputCheckSlided.md)     | No  |
| `InputColor`         | Custom color picker with optional preset palette.                        | [InputColor](package/src/docs/InputColor.md)                 | No  |
| `InputDate`          | Date input with calendar popup.                                          | [InputDate](package/src/docs/InputDate.md)                   | No  |
| `InputDatetime`      | Date and time input with calendar popup.                                 | [InputDatetime](package/src/docs/InputDatetime.md)           | No  |
| `InputDropZone`      | File drop zone with previews and single/multiple modes.                  | [InputDropZone](package/src/docs/InputDropZone.md)           | No  |
| `InputPins`          | Segmented input for PIN, OTP, or short confirmation codes.               | [InputPins](package/src/docs/InputPins.md)                   | No  |
| `InputRadio`         | Radio control for selecting one option from a group.                     | [InputRadio](package/src/docs/InputRadio.md)                 | No  |
| `InputRadioGroup`    | Connects radio controls to an exclusive boolean model.                   | [InputRadioGroup](package/src/docs/InputRadioGroup.md)       | No  |
| `InputRange`         | Controlled range input for selecting a pair of numeric boundaries.       | [InputRange](package/src/docs/InputRange.md)                 | No  |
| `InputSlider`        | Numeric range slider with optional value label.                          | [InputSlider](package/src/docs/InputSlider.md)               | No  |
| `InputSmall`         | Single-line input with password visibility toggle for `type="password"`. | [InputSmall](package/src/docs/InputSmall.md)                 | No  |
| `InputTime`          | Time input with hour and minute selection.                               | [InputTime](package/src/docs/InputTime.md)                   | No  |
| `Select`             | Single-value select control with options and optional search.            | [Select](package/src/docs/Select.md)                         | No  |
| `SelectNative`       | Styled native select control.                                            | [SelectNative](package/src/docs/SelectNative.md)             | Yes |
| `Switcher`           | Segmented switch between options.                                        | [Switcher](package/src/docs/Switcher.md)                     | No  |
| `Tabs`               | Line-style tabs for switching between related views.                     | [Tabs](package/src/docs/Tabs.md)                             | No  |

### Components: Overlays

| Component     | Purpose                                            | Documentation                                  | SSR |
| ------------- | -------------------------------------------------- | ---------------------------------------------- | --- |
| `ContextMenu` | Right-click menu with items and submenus.          | [ContextMenu](package/src/docs/ContextMenu.md) | No  |
| `Dropdown`    | Generic dropdown popup container.                  | [Dropdown](package/src/docs/Dropdown.md)       | No  |
| `Floating`    | Hover/focus floating panel attached to an element. | [Floating](package/src/docs/Floating.md)       | No  |
| `Modal`       | Modal dialog window.                               | [Modal](package/src/docs/Modal.md)             | No  |
| `SlidedPanel` | Slide-in edge panel with four placements.          | [SlidedPanel](package/src/docs/SlidedPanel.md) | No  |
| `Tooltip`     | Small hover/focus label attached to an element.    | [Tooltip](package/src/docs/Tooltip.md)         | No  |

### Components: Structure & Composition

| Component        | Purpose                                                                                           | Documentation                                        | SSR |
| ---------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | --- |
| `Accordion`      | Expandable section with animated height.                                                          | [Accordion](package/src/docs/Accordion.md)           | No  |
| `AccordionGroup` | Groups accordions with single or multiple open sections.                                          | [AccordionGroup](package/src/docs/AccordionGroup.md) | No  |
| `Breadcrumbs`    | Navigation trail for current page location.                                                       | [Breadcrumbs](package/src/docs/Breadcrumbs.md)       | No  |
| `Card`           | Container with optional header/body/footer sections.                                              | [Card](package/src/docs/Card.md)                     | Yes |
| `Carousel`       | Image or content carousel with navigation and optional auto-scroll.                               | [Carousel](package/src/docs/Carousel.md)             | No  |
| `Chart`          | Line/bar chart with multiple series and custom styling based on Recharts. Imported from `/chart`. | [Chart](package/src/docs/Chart.md)                   | No  |
| `CodeView`       | Code block with syntax highlighting and copy button. Imported from `/code-view`.                  | [CodeView](package/src/docs/CodeView.md)             | No  |
| `DataDisplay`    | Compact list for displaying labeled data rows.                                                    | [DataDisplay](package/src/docs/DataDisplay.md)       | Yes |
| `Pagination`     | List pagination with range summary and page-size selector.                                        | [Pagination](package/src/docs/Pagination.md)         | No  |
| `PrettyBR`       | Decorative horizontal divider with icon and label.                                                | [PrettyBR](package/src/docs/PrettyBR.md)             | No  |
| `ResizablePanel` | Layout with resizable sidebar and content area.                                                   | [ResizablePanel](package/src/docs/ResizablePanel.md) | No  |
| `ScrollArea`     | Styled scroll container.                                                                          | [ScrollArea](package/src/docs/ScrollArea.md)         | Yes |
| `Separator`      | Horizontal/vertical separator.                                                                    | [Separator](package/src/docs/Separator.md)           | Yes |
| `Table`          | Column-based table with per-column sorting modes.                                                 | [Table](package/src/docs/Table.md)                   | No  |
| `Timeline`       | Compound timeline for ordered events.                                                             | [Timeline](package/src/docs/Timeline.md)             | No  |
| `TreeView`       | Hierarchical list with optional virtualization.                                                   | [TreeView](package/src/docs/TreeView.md)             | No  |

### Components: Status & Feedback

| Component     | Purpose                                           | Documentation                                  | SSR |
| ------------- | ------------------------------------------------- | ---------------------------------------------- | --- |
| `Alert`       | Alert/notification block.                         | [Alert](package/src/docs/Alert.md)             | Yes |
| `Badge`       | Compact status indicator.                         | [Badge](package/src/docs/Badge.md)             | Yes |
| `EmptyState`  | Placeholder for empty or first-run states.        | [EmptyState](package/src/docs/EmptyState.md)   | Yes |
| `Loader`      | Loading spinner.                                  | [Loader](package/src/docs/Loader.md)           | Yes |
| `ProgressBar` | Progress indicator with optional label and value. | [ProgressBar](package/src/docs/ProgressBar.md) | Yes |
| `Skeleton`    | Placeholder block for loading content.            | [Skeleton](package/src/docs/Skeleton.md)       | Yes |

### Components: Typography

| Component    | Purpose                                    | Documentation                                | SSR |
| ------------ | ------------------------------------------ | -------------------------------------------- | --- |
| `Text`       | Body and supporting text.                  | [Text](package/src/docs/Text.md)             | Yes |
| `Heading`    | Semantic heading scale.                    | [Heading](package/src/docs/Heading.md)       | Yes |
| `Blockquote` | Block quotation with optional attribution. | [Blockquote](package/src/docs/Blockquote.md) | Yes |
| `Code`       | Inline and block code treatment.           | [Code](package/src/docs/Code.md)             | Yes |
| `Em`         | Semantic stress emphasis.                  | [Em](package/src/docs/Em.md)                 | Yes |
| `Kbd`        | Keyboard input token.                      | [Kbd](package/src/docs/Kbd.md)               | Yes |
| `Link`       | Styled semantic anchor.                    | [Link](package/src/docs/Link.md)             | Yes |
| `Quote`      | Inline semantic quotation.                 | [Quote](package/src/docs/Quote.md)           | Yes |
| `Strong`     | Semantic importance.                       | [Strong](package/src/docs/Strong.md)         | Yes |

<a id="hooks"></a>

### Hooks (@kiyotakkkka/zvs-uikit-lib)

| Hook        | Purpose                                                      | Documentation                              | Returns                                                                             |
| ----------- | ------------------------------------------------------------ | ------------------------------------------ | ----------------------------------------------------------------------------------- |
| `useToasts` | Access toast context API. Works only inside `ToastProvider`. | [useToasts](package/src/docs/useToasts.md) | `ToastContextValue` with: `push`, `normal`, `info`, `warning`, `success`, `danger`. |
| `useLocale` | Read the active string dictionary. Works without a provider. | —                                          | The resolved `ZvsDictionary`.                                                       |

<a id="providers"></a>

### Providers (@kiyotakkkka/zvs-uikit-lib)

| Provider         | Purpose                           |
| ---------------- | --------------------------------- |
| `ToastProvider`  | Global toast notifications stack. |
| `LocaleProvider` | Strings the components render.    |

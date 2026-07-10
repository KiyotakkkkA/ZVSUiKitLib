# UI Kit Installation

## Step 1 - Install package

```bash
npm i @kiyotakkkka/zvs-uikit-lib
```

## Step 2 - Configure Tailwind scanning

<details><summary><b>Tailwind 4 setup</b></summary>

Tailwind 4 does not scan `node_modules` by default. Add this line to the CSS file where you import Tailwind (`@import "tailwindcss"`):

```css
@source "../node_modules/@kiyotakkkka/zvs-uikit-lib/dist/**/*.{js,cjs,mjs,ts,tsx,jsx}";
```

</details>

<details><summary><b>Tailwind 3 setup</b></summary>

Add the package path to `content` in `tailwind.config.js`:

```js
module.exports = {
    content: [
        "../node_modules/@kiyotakkkka/zvs-uikit-lib/dist/**/*.{js,cjs,mjs,ts,tsx,jsx}",
        // other paths...
    ],
    // other config...
};
```

</details>

## Step 3 - Color palette

For correct component rendering, use this palette (or override the same tokens):

```css
@theme {
    --color-main-50: rgb(250 250 250);
    --color-main-100: rgb(245 245 245);
    --color-main-200: rgb(229 229 229);
    --color-main-300: rgb(212 212 212);
    --color-main-400: rgb(163 163 163);
    --color-main-500: rgb(115 115 115);
    --color-main-600: rgb(82 82 82);
    --color-main-700: rgb(64 64 64);
    --color-main-800: rgb(38 38 38);
    --color-main-900: rgb(23 23 23);
}
```

---

## Component Catalog & API

<a id="readme-nav"></a>

### Navigation

- [Components](#components)
- [Hooks](#hooks)
- [Providers](#providers)

<a id="components"></a>

### Components (@kiyotakkkka/zvs-uikit-lib/ui)

### Components: Input & Form Controls

| Component          | Purpose                                                                  | Documentation                                                           |
| ------------------ | ------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| `AutoFillSelector` | Multi-select with search/autocomplete.                                   | [AutoFillSelector](package/src/ui/AutoFillSelector/AutoFillSelector.md) |
| `Button`           | Base button with variants and shape options.                             | [Button](package/src/ui/Button/Button.md)                               |
| `Calendar`         | Date calendar with constraints and custom day rendering.                 | [Calendar](package/src/ui/Calendar/Calendar.md)                         |
| `InputBig`         | Multiline text input.                                                    | [InputBig](package/src/ui/InputBig/InputBig.md)                         |
| `InputCheckBox`    | `true/false` checkbox control.                                           | [InputCheckBox](package/src/ui/InputCheckBox/InputCheckBox.md)          |
| `InputCheckSlided` | `true/false` switch control.                                             | [InputCheckSlided](package/src/ui/InputCheckSlided/InputCheckSlided.md) |
| `InputColor`       | Custom color picker with optional preset palette.                        | [InputColor](package/src/ui/InputColor/InputColor.md)                   |
| `InputDate`        | Date input with calendar popup.                                          | [InputDate](package/src/ui/InputDate/InputDate.md)                      |
| `InputDropZone`    | File drop zone with previews and single/multiple modes.                  | [InputDropZone](package/src/ui/InputDropZone/InputDropZone.md)          |
| `InputPins`        | Segmented input for PIN, OTP, or short confirmation codes.               | [InputPins](package/src/ui/InputPins/InputPins.md)                      |
| `InputRadio`       | Radio control for selecting one option from a group.                     | [InputRadio](package/src/ui/InputRadio/InputRadio.md)                   |
| `InputSlider`      | Numeric range slider with optional value label.                          | [InputSlider](package/src/ui/InputSlider/InputSlider.md)                |
| `InputSmall`       | Single-line input with password visibility toggle for `type="password"`. | [InputSmall](package/src/ui/InputSmall/InputSmall.md)                   |
| `Select`           | Single-value select control with options and optional search.            | [Select](package/src/ui/Select/Select.md)                               |
| `SelectNative`     | Styled native select control.                                            | [SelectNative](package/src/ui/SelectNative/SelectNative.md)             |
| `Switcher`         | Segmented switch between options.                                        | [Switcher](package/src/ui/Switcher/Switcher.md)                         |
| `Tabs`             | Line-style tabs for switching between related views.                     | [Tabs](package/src/ui/Tabs/Tabs.md)                                     |

### Components: Overlays & Floating UI

| Component     | Purpose                                            | Documentation                                            |
| ------------- | -------------------------------------------------- | -------------------------------------------------------- |
| `ContextMenu` | Right-click menu with items and submenus.          | [ContextMenu](package/src/ui/ContextMenu/ContextMenu.md) |
| `Dropdown`    | Generic dropdown popup container.                  | [Dropdown](package/src/ui/Dropdown/Dropdown.md)          |
| `Floating`    | Hover/focus floating panel attached to an element. | [Floating](package/src/ui/Floating/Floating.md)          |
| `Modal`       | Modal dialog window.                               | [Modal](package/src/ui/Modal/Modal.md)                   |
| `SlidedPanel` | Slide-in edge panel with four placements.          | [SlidedPanel](package/src/ui/SlidedPanel/SlidedPanel.md) |
| `Tooltip`     | Small hover/focus label attached to an element.    | [Tooltip](package/src/ui/Tooltip/Tooltip.md)             |

### Components: Structure & Composition

| Component        | Purpose                                                                   | Documentation                                                     |
| ---------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| `Accordeon`      | Expandable section with animated height.                                  | [Accordeon](package/src/ui/Accordeon/Accordeon.md)                |
| `Breadcrumbs`    | Navigation trail for current page location.                               | [Breadcrumbs](package/src/ui/Breadcrumbs/Breadcrumbs.md)          |
| `Card`           | Container with optional header/body/footer sections.                      | [Card](package/src/ui/Card/Card.md)                               |
| `Carousel`       | Image or content carousel with navigation and optional auto-scroll.       | [Carousel](package/src/ui/Carousel/Carousel.md)                   |
| `Chart`          | Line/bar chart with multiple series and custom styling based on Recharts. | [Chart](package/src/ui/Chart/Chart.md)                            |
| `CodeView`       | Code block with syntax highlighting and copy button.                      | [CodeView](package/src/ui/CodeView/CodeView.md)                   |
| `DataDisplay`    | Compact list for displaying labeled data rows.                            | [DataDisplay](package/src/ui/DataDisplay/DataDisplay.md)          |
| `Pagination`     | List pagination with range summary and page-size selector.                | [Pagination](package/src/ui/Pagination/Pagination.md)             |
| `PrettyBR`       | Decorative horizontal divider with icon and label.                        | [PrettyBR](package/src/ui/PrettyBR/PrettyBR.md)                   |
| `ResizablePanel` | Layout with resizable sidebar and content area.                           | [ResizablePanel](package/src/ui/ResizablePanel/ResizablePanel.md) |
| `ScrollArea`     | Styled scroll container.                                                  | [ScrollArea](package/src/ui/ScrollArea/ScrollArea.md)             |
| `Separator`      | Horizontal/vertical separator.                                            | [Separator](package/src/ui/Separator/Separator.md)                |
| `Table`          | Column-based table with per-column sorting modes.                         | [Table](package/src/ui/Table/Table.md)                            |
| `Timeline`       | Compound timeline for ordered events.                                     | [Timeline](package/src/ui/Timeline/Timeline.md)                   |
| `TreeView`       | Hierarchical list with optional virtualization.                           | [TreeView](package/src/ui/TreeView/TreeView.md)                   |

### Components: Status & Feedback

| Component     | Purpose                                           | Documentation                                            |
| ------------- | ------------------------------------------------- | -------------------------------------------------------- |
| `Alert`       | Alert/notification block.                         | [Alert](package/src/ui/Alert/Alert.md)                   |
| `Badge`       | Compact status indicator.                         | [Badge](package/src/ui/Badge/Badge.md)                   |
| `EmptyState`  | Placeholder for empty or first-run states.        | [EmptyState](package/src/ui/EmptyState/EmptyState.md)    |
| `Loader`      | Loading spinner.                                  | [Loader](package/src/ui/Loader/Loader.md)                |
| `ProgressBar` | Progress indicator with optional label and value. | [ProgressBar](package/src/ui/ProgressBar/ProgressBar.md) |
| `Skeleton`    | Placeholder block for loading content.            | [Skeleton](package/src/ui/Skeleton/Skeleton.md)          |

<a id="hooks"></a>

### Hooks (@kiyotakkkka/zvs-uikit-lib/hooks)

| Hook        | Purpose                                                         | Documentation                               | Returns                                                                             |
| ----------- | --------------------------------------------------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------- |
| `useToasts` | Access toast context API. Works only inside `ToastProvider`.    | [useToasts](package/src/hooks/useToasts.md) | `ToastContextValue` with: `push`, `normal`, `info`, `warning`, `success`, `danger`. |
| `useStyle`  | Access style management API. Works only inside `StyleProvider`. | [useStyle](package/src/hooks/useStyle.md)   | Object with method: `changeTheme(palette: StyleThemePalette) => void`.              |

<a id="providers"></a>

### Providers (@kiyotakkkka/zvs-uikit-lib/providers)

| Provider        | Purpose                           |
| --------------- | --------------------------------- |
| `ToastProvider` | Global toast notifications stack. |
| `StyleProvider` | Global style management.          |

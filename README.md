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

| Component          | Purpose                                                                  | Documentation                                           |
| ------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------- |
| `Button`           | Base button with variants and shape options.                             | [Button](src/ui/Button/Button.md)                             |
| `InputSmall`       | Single-line input with password visibility toggle for `type="password"`. | [InputSmall](src/ui/InputSmall/InputSmall.md)                 |
| `InputDate`        | Date input with calendar popup.                                          | [InputDate](src/ui/InputDate/InputDate.md)                   |
| `InputBig`         | Multiline text input.                                                    | [InputBig](src/ui/InputBig/InputBig.md)                       |
| `InputCheckBox`    | `true/false` checkbox control.                                           | [InputCheckBox](src/ui/InputCheckBox/InputCheckBox.md)       |
| `InputCheckSlided` | `true/false` switch control.                                             | [InputCheckSlided](src/ui/InputCheckSlided/InputCheckSlided.md) |
| `InputSlider`      | Numeric range slider with optional value label.                          | [InputSlider](src/ui/InputSlider/InputSlider.md)             |
| `InputRadio`       | Radio control for selecting one option from a group.                     | [InputRadio](src/ui/InputRadio/InputRadio.md)                 |
| `Select`           | Single-value select control with options and optional search.            | [Select](src/ui/Select/Select.md)                             |
| `AutoFillSelector` | Multi-select with search/autocomplete.                                   | [AutoFillSelector](src/ui/AutoFillSelector/AutoFillSelector.md) |
| `Calendar`         | Date calendar with constraints and custom day rendering.                 | [Calendar](src/ui/Calendar/Calendar.md)                       |
| `Switcher`         | Segmented switch between options.                                        | [Switcher](src/ui/Switcher/Switcher.md)                       |

### Components: Overlays & Floating UI

| Component     | Purpose                                            | Documentation                                 |
| ------------- | -------------------------------------------------- | --------------------------------------------- |
| `ContextMenu` | Right-click menu with items and submenus.          | [ContextMenu](src/ui/ContextMenu/ContextMenu.md) |
| `Dropdown`    | Generic dropdown popup container.                  | [Dropdown](src/ui/Dropdown/Dropdown.md)          |
| `Floating`    | Hover/focus floating panel attached to an element. | [Floating](src/ui/Floating/Floating.md)          |
| `Modal`       | Modal dialog window.                               | [Modal](src/ui/Modal/Modal.md)                   |
| `SlidedPanel` | Slide-in side panel (drawer).                      | [SlidedPanel](src/ui/SlidedPanel/SlidedPanel.md) |

### Components: Structure & Composition

| Component        | Purpose                                                                   | Documentation                                       |
| ---------------- | ------------------------------------------------------------------------- | --------------------------------------------------- |
| `Card`           | Container with optional header/body/footer sections.                      | [Card](src/ui/Card/Card.md)                         |
| `Accordeon`      | Expandable section with animated height.                                  | [Accordeon](src/ui/Accordeon/Accordeon.md)          |
| `Breadcrumbs`    | Navigation trail for current page location.                               | [Breadcrumbs](src/ui/Breadcrumbs/Breadcrumbs.md)    |
| `DataDisplay`    | Compact list for displaying labeled data rows.                            | [DataDisplay](src/ui/DataDisplay/DataDisplay.md)    |
| `ResizablePanel` | Layout with resizable sidebar and content area.                           | [ResizablePanel](src/ui/ResizablePanel/ResizablePanel.md) |
| `TreeView`       | Hierarchical list with optional virtualization.                           | [TreeView](src/ui/TreeView/TreeView.md)             |
| `Table`          | Typed table with compound parts and sorting modes.                        | [Table](src/ui/Table/Table.md)                      |
| `Separator`      | Horizontal/vertical separator.                                            | [Separator](src/ui/Separator/Separator.md)          |
| `ScrollArea`     | Styled scroll container.                                                  | [ScrollArea](src/ui/ScrollArea/ScrollArea.md)       |
| `PrettyBR`       | Decorative horizontal divider with icon and label.                        | [PrettyBR](src/ui/PrettyBR/PrettyBR.md)             |
| `CodeView`       | Code block with syntax highlighting and copy button.                      | [CodeView](src/ui/CodeView/CodeView.md)             |
| `Chart`          | Line/bar chart with multiple series and custom styling based on Recharts. | [Chart](src/ui/Chart/Chart.md)                      |

### Components: Status & Feedback

| Component     | Purpose                                           | Documentation                                 |
| ------------- | ------------------------------------------------- | --------------------------------------------- |
| `Badge`       | Compact status indicator.                         | [Badge](src/ui/Badge/Badge.md)                |
| `Alert`       | Alert/notification block.                         | [Alert](src/ui/Alert/Alert.md)                |
| `EmptyState`  | Placeholder for empty or first-run states.        | [EmptyState](src/ui/EmptyState/EmptyState.md) |
| `Loader`      | Loading spinner.                                  | [Loader](src/ui/Loader/Loader.md)             |
| `ProgressBar` | Progress indicator with optional label and value. | [ProgressBar](src/ui/ProgressBar/ProgressBar.md) |

<a id="hooks"></a>

### Hooks (@kiyotakkkka/zvs-uikit-lib/hooks)

| Hook        | Purpose                                                         | Documentation                        | Returns                                                                             |
| ----------- | --------------------------------------------------------------- | ------------------------------------ | ----------------------------------------------------------------------------------- |
| `useToasts` | Access toast context API. Works only inside `ToastProvider`.    | [useToasts](src/hooks/useToasts.md) | `ToastContextValue` with: `push`, `normal`, `info`, `warning`, `success`, `danger`. |
| `useStyle`  | Access style management API. Works only inside `StyleProvider`. | [useStyle](src/hooks/useStyle.md)   | Object with method: `changeTheme(palette: StyleThemePalette) => void`.              |

<a id="providers"></a>

### Providers (@kiyotakkkka/zvs-uikit-lib/providers)

| Provider        | Purpose                           |
| --------------- | --------------------------------- |
| `ToastProvider` | Global toast notifications stack. |
| `StyleProvider` | Global style management.          |

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

---

## Component Catalog & API

<a id="readme-nav"></a>

### Navigation

- [Components](#components)
- [Hooks](#hooks)
- [Providers](#providers)

<a id="components"></a>

### Components (@kiyotakkkka/zvs-uikit-lib)

### Components: Input & Form Controls

| Component            | Purpose                                                                  | Documentation                                                |
| -------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------ |
| `AutoFillSelector`   | Multi-select with search/autocomplete.                                   | [AutoFillSelector](package/src/docs/AutoFillSelector.md)     |
| `Button`             | Base button with variants and shape options.                             | [Button](package/src/docs/Button.md)                         |
| `Calendar`           | Date calendar with constraints and custom day rendering.                 | [Calendar](package/src/docs/Calendar.md)                     |
| `InputBig`           | Multiline text input.                                                    | [InputBig](package/src/docs/InputBig.md)                     |
| `InputCheckBox`      | `true/false` checkbox control.                                           | [InputCheckBox](package/src/docs/InputCheckBox.md)           |
| `InputCheckBoxGroup` | Connects checkbox controls to a shared boolean model.                    | [InputCheckBoxGroup](package/src/docs/InputCheckBoxGroup.md) |
| `InputCheckSlided`   | `true/false` switch control.                                             | [InputCheckSlided](package/src/docs/InputCheckSlided.md)     |
| `InputColor`         | Custom color picker with optional preset palette.                        | [InputColor](package/src/docs/InputColor.md)                 |
| `InputDate`          | Date input with calendar popup.                                          | [InputDate](package/src/docs/InputDate.md)                   |
| `InputDropZone`      | File drop zone with previews and single/multiple modes.                  | [InputDropZone](package/src/docs/InputDropZone.md)           |
| `InputPins`          | Segmented input for PIN, OTP, or short confirmation codes.               | [InputPins](package/src/docs/InputPins.md)                   |
| `InputRadio`         | Radio control for selecting one option from a group.                     | [InputRadio](package/src/docs/InputRadio.md)                 |
| `InputRadioGroup`    | Connects radio controls to an exclusive boolean model.                   | [InputRadioGroup](package/src/docs/InputRadioGroup.md)       |
| `InputRange`         | Controlled range input for selecting a pair of numeric boundaries.       | [InputRange](package/src/docs/InputRange.md)                 |
| `InputSlider`        | Numeric range slider with optional value label.                          | [InputSlider](package/src/docs/InputSlider.md)               |
| `InputSmall`         | Single-line input with password visibility toggle for `type="password"`. | [InputSmall](package/src/docs/InputSmall.md)                 |
| `Select`             | Single-value select control with options and optional search.            | [Select](package/src/docs/Select.md)                         |
| `SelectNative`       | Styled native select control.                                            | [SelectNative](package/src/docs/SelectNative.md)             |
| `Switcher`           | Segmented switch between options.                                        | [Switcher](package/src/docs/Switcher.md)                     |
| `Tabs`               | Line-style tabs for switching between related views.                     | [Tabs](package/src/docs/Tabs.md)                             |

### Components: Overlays

| Component     | Purpose                                            | Documentation                                  |
| ------------- | -------------------------------------------------- | ---------------------------------------------- |
| `ContextMenu` | Right-click menu with items and submenus.          | [ContextMenu](package/src/docs/ContextMenu.md) |
| `Dropdown`    | Generic dropdown popup container.                  | [Dropdown](package/src/docs/Dropdown.md)       |
| `Floating`    | Hover/focus floating panel attached to an element. | [Floating](package/src/docs/Floating.md)       |
| `Modal`       | Modal dialog window.                               | [Modal](package/src/docs/Modal.md)             |
| `SlidedPanel` | Slide-in edge panel with four placements.          | [SlidedPanel](package/src/docs/SlidedPanel.md) |
| `Tooltip`     | Small hover/focus label attached to an element.    | [Tooltip](package/src/docs/Tooltip.md)         |

### Components: Structure & Composition

| Component        | Purpose                                                                   | Documentation                                        |
| ---------------- | ------------------------------------------------------------------------- | ---------------------------------------------------- |
| `Accordion`      | Expandable section with animated height.                                  | [Accordion](package/src/docs/Accordion.md)           |
| `Breadcrumbs`    | Navigation trail for current page location.                               | [Breadcrumbs](package/src/docs/Breadcrumbs.md)       |
| `Card`           | Container with optional header/body/footer sections.                      | [Card](package/src/docs/Card.md)                     |
| `Carousel`       | Image or content carousel with navigation and optional auto-scroll.       | [Carousel](package/src/docs/Carousel.md)             |
| `Chart`          | Line/bar chart with multiple series and custom styling based on Recharts. | [Chart](package/src/docs/Chart.md)                   |
| `CodeView`       | Code block with syntax highlighting and copy button.                      | [CodeView](package/src/docs/CodeView.md)             |
| `DataDisplay`    | Compact list for displaying labeled data rows.                            | [DataDisplay](package/src/docs/DataDisplay.md)       |
| `Pagination`     | List pagination with range summary and page-size selector.                | [Pagination](package/src/docs/Pagination.md)         |
| `PrettyBR`       | Decorative horizontal divider with icon and label.                        | [PrettyBR](package/src/docs/PrettyBR.md)             |
| `ResizablePanel` | Layout with resizable sidebar and content area.                           | [ResizablePanel](package/src/docs/ResizablePanel.md) |
| `ScrollArea`     | Styled scroll container.                                                  | [ScrollArea](package/src/docs/ScrollArea.md)         |
| `Separator`      | Horizontal/vertical separator.                                            | [Separator](package/src/docs/Separator.md)           |
| `Table`          | Column-based table with per-column sorting modes.                         | [Table](package/src/docs/Table.md)                   |
| `Timeline`       | Compound timeline for ordered events.                                     | [Timeline](package/src/docs/Timeline.md)             |
| `TreeView`       | Hierarchical list with optional virtualization.                           | [TreeView](package/src/docs/TreeView.md)             |

### Components: Status & Feedback

| Component     | Purpose                                           | Documentation                                  |
| ------------- | ------------------------------------------------- | ---------------------------------------------- |
| `Alert`       | Alert/notification block.                         | [Alert](package/src/docs/Alert.md)             |
| `Badge`       | Compact status indicator.                         | [Badge](package/src/docs/Badge.md)             |
| `EmptyState`  | Placeholder for empty or first-run states.        | [EmptyState](package/src/docs/EmptyState.md)   |
| `Loader`      | Loading spinner.                                  | [Loader](package/src/docs/Loader.md)           |
| `ProgressBar` | Progress indicator with optional label and value. | [ProgressBar](package/src/docs/ProgressBar.md) |
| `Skeleton`    | Placeholder block for loading content.            | [Skeleton](package/src/docs/Skeleton.md)       |

### Components: Typography

| Component    | Purpose                                    | Documentation                                |
| ------------ | ------------------------------------------ | -------------------------------------------- |
| `Text`       | Body and supporting text.                  | [Text](package/src/docs/Text.md)             |
| `Heading`    | Semantic heading scale.                    | [Heading](package/src/docs/Heading.md)       |
| `Blockquote` | Block quotation with optional attribution. | [Blockquote](package/src/docs/Blockquote.md) |
| `Code`       | Inline and block code treatment.           | [Code](package/src/docs/Code.md)             |
| `Em`         | Semantic stress emphasis.                  | [Em](package/src/docs/Em.md)                 |
| `Kbd`        | Keyboard input token.                      | [Kbd](package/src/docs/Kbd.md)               |
| `Link`       | Styled semantic anchor.                    | [Link](package/src/docs/Link.md)             |
| `Quote`      | Inline semantic quotation.                 | [Quote](package/src/docs/Quote.md)           |
| `Strong`     | Semantic importance.                       | [Strong](package/src/docs/Strong.md)         |

While using Next.js you can import some components like SSR-friendly from `@kiyotakkkka/zvs-uikit-lib/server`:

List of SSR-friendly components:

- Alert
- Badge
- Button
- Card
- DataDisplay
- EmptyState
- InputBig
- Loader
- ProgressBar
- SelectNative
- ScrollArea
- Separator
- Skeleton
- Tooltip
- Text
- Heading
- Blockquote
- Code
- Em
- Kbd
- Link
- Quote
- Strong

<a id="hooks"></a>

### Hooks (@kiyotakkkka/zvs-uikit-lib)

| Hook        | Purpose                                                         | Documentation                              | Returns                                                                             |
| ----------- | --------------------------------------------------------------- | ------------------------------------------ | ----------------------------------------------------------------------------------- |
| `useToasts` | Access toast context API. Works only inside `ToastProvider`.    | [useToasts](package/src/docs/useToasts.md) | `ToastContextValue` with: `push`, `normal`, `info`, `warning`, `success`, `danger`. |
| `useStyle`  | Access style management API. Works only inside `StyleProvider`. | [useStyle](package/src/docs/useStyle.md)   | Object with method: `changeTheme(palette: StyleThemePalette) => void`.              |

<a id="providers"></a>

### Providers (@kiyotakkkka/zvs-uikit-lib)

| Provider        | Purpose                           |
| --------------- | --------------------------------- |
| `ToastProvider` | Global toast notifications stack. |
| `StyleProvider` | Global style management.          |

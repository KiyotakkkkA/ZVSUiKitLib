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
| `Button`           | Base button with variants and shape options.                             | [Button](docs/components/Button.md)                     |
| `InputSmall`       | Single-line input with password visibility toggle for `type="password"`. | [InputSmall](docs/components/InputSmall.md)             |
| `InputDate`        | Date input with calendar popup.                                          | [InputDate](docs/components/InputDate.md)               |
| `InputBig`         | Multiline text input.                                                    | [InputBig](docs/components/InputBig.md)                 |
| `InputCheckbox`    | `true/false` switch control.                                             | [InputCheckbox](docs/components/InputCheckbox.md)       |
| `Select`           | Single-value select control.                                             | [Select](docs/components/Select.md)                     |
| `Dropdown`         | Generic dropdown menu.                                                   | [Dropdown](docs/components/Dropdown.md)                 |
| `AutoFillSelector` | Multi-select with search/autocomplete.                                   | [AutoFillSelector](docs/components/AutoFillSelector.md) |
| `Calendar`         | Date calendar with constraints and custom day rendering.                 | [Calendar](docs/components/Calendar.md)                 |
| `Switcher`         | Segmented switch between options.                                        | [Switcher](docs/components/Switcher.md)                 |

### Components: Overlays & Floating UI

| Component     | Purpose                                            | Documentation                                 |
| ------------- | -------------------------------------------------- | --------------------------------------------- |
| `Modal`       | Modal dialog window.                               | [Modal](docs/components/Modal.md)             |
| `SlidedPanel` | Slide-in side panel (drawer).                      | [SlidedPanel](docs/components/SlidedPanel.md) |
| `Floating`    | Hover/focus floating panel attached to an element. | [Floating](docs/components/Floating.md)       |

### Components: Structure & Composition

| Component    | Purpose                                              | Documentation                               |
| ------------ | ---------------------------------------------------- | ------------------------------------------- |
| `Card`       | Container with optional header/body/footer sections. | [Card](docs/components/Card.md)             |
| `Accordeon`  | Expandable section with animated height.             | [Accordeon](docs/components/Accordeon.md)   |
| `TreeView`   | Hierarchical list with optional virtualization.      | [TreeView](docs/components/TreeView.md)     |
| `Table`      | Typed table with compound parts and sorting modes.   | [Table](docs/components/Table.md)           |
| `Separator`  | Horizontal/vertical separator.                       | [Separator](docs/components/Separator.md)   |
| `ScrollArea` | Styled scroll container.                             | [ScrollArea](docs/components/ScrollArea.md) |
| `PrettyBR`   | Decorative horizontal divider with icon and label.   | [PrettyBR](docs/components/PrettyBR.md)     |

### Components: Status & Feedback

| Component | Purpose                   | Documentation                       |
| --------- | ------------------------- | ----------------------------------- |
| `Badge`   | Compact status indicator. | [Badge](docs/components/Badge.md)   |
| `Alert`   | Alert/notification block. | [Alert](docs/components/Alert.md)   |
| `Loader`  | Loading spinner.          | [Loader](docs/components/Loader.md) |

<a id="hooks"></a>

### Hooks (@kiyotakkkka/zvs-uikit-lib/hooks)

| Hook        | Purpose                                                      | Documentation                        | Returns                                                                             |
| ----------- | ------------------------------------------------------------ | ------------------------------------ | ----------------------------------------------------------------------------------- |
| `useToasts` | Access toast context API. Works only inside `ToastProvider`. | [useToasts](docs/hooks/useToasts.md) | `ToastContextValue` with: `push`, `normal`, `info`, `warning`, `success`, `danger`. |

<a id="providers"></a>

### Providers (@kiyotakkkka/zvs-uikit-lib/providers)

| Provider        | Purpose                           |
| --------------- | --------------------------------- |
| `ToastProvider` | Global toast notifications stack. |

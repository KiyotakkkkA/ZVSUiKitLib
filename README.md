## Install

```bash
npm i @kiyotakkkka/zvs-uikit-lib
```

Set Tailwind up once (see [Styles](#styles)), then use the components anywhere:

```tsx
import { Button, Text } from "@kiyotakkkka/zvs-uikit-lib";

export function Example() {
    return (
        <Button>
            <Text>Ready</Text>
        </Button>
    );
}
```

Tailwind v4 is required in the consuming project — the components are styled
with utility classes.

See [CHANGELOG.md](CHANGELOG.md) for what changed in 7.0.0, including the
breaking changes.

## Entry points

| Entry point                             | Contents                                                |
| --------------------------------------- | ------------------------------------------------------- |
| `@kiyotakkkka/zvs-uikit-lib`            | Every component except `Chart` and `CodeView`.          |
| `@kiyotakkkka/zvs-uikit-lib/chart`      | `Chart`. Pulls in `recharts`.                           |
| `@kiyotakkkka/zvs-uikit-lib/code-view`  | `CodeView`. Pulls in `shiki`.                           |
| `@kiyotakkkka/zvs-uikit-lib/server`     | Components safe to render on the server.                |
| `@kiyotakkkka/zvs-uikit-lib/styles.css` | Design tokens and the rules utilities cannot express.   |

`Chart` and `CodeView` are the only components with heavy third-party
dependencies. They sit behind their own entry points so a project that does not
use them never loads `recharts` or `shiki`:

```tsx
import { Button } from "@kiyotakkkka/zvs-uikit-lib";
import { Chart } from "@kiyotakkkka/zvs-uikit-lib/chart";
import { CodeView } from "@kiyotakkkka/zvs-uikit-lib/code-view";
```

## Styles

The components carry Tailwind utility classes, the way shadcn/ui components do,
and `cn()` resolves conflicts with `tailwind-merge`. That is what makes an
override work with no `!important` and no cascade tricks:

```tsx
<Button className="bg-red-500 px-8">Delete</Button>
```

`cn("px-3.5 py-2 bg-main-700", "bg-red-500 px-8")` drops `px-3.5` and
`bg-main-700` from the string before it ever reaches the DOM, so there is
nothing left to lose a specificity fight.

**Tailwind v4 is required** in the consuming project. Set it up once:

```css
@import "tailwindcss";
@import "@kiyotakkkka/zvs-uikit-lib/styles.css";
@source "../node_modules/@kiyotakkkka/zvs-uikit-lib/dist";
```

- `styles.css` carries the design tokens (`--color-main-*` and the semantic
  colours) as a `@theme` block, three keyframe animations, the scrollbar
  chrome, the popover transition and one named grid template — everything that
  is not expressible as a utility. It is the only stylesheet the kit ships.
- `@source` points Tailwind at the built package so it compiles the utilities
  the components reference. Without it the components render unstyled.

Overriding stays ordinary Tailwind from there: pass `className` for the
element itself, `classNames` for inner slots, and change the design tokens in
your own `@theme` block to restyle everything at once.

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

### Runtime theme with `StyleProvider`

Use `StyleProvider` when the palette can change at runtime. A
`StyleThemePalette` is a complete, type-safe palette. Spreading
`defaultThemePalette` is the easiest way to customize only selected groups
while retaining valid values for all other tokens.

```tsx
"use client";

import type { ReactNode } from "react";
import {
    Button,
    StyleProvider,
    defaultThemePalette,
    useStyle,
    type StyleThemePalette,
} from "@kiyotakkkka/zvs-uikit-lib";

const roseTheme: StyleThemePalette = {
    ...defaultThemePalette,
    main: {
        50: "#fff7ed",
        100: "#ffedd5",
        200: "#fed7aa",
        300: "#fdba74",
        400: "#fb923c",
        500: "#f97316",
        600: "#ea580c",
        700: "#9a3412",
        800: "#431407",
        900: "#1c0a04",
    },
    accent: {
        light: "#fda4af",
        medium: "#f43f5e",
        dark: "#be123c",
    },
};

function ThemeControls() {
    const { changeTheme, resetTheme } = useStyle();

    return (
        <>
            <Button onClick={() => changeTheme(roseTheme)}>Rose theme</Button>
            <Button variant="secondary" onClick={resetTheme}>
                Reset
            </Button>
        </>
    );
}

export function AppTheme({ children }: { children: ReactNode }) {
    return (
        <StyleProvider>
            <ThemeControls />
            {children}
        </StyleProvider>
    );
}
```

`useStyle()` returns the current `palette`, `changeTheme(palette)`, and
`resetTheme()`. It must be used below `StyleProvider`.

### Persistence and SSR

Pass `cookies` to persist runtime changes in the `zvs-theme` cookie. For an SSR
render without a theme flash, read the palette on the server, apply its CSS
variables to `<html>`, and pass the same value to `initialPalette`.

```tsx
import type { CSSProperties, ReactNode } from "react";
import { cookies } from "next/headers";
import { StyleProvider } from "@kiyotakkkka/zvs-uikit-lib";
import {
    defaultThemePalette,
    getThemeVariables,
    parseThemePalette,
    STYLE_THEME_COOKIE,
} from "@kiyotakkkka/zvs-uikit-lib/server";

export default async function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    const cookieStore = await cookies();
    const palette =
        parseThemePalette(cookieStore.get(STYLE_THEME_COOKIE)?.value) ??
        defaultThemePalette;

    return (
        <html style={getThemeVariables(palette) as CSSProperties}>
            <body>
                <StyleProvider initialPalette={palette} cookies>
                    {children}
                </StyleProvider>
            </body>
        </html>
    );
}
```

`cookies` also accepts `{ name, maxAge, path, sameSite, secure }`. Without this
prop, theme switching remains in memory and does not write cookies.

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

| Component            | Purpose                                                                  | Documentation                                                |
| -------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------ |
| `AutoFillSelector`   | Multi-select with search/autocomplete.                                   | [AutoFillSelector](package/src/docs/AutoFillSelector.md)     |
| `Button`             | Base button with variants and shape options.                             | [Button](package/src/docs/Button.md)                         |
| `Calendar`           | Date calendar with constraints and custom day rendering.                 | [Calendar](package/src/docs/Calendar.md)                     |
| `InputBig`           | Multiline text input.                                                    | [InputBig](package/src/docs/InputBig.md)                     |
| `Field`              | Label, description and error wrapper for any control.                    | [Field](package/src/docs/Field.md)                           |
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
| `Chart`          | Line/bar chart with multiple series and custom styling based on Recharts. Imported from `/chart`. | [Chart](package/src/docs/Chart.md)                   |
| `CodeView`       | Code block with syntax highlighting and copy button. Imported from `/code-view`. | [CodeView](package/src/docs/CodeView.md)             |
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
| `useLocale` | Read the active string dictionary. Works without a provider.    | —                                          | The resolved `ZvsDictionary`.                                                       |

<a id="providers"></a>

### Providers (@kiyotakkkka/zvs-uikit-lib)

| Provider        | Purpose                           |
| --------------- | --------------------------------- |
| `ToastProvider` | Global toast notifications stack. |
| `StyleProvider` | Global style management.          |
| `LocaleProvider` | Strings the components render.   |

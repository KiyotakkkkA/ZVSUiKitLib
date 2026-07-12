# useStyle

## Purpose

Hook for accessing style management API from `StyleContext`.

## Usage Requirement

`useStyle` must be called inside `StyleProvider`, otherwise it throws an error.

## Return Value

Object with the current palette and methods:

| Member      | Type                                   | Description                  |
| ----------- | -------------------------------------- | ---------------------------- |
| palette     | `StyleThemePalette`                    | Current controlled palette.  |
| changeTheme | `(palette: StyleThemePalette) => void` | Apply and persist a palette. |
| resetTheme  | `() => void`                           | Restore `initialPalette`.    |

`StyleThemePalette` contains a `main` scale (`"50"` through `"900"`) and
required `accent`, `danger`, `warning`, `success`, and `info` palettes. Every
semantic palette contains `light`, `medium`, and `dark` values.
For example:

```ts
const draculaMain = {
    50: "rgb(248 248 242)",
    100: "rgb(241 250 140)",
    200: "rgb(189 147 249)",
    300: "rgb(139 233 253)",
    400: "rgb(80 250 123)",
    500: "rgb(255 121 198)",
    600: "rgb(255 85 85)",
    700: "rgb(98 114 164)",
    800: "rgb(68 71 90)",
    900: "rgb(40 42 54)",
};
```

# Example

```tsx
import { Button } from "@kiyotakkkka/zvs-uikit-lib";

const draculaPalette = {
    main: {
        50: "rgb(248 248 242)",
        100: "rgb(241 250 140)",
        200: "rgb(189 147 249)",
        300: "rgb(139 233 253)",
        400: "rgb(80 250 123)",
        500: "rgb(255 121 198)",
        600: "rgb(255 85 85)",
        700: "rgb(98 114 164)",
        800: "rgb(68 71 90)",
        900: "rgb(40 42 54)",
    },
    accent: { light: "#bd93f9", medium: "#ff79c6", dark: "#8b5cf6" },
    danger: { light: "#fca5a5", medium: "#ef4444", dark: "#b91c1c" },
    warning: { light: "#fde68a", medium: "#f59e0b", dark: "#b45309" },
    success: { light: "#86efac", medium: "#22c55e", dark: "#15803d" },
    info: { light: "#93c5fd", medium: "#3b82f6", dark: "#1e40af" },
};

function ThemeButton() {
    const { changeTheme } = useStyle();

    return (
        <Button onClick={() => changeTheme(draculaPalette)}>
            Apply Dracula
        </Button>
    );
}

export function DemoStyle() {
    return (
        <StyleProvider>
            <ThemeButton />
        </StyleProvider>
    );
}
```

## SSR and cookie persistence

By default, `StyleProvider` works without persistence and only manages the
current runtime palette. Pass `cookies` explicitly to store the palette in the
`zvs-theme` cookie. For a flash-free SSR render, read that cookie on the server,
apply its variables to `html`, and pass the same palette as `initialPalette`.

```tsx
import type { CSSProperties } from "react";
import { cookies } from "next/headers";
import { StyleProvider } from "@kiyotakkkka/zvs-uikit-lib";
import {
    defaultThemePalette,
    getThemeVariables,
    parseThemePalette,
    STYLE_THEME_COOKIE,
} from "@kiyotakkkka/zvs-uikit-lib/server";

export default async function RootLayout({ children }) {
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

Omit `cookies` for a regular provider without cookie access. Pass an options
object to configure `name`, `maxAge`, `path`, `sameSite`, and `secure`.

```tsx
"use client";
import { Button, StyleProvider, useStyle } from "@kiyotakkkka/zvs-uikit-lib";

const ocean = {
    main: {
        50: "#eeffff", 100: "#b2ccd6", 200: "#89ddff",
        300: "#82aaff", 400: "#676e95", 500: "#546e7a",
        600: "#3b4b5a", 700: "#263238", 800: "#0f2130", 900: "#0f111a",
    },
    accent: { light: "#89ddff", medium: "#82aaff", dark: "#5c6bc0" },
    danger: { light: "#fca5a5", medium: "#ef4444", dark: "#b91c1c" },
    warning: { light: "#fde68a", medium: "#f59e0b", dark: "#b45309" },
    success: { light: "#86efac", medium: "#22c55e", dark: "#15803d" },
    info: { light: "#93c5fd", medium: "#3b82f6", dark: "#1e40af" },
};

function ThemeButton() {
    const { changeTheme } = useStyle();
    return <Button onClick={() => changeTheme(ocean)}>Apply Ocean</Button>;
}

export function App() {
    return <StyleProvider><ThemeButton /></StyleProvider>;
}
```

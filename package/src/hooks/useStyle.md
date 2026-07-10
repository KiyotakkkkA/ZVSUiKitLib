# useStyle

## Purpose

Hook for accessing style management API from `StyleContext`.

## Usage Requirement

`useStyle` must be called inside `StyleProvider`, otherwise it throws an error.

## Return Value

Object with method:

| Method      | Signature                              | Description                          |
| ----------- | -------------------------------------- | ------------------------------------ |
| changeTheme | `(palette: StyleThemePalette) => void` | Change theme by providing a palette. |

`StyleThemePalette` is an object with keys of `MainColorStep` type (`"50"`, `"100"`, ..., `"900"`) and string values (color codes).
For example:

```ts
const draculaPalette = {
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
import { Button } from "@kiyotakkkka/zvs-uikit-lib/ui";

const draculaPalette = {
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

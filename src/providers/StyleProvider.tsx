import {
    type PropsWithChildren,
    useCallback,
    useLayoutEffect,
    useState,
} from "react";
import { StyleContext } from "../lib/context";

export type MainColorStep =
    | "50"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";

export type StyleThemePalette = Record<MainColorStep, string>;

const applyPalette = (palette: StyleThemePalette) => {
    const root = document.documentElement;

    Object.entries(palette).forEach(([step, value]) => {
        root.style.setProperty(`--color-main-${step}`, value);
    });
};

const defaultMainPalette: StyleThemePalette = {
    50: "rgb(250 250 250)",
    100: "rgb(245 245 245)",
    200: "rgb(229 229 229)",
    300: "rgb(212 212 212)",
    400: "rgb(163 163 163)",
    500: "rgb(115 115 115)",
    600: "rgb(82 82 82)",
    700: "rgb(64 64 64)",
    800: "rgb(28 28 28)",
    900: "rgb(14 14 14)",
};

export function StyleProvider({ children }: PropsWithChildren) {
    const [palette, setPalette] =
        useState<StyleThemePalette>(defaultMainPalette);

    useLayoutEffect(() => {
        applyPalette(palette);
    }, [palette]);

    const changeTheme = useCallback((nextPalette: StyleThemePalette) => {
        setPalette(nextPalette);
    }, []);

    return (
        <StyleContext.Provider value={{ changeTheme }}>
            {children}
        </StyleContext.Provider>
    );
}

import {
    type PropsWithChildren,
    useCallback,
    useLayoutEffect,
    useState,
} from "react";
import { StyleContext } from "../lib/context";
import {
    defaultThemePalette,
    getThemeVariables,
    isStyleThemePalette,
    serializeThemePalette,
    STYLE_THEME_COOKIE,
    type StyleThemePalette,
} from "../theme";

export type StyleCookieOptions = {
    name?: string;
    maxAge?: number;
    path?: string;
    sameSite?: "Strict" | "Lax" | "None";
    secure?: boolean;
};

export type StyleProviderProps = PropsWithChildren<{
    initialPalette?: StyleThemePalette;
    cookies?: boolean | StyleCookieOptions;
}>;

const applyPalette = (palette: StyleThemePalette) => {
    const root = document.documentElement;

    Object.entries(getThemeVariables(palette)).forEach(([name, value]) => {
        root.style.setProperty(name, value);
    });
};

const persistPalette = (
    palette: StyleThemePalette,
    options: StyleCookieOptions,
) => {
    const name = options.name ?? STYLE_THEME_COOKIE;
    const maxAge = options.maxAge ?? 60 * 60 * 24 * 365;
    const path = options.path ?? "/";
    const sameSite = options.sameSite ?? "Lax";
    const secure = options.secure ?? window.location.protocol === "https:";

    document.cookie = [
        `${name}=${serializeThemePalette(palette)}`,
        `Max-Age=${maxAge}`,
        `Path=${path}`,
        `SameSite=${sameSite}`,
        secure ? "Secure" : "",
    ]
        .filter(Boolean)
        .join("; ");
};

export function StyleProvider({
    children,
    initialPalette = defaultThemePalette,
    cookies = false,
}: StyleProviderProps) {
    const [palette, setPalette] = useState<StyleThemePalette>(() =>
        isStyleThemePalette(initialPalette)
            ? initialPalette
            : defaultThemePalette,
    );

    useLayoutEffect(() => {
        applyPalette(palette);
    }, [palette]);

    const changeTheme = useCallback(
        (nextPalette: StyleThemePalette) => {
            if (!isStyleThemePalette(nextPalette)) {
                throw new Error("Invalid StyleThemePalette");
            }

            setPalette(nextPalette);

            if (cookies) {
                persistPalette(
                    nextPalette,
                    typeof cookies === "object" ? cookies : {},
                );
            }
        },
        [cookies],
    );

    const resetTheme = useCallback(() => {
        changeTheme(initialPalette);
    }, [changeTheme, initialPalette]);

    return (
        <StyleContext.Provider value={{ palette, changeTheme, resetTheme }}>
            {children}
        </StyleContext.Provider>
    );
}

export type {
    MainColorPalette,
    MainColorStep,
    SemanticColorName,
    SemanticColorPalette,
    SemanticColorStep,
    StyleThemePalette,
} from "../theme";

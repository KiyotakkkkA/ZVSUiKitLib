export const MAIN_COLOR_STEPS = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"] as const;
export const SEMANTIC_COLOR_STEPS = ["light", "medium", "dark"] as const;
export const SEMANTIC_COLOR_NAMES = ["accent", "danger", "warning", "success", "info"] as const;

export type MainColorStep = (typeof MAIN_COLOR_STEPS)[number];
export type SemanticColorStep = (typeof SEMANTIC_COLOR_STEPS)[number];
export type SemanticColorName = (typeof SEMANTIC_COLOR_NAMES)[number];
export type MainColorPalette = Record<MainColorStep, string>;
export type SemanticColorPalette = Record<SemanticColorStep, string>;
export type StyleThemePalette = {
    main: MainColorPalette;
} & Record<SemanticColorName, SemanticColorPalette>;
export type StyleThemeVariables = Record<
    | `--color-main-${MainColorStep}`
    | `--color-${SemanticColorName}-${SemanticColorStep}`,
    string
>;

export const STYLE_THEME_COOKIE = "zvs-theme";

export const defaultThemePalette: StyleThemePalette = {
    main: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#1c1c1c", 900: "#0e0e0e" },
    accent: { light: "#d8ff8d", medium: "#b7f34a", dark: "#8fc52b" },
    danger: { light: "#fca5a5", medium: "#ef4444", dark: "#b91c1c" },
    warning: { light: "#fde68a", medium: "#f59e0b", dark: "#b45309" },
    success: { light: "#86efac", medium: "#22c55e", dark: "#15803d" },
    info: { light: "#93c5fd", medium: "#3b82f6", dark: "#1e40af" },
};

const isSafeColor = (value: unknown): value is string => typeof value === "string" && value.length > 0 && value.length <= 128 && !/[;{}]/.test(value);

export const isStyleThemePalette = (value: unknown): value is StyleThemePalette => {
    if (!value || typeof value !== "object") return false;
    const theme = value as Record<string, unknown>;
    const main = theme.main as Record<string, unknown> | undefined;
    if (!main || !MAIN_COLOR_STEPS.every((step) => isSafeColor(main[step]))) return false;
    return SEMANTIC_COLOR_NAMES.every((name) => {
        const palette = theme[name] as Record<string, unknown> | undefined;
        return palette && SEMANTIC_COLOR_STEPS.every((step) => isSafeColor(palette[step]));
    });
};

export const serializeThemePalette = (palette: StyleThemePalette) => {
    if (!isStyleThemePalette(palette)) throw new Error("Invalid StyleThemePalette");
    return encodeURIComponent(JSON.stringify(palette));
};

export const parseThemePalette = (value?: string | null): StyleThemePalette | null => {
    if (!value || value.length > 4096) return null;
    try {
        const palette = JSON.parse(decodeURIComponent(value));
        return isStyleThemePalette(palette) ? palette : null;
    } catch { return null; }
};

export const readThemePaletteFromCookieHeader = (cookieHeader?: string | null, cookieName = STYLE_THEME_COOKIE) => {
    if (!cookieHeader) return null;
    const cookie = cookieHeader.split(";").map((part) => part.trim()).find((part) => part.startsWith(`${cookieName}=`));
    return parseThemePalette(cookie?.slice(cookieName.length + 1));
};

export const getThemeVariables = (palette: StyleThemePalette): StyleThemeVariables => {
    const entries: Array<[string, string]> = MAIN_COLOR_STEPS.map((step) => [`--color-main-${step}`, palette.main[step]]);
    for (const name of SEMANTIC_COLOR_NAMES) {
        for (const step of SEMANTIC_COLOR_STEPS) entries.push([`--color-${name}-${step}`, palette[name][step]]);
    }
    return Object.fromEntries(entries) as StyleThemeVariables;
};

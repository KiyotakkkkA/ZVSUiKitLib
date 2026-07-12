"use client";

import {
    Button,
    useStyle,
    type MainColorPalette,
    type SemanticColorPalette,
    type StyleThemePalette,
} from "@kiyotakkkka/zvs-uikit-lib";

type ThemePreset = {
    name: string;
    description: string;
    main: MainColorPalette;
    accent: SemanticColorPalette;
};

const semantic = {
    danger: { light: "#fca5a5", medium: "#ef4444", dark: "#b91c1c" },
    warning: { light: "#fde68a", medium: "#f59e0b", dark: "#b45309" },
    success: { light: "#86efac", medium: "#22c55e", dark: "#15803d" },
    info: { light: "#93c5fd", medium: "#3b82f6", dark: "#1e40af" },
} satisfies Pick<StyleThemePalette, "danger" | "warning" | "success" | "info">;

const getTheme = (theme: ThemePreset): StyleThemePalette => ({
    main: theme.main,
    accent: theme.accent,
    ...semantic,
});

export const themePresets: ThemePreset[] = [
    {
        name: "ZVS Default",
        description: "Current neutral application palette.",
        accent: { light: "#d8ff8d", medium: "#b7f34a", dark: "#8fc52b" },
        main: {
            50: "#fafafa",
            100: "#f5f5f5",
            200: "#e5e5e5",
            300: "#d4d4d4",
            400: "#a3a3a3",
            500: "#737373",
            600: "#525252",
            700: "#404040",
            800: "#1c1c1c",
            900: "#0e0e0e",
        },
    },
    {
        name: "Dracula",
        description: "Purple-tinted dark developer classic.",
        accent: { light: "#bd93f9", medium: "#ff79c6", dark: "#8b5cf6" },
        main: {
            50: "#f8f8f2",
            100: "#f1fa8c",
            200: "#ffb86c",
            300: "#ff79c6",
            400: "#bd93f9",
            500: "#8be9fd",
            600: "#6272a4",
            700: "#44475a",
            800: "#343746",
            900: "#282a36",
        },
    },
    {
        name: "Nord",
        description: "Cool arctic blues and soft contrast.",
        accent: { light: "#8fbcbb", medium: "#88c0d0", dark: "#5e81ac" },
        main: {
            50: "#eceff4",
            100: "#e5e9f0",
            200: "#d8dee9",
            300: "#bfc9d4",
            400: "#88c0d0",
            500: "#5e81ac",
            600: "#4c6b8a",
            700: "#434c5e",
            800: "#3b4252",
            900: "#2e3440",
        },
    },
    {
        name: "Tokyo Night",
        description: "Deep navy with crisp blue-gray steps.",
        accent: { light: "#bb9af7", medium: "#7aa2f7", dark: "#3d59a1" },
        main: {
            50: "#c0caf5",
            100: "#a9b1d6",
            200: "#9aa5ce",
            300: "#7aa2f7",
            400: "#565f89",
            500: "#414868",
            600: "#3b4261",
            700: "#292e42",
            800: "#1f2335",
            900: "#1a1b26",
        },
    },
    {
        name: "Gruvbox",
        description: "Warm retro earth tones.",
        accent: { light: "#d8e09b", medium: "#b8bb26", dark: "#98971a" },
        main: {
            50: "#fbf1c7",
            100: "#ebdbb2",
            200: "#d5c4a1",
            300: "#bdae93",
            400: "#a89984",
            500: "#928374",
            600: "#665c54",
            700: "#504945",
            800: "#3c3836",
            900: "#282828",
        },
    },
    {
        name: "Solarized Dark",
        description: "Balanced low-contrast blue-green palette.",
        accent: { light: "#93a1a1", medium: "#2aa198", dark: "#147d75" },
        main: {
            50: "#fdf6e3",
            100: "#eee8d5",
            200: "#93a1a1",
            300: "#839496",
            400: "#657b83",
            500: "#586e75",
            600: "#2aa198",
            700: "#073642",
            800: "#002f3b",
            900: "#002b36",
        },
    },
    {
        name: "Catppuccin Mocha",
        description: "Soft pastel dark palette.",
        accent: { light: "#cba6f7", medium: "#b4befe", dark: "#7f849c" },
        main: {
            50: "#cdd6f4",
            100: "#bac2de",
            200: "#a6adc8",
            300: "#9399b2",
            400: "#7f849c",
            500: "#6c7086",
            600: "#585b70",
            700: "#45475a",
            800: "#313244",
            900: "#1e1e2e",
        },
    },
    {
        name: "One Dark",
        description: "Atom-inspired neutral blue-gray.",
        accent: { light: "#98c379", medium: "#61afef", dark: "#3b82c4" },
        main: {
            50: "#abb2bf",
            100: "#9da5b4",
            200: "#8b93a3",
            300: "#7f848e",
            400: "#6b717d",
            500: "#5c6370",
            600: "#4b5263",
            700: "#3e4451",
            800: "#282c34",
            900: "#21252b",
        },
    },
    {
        name: "Monokai",
        description: "Classic warm editor palette.",
        accent: { light: "#e6db74", medium: "#a6e22e", dark: "#7cad18" },
        main: {
            50: "#f8f8f2",
            100: "#e6e6dc",
            200: "#cfcfc2",
            300: "#a6e22e",
            400: "#66d9ef",
            500: "#ae81ff",
            600: "#75715e",
            700: "#49483e",
            800: "#3e3d32",
            900: "#272822",
        },
    },
    {
        name: "GitHub Dark",
        description: "Familiar high-clarity GitHub neutrals.",
        accent: { light: "#79c0ff", medium: "#58a6ff", dark: "#1f6feb" },
        main: {
            50: "#f0f6fc",
            100: "#c9d1d9",
            200: "#b1bac4",
            300: "#8b949e",
            400: "#6e7681",
            500: "#484f58",
            600: "#30363d",
            700: "#21262d",
            800: "#161b22",
            900: "#0d1117",
        },
    },
    {
        name: "Material Ocean",
        description: "Saturated blue material dark scheme.",
        accent: { light: "#89ddff", medium: "#82aaff", dark: "#5c6bc0" },
        main: {
            50: "#eeffff",
            100: "#b2ccd6",
            200: "#89ddff",
            300: "#82aaff",
            400: "#676e95",
            500: "#546e7a",
            600: "#3b4b5a",
            700: "#263238",
            800: "#0f2130",
            900: "#0f111a",
        },
    },
];

export function ThemePreview() {
    const { changeTheme } = useStyle();

    return (
        <div className="grid w-full grid-cols-1 gap-3 p-5 sm:grid-cols-2">
            {themePresets.map((theme) => (
                <article
                    key={theme.name}
                    className="rounded-xl border border-main-700 bg-main-900 p-4 transition-colors"
                >
                    <div className="mb-3 flex items-start justify-between gap-3">
                        <div>
                            <h3 className="text-sm font-semibold text-main-100">
                                {theme.name}
                            </h3>
                            <p className="mt-1 text-xs leading-5 text-main-400">
                                {theme.description}
                            </p>
                        </div>
                    </div>
                    <div
                        className="mb-4 flex overflow-hidden rounded-md border border-main-700"
                        aria-label={`${theme.name} colors`}
                    >
                        {Object.entries(theme.main).map(([step, color]) => (
                            <span
                                key={step}
                                className="h-8 min-w-0 flex-1"
                                style={{ backgroundColor: color }}
                                title={`${step}: ${color}`}
                            />
                        ))}
                    </div>
                    <Button
                        className="w-full"
                        onClick={() => changeTheme(getTheme(theme))}
                    >
                        Apply palette
                    </Button>
                </article>
            ))}
        </div>
    );
}

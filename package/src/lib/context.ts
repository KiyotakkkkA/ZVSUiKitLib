import { createContext } from "react";
import type { StyleThemePalette } from "../providers/StyleProvider";
import type { ColorVariantsBase } from "../ui/_shared/types";

export type ToastInput = {
    title: string;
    description?: string;
    durationMs?: number;
};

export type ToastContextValue = {
    push: (type: ColorVariantsBase, input: ToastInput) => void;
    primary: (input: ToastInput) => void;
    secondary: (input: ToastInput) => void;
    tertiary: (input: ToastInput) => void;
    info: (input: ToastInput) => void;
    warning: (input: ToastInput) => void;
    success: (input: ToastInput) => void;
    danger: (input: ToastInput) => void;
};

type StyleContextValue = {
    palette: StyleThemePalette;
    changeTheme: (palette: StyleThemePalette) => void;
    resetTheme: () => void;
};

export const StyleContext = createContext<StyleContextValue | null>(null);
export const ToastContext = createContext<ToastContextValue | null>(null);

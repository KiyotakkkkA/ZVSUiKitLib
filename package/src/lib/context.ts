import { createContext } from "react";
import type { StyleThemePalette } from "../providers/StyleProvider";

export type ToastType = "normal" | "info" | "warning" | "success" | "danger";

export type ToastInput = {
    title: string;
    description?: string;
    durationMs?: number;
};

export type ToastContextValue = {
    push: (type: ToastType, input: ToastInput) => void;
    normal: (input: ToastInput) => void;
    info: (input: ToastInput) => void;
    warning: (input: ToastInput) => void;
    success: (input: ToastInput) => void;
    danger: (input: ToastInput) => void;
};

type StyleContextValue = {
    changeTheme: (palette: StyleThemePalette) => void;
};

export const StyleContext = createContext<StyleContextValue | null>(null);
export const ToastContext = createContext<ToastContextValue | null>(null);

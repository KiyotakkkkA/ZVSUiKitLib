import { createContext } from "react";
import type { ZvsDictionary } from "../locale/dictionary";
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

export const LocaleContext = createContext<ZvsDictionary | null>(null);
export const ToastContext = createContext<ToastContextValue | null>(null);

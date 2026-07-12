import { createContext, useContext } from "react";
import type { BooleanModel } from "./types";

export type InputCheckBoxGroupContextValue = {
    model: BooleanModel;
    disabled: boolean;
    toggle: (key: string) => void;
};

export const InputCheckBoxGroupContext =
    createContext<InputCheckBoxGroupContextValue | null>(null);

export const useInputCheckBoxGroup = () =>
    useContext(InputCheckBoxGroupContext);

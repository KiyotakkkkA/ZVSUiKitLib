import { createContext, useContext } from "react";
import type { BooleanModel } from "../InputCheckBoxGroup";

export type InputRadioGroupContextValue = {
    model: BooleanModel;
    disabled: boolean;
    name: string;
    select: (key: string) => void;
};

export const InputRadioGroupContext =
    createContext<InputRadioGroupContextValue | null>(null);

export const useInputRadioGroup = () => useContext(InputRadioGroupContext);

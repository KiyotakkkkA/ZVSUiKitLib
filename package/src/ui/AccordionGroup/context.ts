import { createContext, useContext } from "react";

export type AccordionGroupContextValue = {
    /** Registers an accordion close handler and returns the unregister callback. */
    register: (id: string, close: () => void) => () => void;
    /** Notifies the group that the accordion with this id was opened. */
    notifyOpen: (id: string) => void;
};

export const AccordionGroupContext =
    createContext<AccordionGroupContextValue | null>(null);

export const useAccordionGroup = () => useContext(AccordionGroupContext);

import type {
    Dispatch,
    PropsWithChildren,
    SetStateAction,
} from "react";
import type { ButtonClassName, DivClassName } from "../_shared/types";

export type AccordionProps = PropsWithChildren<{
    defaultOpen?: boolean;
    className?: DivClassName;
}>;

export type AccordionSummaryProps = PropsWithChildren<{
    className?: ButtonClassName;
}>;

export type AccordionContentProps = PropsWithChildren<{
    className?: DivClassName;
}>;

export type AccordionContextValue = {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
};

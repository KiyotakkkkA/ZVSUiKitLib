import type {
    ComponentPropsWithoutRef,
    Dispatch,
    PropsWithChildren,
    SetStateAction,
} from "react";

type DivClassName = ComponentPropsWithoutRef<"div">["className"];
type ButtonClassName = ComponentPropsWithoutRef<"button">["className"];

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

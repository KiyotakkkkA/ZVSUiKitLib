import type {
    ComponentPropsWithoutRef,
    Dispatch,
    PropsWithChildren,
    SetStateAction,
} from "react";

type DivClassName = ComponentPropsWithoutRef<"div">["className"];
type ButtonClassName = ComponentPropsWithoutRef<"button">["className"];

export type AccordeonProps = PropsWithChildren<{
    defaultOpen?: boolean;
    className?: DivClassName;
}>;

export type AccordeonSummaryProps = PropsWithChildren<{
    className?: ButtonClassName;
}>;

export type AccordeonContentProps = PropsWithChildren<{
    className?: DivClassName;
}>;

export type AccordeonContextValue = {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
};

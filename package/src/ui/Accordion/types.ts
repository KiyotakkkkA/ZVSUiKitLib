import type { Dispatch, PropsWithChildren, SetStateAction } from "react";
import type { ButtonClassName, DivClassName } from "../_shared/types";

export type AccordionProps = PropsWithChildren<{
    /** Sets the initial expanded state of the uncontrolled accordion. */
    defaultOpen?: boolean;
    /** Applies CSS classes to the accordion root element. */
    className?: DivClassName;
}>;

export type AccordionSummaryProps = PropsWithChildren<{
    /** Applies CSS classes to the summary trigger button. */
    className?: ButtonClassName;
}>;

export type AccordionContentProps = PropsWithChildren<{
    /** Applies CSS classes to the collapsible content container. */
    className?: DivClassName;
}>;

export type AccordionContextValue = {
    /** Indicates whether the accordion content is expanded. */
    isOpen: boolean;
    /** Updates the accordion expanded state. */
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    /** Identifies the collapsible content region. */
    contentId: string;
    /** Identifies the summary trigger that labels the content region. */
    summaryId: string;
};

import styles from "./Accordion.module.css";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Icon } from "../_shared/icons";
import { cn } from "../../lib/utils";
import type {
    AccordionContentProps,
    AccordionContextValue,
    AccordionProps,
    AccordionSummaryProps,
} from "./types";

const AccordionContext = createContext<AccordionContextValue | null>(null);

function useAccordionContext() {
    const context = useContext(AccordionContext);

    if (!context) {
        throw new Error(
            "Accordion.Summary и Accordion.Content должны использоваться внутри Accordion.",
        );
    }

    return context;
}

function AccordionRoot({
    defaultOpen = false,
    className,
    children,
}: AccordionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <AccordionContext.Provider value={{ isOpen, setIsOpen }}>
            <div
                className={cn(
                    styles.s0,
                    className,
                )}
            >
                {children}
            </div>
        </AccordionContext.Provider>
    );
}

function AccordionSummary({ className, children }: AccordionSummaryProps) {
    const { isOpen, setIsOpen } = useAccordionContext();

    return (
        <button
            type="button"
            className={cn(
                styles.s1,
                className,
            )}
            onClick={() => setIsOpen((prev) => !prev)}
        >
            <span className={styles.s2}>{children}</span>
            <span
                className={cn(
                    styles.s3,
                    isOpen ? styles.s4 : styles.s5,
                )}
                aria-hidden
            >
                <Icon icon="mdi:chevron-down" width={16} height={16} />
            </span>
        </button>
    );
}

function AccordionContent({ className, children }: AccordionContentProps) {
    const { isOpen } = useAccordionContext();
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
        if (!contentRef.current) return;

        const el = contentRef.current;

        const updateHeight = () => {
            const next = el.scrollHeight;
            setContentHeight((prev) => (prev === next ? prev : next));
        };

        updateHeight();

        const observer = new ResizeObserver(updateHeight);
        observer.observe(el);

        return () => observer.disconnect();
    }, [isOpen]);

    return (
        <div
            className={styles.s6}
            style={{ maxHeight: isOpen ? `${contentHeight + 1}px` : "0px" }}
        >
            <div
                ref={contentRef}
                className={cn(
                    styles.s7,
                    className,
                )}
            >
                {children}
            </div>
        </div>
    );
}

export const Accordion = Object.assign(AccordionRoot, {
    Summary: AccordionSummary,
    Content: AccordionContent,
});

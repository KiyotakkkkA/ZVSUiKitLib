import styles from "./Accordion.module.css";
import {
    createContext,
    useContext,
    useEffect,
    useId,
    useRef,
    useState,
} from "react";
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
    ref,
}: AccordionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const contentId = useId();
    const summaryId = useId();

    return (
        <AccordionContext.Provider
            value={{ isOpen, setIsOpen, contentId, summaryId }}
        >
            <div ref={ref} className={cn(styles.s0, className)}>
                {children}
            </div>
        </AccordionContext.Provider>
    );
}

function AccordionSummary({ className, children }: AccordionSummaryProps) {
    const { isOpen, setIsOpen, contentId, summaryId } = useAccordionContext();

    return (
        <button
            type="button"
            id={summaryId}
            aria-expanded={isOpen}
            aria-controls={contentId}
            className={cn(styles.s1, className)}
            onClick={() => setIsOpen((prev) => !prev)}
        >
            <span className={styles.s2}>{children}</span>
            <span
                className={cn(styles.s3, isOpen ? styles.s4 : styles.s5)}
                aria-hidden
            >
                <Icon icon="chevron-down" width={16} height={16} />
            </span>
        </button>
    );
}

function AccordionContent({ className, children }: AccordionContentProps) {
    const { isOpen, contentId, summaryId } = useAccordionContext();
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
            id={contentId}
            role="region"
            aria-labelledby={summaryId}
            inert={!isOpen}
            className={styles.s6}
            style={{ maxHeight: isOpen ? `${contentHeight + 1}px` : "0px" }}
        >
            <div ref={contentRef} className={cn(styles.s7, className)}>
                {children}
            </div>
        </div>
    );
}

export const Accordion = Object.assign(AccordionRoot, {
    Summary: AccordionSummary,
    Content: AccordionContent,
});

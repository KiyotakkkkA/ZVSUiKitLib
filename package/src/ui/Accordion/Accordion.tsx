import {
    createContext,
    useContext,
    useEffect,
    useId,
    useRef,
    useState,
    type Dispatch,
    type SetStateAction,
} from "react";
import { Icon } from "../_shared/icons";
import { useAccordionGroup } from "../AccordionGroup/context";
import { cn } from "../../lib/utils";
import type {
    AccordionContentProps,
    AccordionContextValue,
    AccordionPreset,
    AccordionProps,
    AccordionSummaryProps,
} from "./types";

const AccordionContext = createContext<AccordionContextValue | null>(null);

const presetClasses: Record<
    AccordionPreset,
    { root: string; summary: string; content: string }
> = {
    solid: {
        root: "rounded-xl border border-main-700/70 bg-main-900/50",
        summary: "px-2.5 py-2",
        content: "border-t border-main-700/70 px-2.5 py-2",
    },
    ghost: {
        root: "rounded-lg",
        summary: "px-1 py-1",
        content: "px-1 pb-1.5 pt-0.5",
    },
};

function useAccordionContext() {
    const context = useContext(AccordionContext);

    if (!context) {
        throw new Error(
            "Accordion.Summary and Accordion.Content must be used inside Accordion.",
        );
    }

    return context;
}

function AccordionRoot({
    defaultOpen = false,
    preset = "solid",
    className,
    children,
    ref,
}: AccordionProps) {
    const [isOpen, setLocalOpen] = useState(defaultOpen);
    const contentId = useId();
    const summaryId = useId();
    const group = useAccordionGroup();

    useEffect(() => {
        if (!group) return;

        return group.register(contentId, () => setLocalOpen(false));
    }, [group, contentId]);

    const setIsOpen: Dispatch<SetStateAction<boolean>> = (action) => {
        const next = typeof action === "function" ? action(isOpen) : action;

        setLocalOpen(next);
        if (next) group?.notifyOpen(contentId);
    };

    return (
        <AccordionContext.Provider
            value={{ isOpen, setIsOpen, contentId, summaryId, preset }}
        >
            <div
                ref={ref}
                className={cn(presetClasses[preset].root, className)}
            >
                {children}
            </div>
        </AccordionContext.Provider>
    );
}

function AccordionSummary({ className, children }: AccordionSummaryProps) {
    const { isOpen, setIsOpen, contentId, summaryId, preset } =
        useAccordionContext();

    return (
        <button
            type="button"
            id={summaryId}
            aria-expanded={isOpen}
            aria-controls={contentId}
            className={cn(
                "flex w-full cursor-pointer items-center justify-between gap-2 text-left",
                presetClasses[preset].summary,
                className,
            )}
            onClick={() => setIsOpen((prev) => !prev)}
        >
            <span className={"min-w-0 flex-1"}>{children}</span>
            <span
                className={cn(
                    "shrink-0 text-main-400 transition-transform duration-300",
                    isOpen ? "rotate-180" : "rotate-0",
                )}
                aria-hidden
            >
                <Icon icon="chevron-down" width={16} height={16} />
            </span>
        </button>
    );
}

function AccordionContent({ className, children }: AccordionContentProps) {
    const { isOpen, contentId, summaryId, preset } = useAccordionContext();
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
            className={
                "overflow-hidden transition-all duration-300 ease-in-out"
            }
            style={{ maxHeight: isOpen ? `${contentHeight + 1}px` : "0px" }}
        >
            <div
                ref={contentRef}
                className={cn(presetClasses[preset].content, className)}
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

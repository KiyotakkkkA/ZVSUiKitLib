import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { cn } from "../../lib/utils";
import type {
    AccordeonContentProps,
    AccordeonContextValue,
    AccordeonProps,
    AccordeonSummaryProps,
} from "./types";

const AccordeonContext = createContext<AccordeonContextValue | null>(null);

function useAccordeonContext() {
    const context = useContext(AccordeonContext);

    if (!context) {
        throw new Error(
            "Accordeon.Summary и Accordeon.Content должны использоваться внутри Accordeon.",
        );
    }

    return context;
}

function AccordeonRoot({
    defaultOpen = false,
    className,
    children,
}: AccordeonProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <AccordeonContext.Provider value={{ isOpen, setIsOpen }}>
            <div
                className={cn(
                    "rounded-xl border border-main-700/70 bg-main-900/50",
                    className,
                )}
            >
                {children}
            </div>
        </AccordeonContext.Provider>
    );
}

function AccordeonSummary({ className, children }: AccordeonSummaryProps) {
    const { isOpen, setIsOpen } = useAccordeonContext();

    return (
        <button
            type="button"
            className={cn(
                "flex w-full cursor-pointer items-center justify-between gap-2 px-2.5 py-2 text-left",
                className,
            )}
            onClick={() => setIsOpen((prev) => !prev)}
        >
            <span className="min-w-0 flex-1">{children}</span>
            <span
                className={cn(
                    "shrink-0 text-main-400 transition-transform duration-300",
                    isOpen ? "rotate-180" : "rotate-0",
                )}
                aria-hidden
            >
                <Icon icon="mdi:chevron-down" width={16} height={16} />
            </span>
        </button>
    );
}

function AccordeonContent({ className, children }: AccordeonContentProps) {
    const { isOpen } = useAccordeonContext();
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
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{ maxHeight: isOpen ? `${contentHeight + 1}px` : "0px" }}
        >
            <div
                ref={contentRef}
                className={cn(
                    "border-t border-main-700/70 px-2.5 py-2",
                    className,
                )}
            >
                {children}
            </div>
        </div>
    );
}

export const Accordeon = Object.assign(AccordeonRoot, {
    Summary: AccordeonSummary,
    Content: AccordeonContent,
});

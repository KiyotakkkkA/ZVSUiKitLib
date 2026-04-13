import {
    createContext,
    type Dispatch,
    type SetStateAction,
    type PropsWithChildren,
    useContext,
    useEffect,
    useRef,
    useState,
    type ReactNode,
} from "react";
import { cn } from "../lib/utils";

type AccordeonProps = PropsWithChildren<{
    defaultOpen?: boolean;
    className?: string;
}>;

type AccordeonSummaryProps = PropsWithChildren<{
    className?: string;
}>;

type AccordeonContentProps = PropsWithChildren<{
    className?: string;
}>;

type AccordeonContextValue = {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
};

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
    const { setIsOpen } = useAccordeonContext();

    return (
        <button
            type="button"
            className={cn("w-full cursor-pointer px-2.5 py-2", className)}
            onClick={() => setIsOpen((prev) => !prev)}
        >
            {children}
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

type AccordeonCompound = {
    (props: AccordeonProps): ReactNode;
    Summary: (props: AccordeonSummaryProps) => ReactNode;
    Content: (props: AccordeonContentProps) => ReactNode;
};

export const Accordeon = Object.assign(AccordeonRoot, {
    Summary: AccordeonSummary,
    Content: AccordeonContent,
}) as AccordeonCompound;

export type { AccordeonContentProps, AccordeonProps, AccordeonSummaryProps };

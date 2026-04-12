import {
    type PropsWithChildren,
    type ReactNode,
    useEffect,
    useRef,
    useState,
} from "react";
import { cn } from "../lib/utils";

type AccordeonProps = PropsWithChildren<{
    title: string;
    subtitle?: string;
    defaultOpen?: boolean;
    className?: string;
    titleIcon?: ReactNode;
    headerClassName?: string;
    contentClassName?: string;
    rightSlot?: ReactNode;
}>;

export function Accordeon({
    title,
    subtitle,
    defaultOpen = false,
    className,
    titleIcon,
    headerClassName,
    contentClassName,
    rightSlot,
    children,
}: AccordeonProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);
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
            className={cn(
                "rounded-xl border border-main-700/70 bg-main-900/50",
                className,
            )}
        >
            <button
                type="button"
                className={cn(
                    "w-full cursor-pointer px-2.5 py-2",
                    headerClassName,
                )}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <div className="flex items-center justify-between gap-3">
                    <div className="flex flex-col items-start">
                        <div className="flex items-center gap-2">
                            {titleIcon && (
                                <span className="text-main-300">
                                    {titleIcon}
                                </span>
                            )}
                            <p className="text-xs font-semibold text-main-100">
                                {title}
                            </p>
                        </div>
                        {subtitle && (
                            <p className="mt-1 text-[11px] text-main-400 text-left">
                                {subtitle}
                            </p>
                        )}
                    </div>
                    <span className="flex items-center gap-2">
                        {rightSlot}
                        <span
                            className={cn(
                                "text-main-400 transition-transform duration-300",
                                isOpen ? "rotate-180" : "rotate-0",
                            )}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-4 w-4"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.108l3.71-3.877a.75.75 0 1 1 1.08 1.04l-4.25 4.44a.75.75 0 0 1-1.08 0l-4.25-4.44a.75.75 0 0 1 .02-1.06Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </span>
                </div>
            </button>

            <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: isOpen ? `${contentHeight + 1}px` : "0px" }}
            >
                <div
                    ref={contentRef}
                    className={cn(
                        "border-t border-main-700/70 px-2.5 py-2",
                        contentClassName,
                    )}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}

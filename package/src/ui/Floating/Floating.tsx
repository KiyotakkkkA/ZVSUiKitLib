"use client";

import { createContext, useContext, useMemo } from "react";
import { cn } from "../../lib/utils";
import type {
    FloatingContentProps,
    FloatingContextValue,
    FloatingProps,
    FloatingTriggerProps,
} from "./types";
import type { PositionAnchor } from "../..";

const panelPositionByAnchor: Record<PositionAnchor, string> = {
    "top-left": "bottom-full left-0 mb-2 origin-bottom-left",
    "top-center": "bottom-full left-1/2 mb-2 -translate-x-1/2 origin-bottom",
    "top-right": "bottom-full right-0 mb-2 origin-bottom-right",
    "bottom-left": "top-full left-0 mt-2 origin-top-left",
    "bottom-center": "top-full left-1/2 mt-2 -translate-x-1/2 origin-top",
    "bottom-right": "top-full right-0 mt-2 origin-top-right",
};

const FloatingContext = createContext<FloatingContextValue | null>(null);

function useFloatingContext() {
    const context = useContext(FloatingContext);

    if (!context) {
        throw new Error(
            "Floating.Trigger и Floating.Content должны использоваться внутри Floating.",
        );
    }

    return context;
}

function FloatingRoot({
    children,
    anchor = "top-right",
    className,
    ...props
}: FloatingProps) {
    const contextValue = useMemo(() => ({ anchor }), [anchor]);

    return (
        <FloatingContext.Provider value={contextValue}>
            <div
                className={cn("group relative inline-flex w-fit", className)}
                {...props}
            >
                {children}
            </div>
        </FloatingContext.Provider>
    );
}

function FloatingTrigger({
    children,
    className,
    ...props
}: FloatingTriggerProps) {
    useFloatingContext();

    return (
        <div className={cn("inline-flex w-fit", className)} {...props}>
            {children}
        </div>
    );
}

function FloatingContent({
    children,
    className,
    rounded = "rounded-lg",
    ...props
}: FloatingContentProps) {
    const { anchor } = useFloatingContext();

    return (
        <div
            className={cn(
                "pointer-events-none invisible absolute z-40 isolate overflow-hidden border border-main-700/80",
                `zvs-${rounded}`,
                "bg-main-900/95 p-3 opacity-0 transition-all duration-150",
                "group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100",
                panelPositionByAnchor[anchor],
                className,
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export const Floating = Object.assign(FloatingRoot, {
    Trigger: FloatingTrigger,
    Content: FloatingContent,
});

"use client";

import styles from "./Floating.module.css";

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
    "top-left": styles.topLeft,
    "top-center": styles.topCenter,
    "top-right": styles.topRight,
    "bottom-left": styles.bottomLeft,
    "bottom-center": styles.bottomCenter,
    "bottom-right": styles.bottomRight,
};

const FloatingContext = createContext<FloatingContextValue | null>(null);

function useFloatingContext() {
    const context = useContext(FloatingContext);

    if (!context) {
        throw new Error(
            "Floating.Trigger and Floating.Content must be used inside Floating.",
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
            <div className={cn(styles.s0, className)} {...props}>
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
        <div className={cn(styles.s1, className)} {...props}>
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
                styles.s2,
                `zvs-${rounded}`,
                styles.s3,
                styles.s4,
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

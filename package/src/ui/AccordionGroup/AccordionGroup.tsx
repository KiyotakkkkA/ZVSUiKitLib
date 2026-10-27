"use client";

import { useMemo, useRef } from "react";
import { cn } from "../../lib/utils";
import type { AccordionGroupProps } from "./types";
import {
    AccordionGroupContext,
    type AccordionGroupContextValue,
} from "./context";

export function AccordionGroup({
    showMode = "multiple",
    className,
    children,
    ...props
}: AccordionGroupProps) {
    const closersRef = useRef(new Map<string, () => void>());

    const value = useMemo<AccordionGroupContextValue>(
        () => ({
            register: (id, close) => {
                closersRef.current.set(id, close);

                return () => {
                    closersRef.current.delete(id);
                };
            },
            notifyOpen: (id) => {
                if (showMode !== "only-one") return;

                closersRef.current.forEach((close, key) => {
                    if (key !== id) close();
                });
            },
        }),
        [showMode],
    );

    return (
        <AccordionGroupContext.Provider value={value}>
            <div {...props} className={cn("flex flex-col gap-2", className)}>
                {children}
            </div>
        </AccordionGroupContext.Provider>
    );
}

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Ref, RefObject } from "react";

/**
 * Joins class names and resolves conflicting Tailwind utilities in favour of
 * the last one. This is what lets a caller's `className` override a
 * component's own classes: `cn("px-2 py-1", "p-3")` returns `"p-3"`, with no
 * `!important` and no cascade involved.
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Combines several refs into one callback ref, so a component can keep an
 * internal ref and still hand the same node to the caller.
 */
export function mergeRefs<T>(...refs: Array<Ref<T> | undefined>) {
    return (node: T | null) => {
        for (const ref of refs) {
            if (typeof ref === "function") {
                ref(node);
            } else if (ref) {
                (ref as RefObject<T | null>).current = node;
            }
        }
    };
}

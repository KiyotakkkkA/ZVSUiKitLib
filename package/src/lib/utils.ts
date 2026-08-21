import { type ClassValue, clsx } from "clsx";
import type { Ref, RefObject } from "react";

export function cn(...inputs: ClassValue[]) {
    return clsx(inputs);
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

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Ref, RefObject } from "react";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

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

import { cn } from "../../lib/utils";
import type { CodeProps } from "./types";
export function Code({
    children,
    block = false,
    className,
    ...props
}: CodeProps) {
    if (block)
        return (
            <pre
                className={cn(
                    "zvs-scroll-area overflow-x-auto rounded-lg border border-main-700 bg-main-900 px-4 py-3 font-mono text-sm leading-6 text-main-300",
                    className,
                )}
                {...props}
            >
                <code>{children}</code>
            </pre>
        );
    return (
        <code
            className={cn(
                "rounded bg-main-800 px-1.5 py-0.5 font-mono text-[0.875em] text-main-200",
                className,
            )}
            {...props}
        >
            {children}
        </code>
    );
}

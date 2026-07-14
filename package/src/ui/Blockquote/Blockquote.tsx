import { cn } from "../../lib/utils";
import type { BlockquoteProps } from "./types";
export function Blockquote({
    children,
    cite,
    className,
    ...props
}: BlockquoteProps) {
    return (
        <blockquote
            className={cn(
                "border-l-2 border-accent-medium pl-5 text-lg leading-8 text-main-200",
                className,
            )}
            {...props}
        >
            <div>{children}</div>
            {cite && (
                <footer className="mt-3 text-xs not-italic text-main-500">
                    {cite}
                </footer>
            )}
        </blockquote>
    );
}

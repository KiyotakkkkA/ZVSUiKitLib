import { cn } from "../../lib/utils";
import type { KbdProps } from "./types";
export function Kbd({ className, ...props }: KbdProps) {
    return (
        <kbd
            className={cn(
                "inline-flex min-h-6 items-center rounded-md border border-main-600 bg-main-800 px-1.5 font-mono text-xs font-medium text-main-200 shadow-[inset_0_-1px_0_rgb(255_255_255/0.12)]",
                className,
            )}
            {...props}
        />
    );
}

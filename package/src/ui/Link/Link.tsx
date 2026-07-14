import { cn } from "../../lib/utils";
import type { LinkProps } from "./types";
export function Link({ className, ...props }: LinkProps) {
    return (
        <a
            className={cn(
                "font-medium text-accent-medium underline decoration-accent-medium/35 underline-offset-4 transition-colors hover:text-accent-light hover:decoration-current focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-medium/40",
                className,
            )}
            {...props}
        />
    );
}

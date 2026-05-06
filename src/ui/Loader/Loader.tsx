import { cn } from "../../lib/utils";
import type { LoaderProps } from "./types";

export function Loader({ className }: LoaderProps) {
    return (
        <div
            className={cn(
                "inline-block h-5 w-5 animate-spin rounded-full border-2",
                "border-main-300/30 border-t-main-100",
                className,
            )}
            role="status"
            aria-label="Loading"
        />
    );
}

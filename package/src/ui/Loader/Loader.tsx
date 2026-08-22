import { cn } from "../../lib/utils";
import { defaultDictionary } from "../../locale/dictionary";
import type { LoaderProps } from "./types";

export function Loader({
    className,
    label = defaultDictionary.loader.label,
    ref,
}: LoaderProps) {
    return (
        <div
            ref={ref}
            className={cn(
                "inline-block h-5 w-5 animate-spin rounded-full border-2",
                "border-main-300/30 border-t-main-100",
                className,
            )}
            role="status"
            aria-label={label}
        />
    );
}

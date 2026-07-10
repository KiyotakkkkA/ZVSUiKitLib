import { forwardRef } from "react";
import { cn } from "../../lib/utils";
import type { InputBigProps } from "./types";

export const InputBig = forwardRef<HTMLTextAreaElement, InputBigProps>(
    ({ className, ...props }, ref) => {
        return (
            <textarea
                ref={ref}
                className={cn(
                    "h-12 w-full resize-none rounded-lg py-3 text-md outline-none transition-colors",
                    "focus-visible:border-main-500/70 focus-visible:ring-2 focus-visible:ring-main-500/25",
                    "bg-main-800 border border-main-700 placeholder:text-main-500 text-main-100",
                    className,
                )}
                {...props}
            />
        );
    },
);

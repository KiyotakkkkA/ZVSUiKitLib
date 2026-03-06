import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "./lib/utils";

type InputBigProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const InputBig = forwardRef<HTMLTextAreaElement, InputBigProps>(
    ({ className, ...props }, ref) => {
        return (
            <textarea
                ref={ref}
                className={cn(
                    "h-12 w-full resize-none rounded-full py-3 text-md outline-none transition-colors",
                    "focus-visible:border-main-500/70 focus-visible:ring-2 focus-visible:ring-main-500/25",
                    className,
                )}
                {...props}
            />
        );
    },
);

import { type ReactNode } from "react";
import { cn } from "../lib/utils";

type FloatingAnchor = "top-left" | "top-right" | "bottom-left" | "bottom-right";

type FloatingProps = {
    children: ReactNode;
    content: ReactNode;
    anchor?: FloatingAnchor;
    className?: string;
    classNames?: {
        panel?: string;
        content?: string;
    };
};

const panelPositionByAnchor: Record<FloatingAnchor, string> = {
    "top-left": "bottom-full left-0 mb-2 origin-bottom-left",
    "top-right": "bottom-full right-0 mb-2 origin-bottom-right",
    "bottom-left": "top-full left-0 mt-2 origin-top-left",
    "bottom-right": "top-full right-0 mt-2 origin-top-right",
};

export function Floating({
    children,
    content,
    anchor = "top-right",
    className,
    classNames,
}: FloatingProps) {
    return (
        <div className={cn("group relative inline-flex w-fit", className)}>
            {children}
            <div
                className={cn(
                    "pointer-events-none invisible absolute z-40 rounded-xl border border-main-700/80",
                    "bg-main-900/95 p-3 opacity-0 transition-all duration-150",
                    "group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100",
                    panelPositionByAnchor[anchor],
                    classNames?.panel,
                )}
            >
                <div className={classNames?.content}>{content}</div>
            </div>
        </div>
    );
}

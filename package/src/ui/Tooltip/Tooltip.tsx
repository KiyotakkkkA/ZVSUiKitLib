import type { PositionAnchor } from "../..";
import { cn } from "../../lib/utils";
import type { TooltipProps } from "./types";

const panelPositionByPlacement: Record<PositionAnchor, string> = {
    "top-left": "bottom-full left-0 mb-2",
    "top-center": "bottom-full left-1/2 mb-2 -translate-x-1/2",
    "top-right": "bottom-full right-0 mb-2",
    "bottom-left": "top-full left-0 mt-2",
    "bottom-center": "top-full left-1/2 mt-2 -translate-x-1/2",
    "bottom-right": "top-full right-0 mt-2",
};

const arrowPositionByPlacement: Record<PositionAnchor, string> = {
    "top-left": "top-full left-5 -translate-y-1/2",
    "top-center": "top-full left-1/2 -translate-x-1/2 -translate-y-1/2",
    "top-right": "top-full right-5 -translate-y-1/2",
    "bottom-left": "bottom-full left-5 translate-y-1/2",
    "bottom-center": "bottom-full left-1/2 -translate-x-1/2 translate-y-1/2",
    "bottom-right": "bottom-full right-5 translate-y-1/2",
};

export function Tooltip({
    children,
    label,
    placement = "top-center",
    className,
    rounded = "rounded-lg",
}: TooltipProps) {
    return (
        <span className="group relative inline-flex w-fit">
            {children}
            <span
                role="tooltip"
                className={cn(
                    "pointer-events-none invisible absolute z-50 max-w-xs whitespace-nowrap",
                    `zvs-${rounded}`,
                    "bg-main-100 px-2.5 py-1.5 text-xs font-medium text-main-900 shadow-lg",
                    "opacity-0 transition-opacity duration-150",
                    "group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100",
                    panelPositionByPlacement[placement],
                    className,
                )}
            >
                {label}
                <span
                    className={cn(
                        "absolute h-2 w-2 rotate-45 rounded-[1px] bg-main-100",
                        arrowPositionByPlacement[placement],
                    )}
                    aria-hidden
                />
            </span>
        </span>
    );
}

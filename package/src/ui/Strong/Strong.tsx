import { cn } from "../../lib/utils";
import type { StrongProps } from "./types";
export function Strong({ className, ...props }: StrongProps) {
    return (
        <strong
            className={cn("font-semibold text-main-100", className)}
            {...props}
        />
    );
}

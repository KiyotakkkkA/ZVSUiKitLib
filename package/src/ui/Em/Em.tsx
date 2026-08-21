import { cn } from "../../lib/utils";
import type { EmProps } from "./types";
export function Em({ className, ...props }: EmProps) {
    return <em className={cn("italic text-main-100", className)} {...props} />;
}

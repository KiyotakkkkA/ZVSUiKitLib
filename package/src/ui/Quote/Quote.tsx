import { cn } from "../../lib/utils";
import type { QuoteProps } from "./types";
export function Quote({ className, ...props }: QuoteProps) { return <q className={cn("text-main-200", className)} {...props} />; }

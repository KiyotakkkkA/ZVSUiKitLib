import { cn } from "../../lib/utils";
import type { TextProps, TextSize, TextTone } from "./types";
const toneClasses: Record<TextTone, string> = { default: "text-main-200", muted: "text-main-400", subtle: "text-main-500" };
const sizeClasses: Record<TextSize, string> = { sm: "text-sm leading-6", md: "text-base leading-7", lg: "text-lg leading-8" };
export function Text({ children, className, tone = "default", size = "md", ...props }: TextProps) { return <p className={cn(sizeClasses[size], toneClasses[tone], className)} {...props}>{children}</p>; }

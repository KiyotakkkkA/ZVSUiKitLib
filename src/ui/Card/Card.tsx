import { cn } from "../../lib/utils";
import type {
    CardProps,
    CardHeaderProps,
    CardTitleProps,
    CardSubtitleProps,
    CardContentProps,
    CardFooterProps,
} from "./types";

function CardRoot({ className, children, ...props }: CardProps) {
    return (
        <section
            className={cn(
                "rounded-2xl border border-main-700/70 bg-main-900/55",
                "text-main-100",
                className,
            )}
            {...props}
        >
            {children}
        </section>
    );
}

function CardHeader({ className, children, ...props }: CardHeaderProps) {
    return (
        <header
            className={cn("border-b border-main-700/70 px-4 py-3", className)}
            {...props}
        >
            {children}
        </header>
    );
}

function CardTitle({ className, children, ...props }: CardTitleProps) {
    return (
        <h3 className={cn("text-sm font-semibold", className)} {...props}>
            {children}
        </h3>
    );
}

function CardSubtitle({ className, children, ...props }: CardSubtitleProps) {
    return (
        <p className={cn("mt-1 text-xs text-main-400", className)} {...props}>
            {children}
        </p>
    );
}

function CardContent({ className, children, ...props }: CardContentProps) {
    return (
        <div className={cn("px-4 py-3", className)} {...props}>
            {children}
        </div>
    );
}

function CardFooter({ className, children, ...props }: CardFooterProps) {
    return (
        <footer
            className={cn("border-t border-main-700/70 px-4 py-3", className)}
            {...props}
        >
            {children}
        </footer>
    );
}

export const Card = Object.assign(CardRoot, {
    Header: CardHeader,
    Title: CardTitle,
    Subtitle: CardSubtitle,
    Content: CardContent,
    Footer: CardFooter,
});

import styles from "./Card.module.css";
import { cn } from "../../lib/utils";
import type {
    CardProps,
    CardHeaderProps,
    CardTitleProps,
    CardSubtitleProps,
    CardContentProps,
    CardFooterProps,
} from "./types";

function CardRoot({
    className,
    children,
    rounded = "rounded-lg",
    ...props
}: CardProps) {
    return (
        <section
            className={cn(
                styles.s0,
                `zvs-${rounded}`,
                styles.s1,
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
            className={cn(styles.s2, className)}
            {...props}
        >
            {children}
        </header>
    );
}

function CardTitle({ className, children, ...props }: CardTitleProps) {
    return (
        <h3 className={cn(styles.s3, className)} {...props}>
            {children}
        </h3>
    );
}

function CardSubtitle({ className, children, ...props }: CardSubtitleProps) {
    return (
        <p className={cn(styles.s4, className)} {...props}>
            {children}
        </p>
    );
}

function CardContent({ className, children, ...props }: CardContentProps) {
    return (
        <div className={cn(styles.s5, className)} {...props}>
            {children}
        </div>
    );
}

function CardFooter({ className, children, ...props }: CardFooterProps) {
    return (
        <footer
            className={cn(styles.s6, className)}
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

import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
    title?: ReactNode;
    subtitle?: ReactNode;
    footer?: ReactNode;
    classNames?: {
        header?: string;
        body?: string;
        footer?: string;
        title?: string;
        subtitle?: string;
    };
};

export function Card({
    title,
    subtitle,
    footer,
    className,
    classNames,
    children,
    ...props
}: CardProps) {
    return (
        <section
            className={cn(
                "rounded-2xl border border-main-700/70 bg-main-900/55",
                "text-main-100",
                className,
            )}
            {...props}
        >
            {(title || subtitle) && (
                <header
                    className={cn(
                        "border-b border-main-700/70 px-4 py-3",
                        classNames?.header,
                    )}
                >
                    {title && (
                        <h3
                            className={cn(
                                "text-sm font-semibold",
                                classNames?.title,
                            )}
                        >
                            {title}
                        </h3>
                    )}
                    {subtitle && (
                        <p
                            className={cn(
                                "mt-1 text-xs text-main-400",
                                classNames?.subtitle,
                            )}
                        >
                            {subtitle}
                        </p>
                    )}
                </header>
            )}

            <div className={cn("px-4 py-3", classNames?.body)}>{children}</div>

            {footer && (
                <footer
                    className={cn(
                        "border-t border-main-700/70 px-4 py-3",
                        classNames?.footer,
                    )}
                >
                    {footer}
                </footer>
            )}
        </section>
    );
}

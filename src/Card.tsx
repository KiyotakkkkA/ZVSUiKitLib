import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "./lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
    title?: ReactNode;
    subtitle?: ReactNode;
    footer?: ReactNode;
    headerClassName?: string;
    bodyClassName?: string;
    footerClassName?: string;
};

export function Card({
    title,
    subtitle,
    footer,
    className,
    headerClassName,
    bodyClassName,
    footerClassName,
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
            {title || subtitle ? (
                <header
                    className={cn(
                        "border-b border-main-700/70 px-4 py-3",
                        headerClassName,
                    )}
                >
                    {title ? (
                        <h3 className="text-sm font-semibold">{title}</h3>
                    ) : null}
                    {subtitle ? (
                        <p className="mt-1 text-xs text-main-400">{subtitle}</p>
                    ) : null}
                </header>
            ) : null}

            <div className={cn("px-4 py-3", bodyClassName)}>{children}</div>

            {footer ? (
                <footer
                    className={cn(
                        "border-t border-main-700/70 px-4 py-3",
                        footerClassName,
                    )}
                >
                    {footer}
                </footer>
            ) : null}
        </section>
    );
}

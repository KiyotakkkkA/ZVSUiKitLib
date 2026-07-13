import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { cx } from "../../molecules/utils";

type TextTone = "default" | "muted" | "subtle";
type TextSize = "sm" | "md" | "lg";

const textToneClasses: Record<TextTone, string> = {
    default: "text-main-200",
    muted: "text-main-400",
    subtle: "text-main-500",
};

const textSizeClasses: Record<TextSize, string> = {
    sm: "text-sm leading-6",
    md: "text-base leading-7",
    lg: "text-lg leading-8",
};

export function TypographyText({
    children,
    className,
    tone = "default",
    size = "md",
    ...props
}: HTMLAttributes<HTMLParagraphElement> & {
    tone?: TextTone;
    size?: TextSize;
}) {
    return (
        <p
            className={cx(
                textSizeClasses[size],
                textToneClasses[tone],
                className,
            )}
            {...props}
        >
            {children}
        </p>
    );
}

const headingClasses = {
    1: "text-5xl leading-[1.08] tracking-[-0.045em]",
    2: "text-4xl leading-[1.12] tracking-[-0.035em]",
    3: "text-3xl leading-tight tracking-[-0.025em]",
    4: "text-2xl leading-tight tracking-[-0.02em]",
    5: "text-xl leading-snug tracking-[-0.015em]",
    6: "text-base leading-snug tracking-[-0.01em]",
} as const;

export function TypographyHeading({
    level = 2,
    children,
    className,
}: {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    children: ReactNode;
    className?: string;
}) {
    const Tag = `h${level}` as "h1";
    return (
        <Tag
            className={cx(
                "font-semibold text-main-100 text-balance",
                headingClasses[level],
                className,
            )}
        >
            {children}
        </Tag>
    );
}

export function TypographyBlockquote({
    children,
    cite,
    className,
    ...props
}: HTMLAttributes<HTMLQuoteElement> & { cite?: ReactNode }) {
    return (
        <blockquote
            className={cx(
                "border-l-2 border-accent-medium pl-5 text-lg leading-8 text-main-200",
                className,
            )}
            {...props}
        >
            <div>{children}</div>
            {cite && (
                <footer className="mt-3 text-xs not-italic text-main-500">
                    {cite}
                </footer>
            )}
        </blockquote>
    );
}

export function TypographyCode({
    children,
    block = false,
    className,
    ...props
}: HTMLAttributes<HTMLElement> & { block?: boolean }) {
    if (block) {
        return (
            <pre
                className={cx(
                    "zvs-scroll-area overflow-x-auto rounded-lg border border-main-700 bg-main-900 px-4 py-3 font-mono text-sm leading-6 text-main-300",
                    className,
                )}
                {...props}
            >
                <code>{children}</code>
            </pre>
        );
    }

    return (
        <code
            className={cx(
                "rounded bg-main-800 px-1.5 py-0.5 font-mono text-[0.875em] text-main-200",
                className,
            )}
            {...props}
        >
            {children}
        </code>
    );
}

export function TypographyEm({
    className,
    ...props
}: HTMLAttributes<HTMLElement>) {
    return <em className={cx("italic text-main-100", className)} {...props} />;
}

export function TypographyKbd({
    className,
    ...props
}: HTMLAttributes<HTMLElement>) {
    return (
        <kbd
            className={cx(
                "inline-flex min-h-6 items-center rounded-md border border-main-600 bg-main-800 px-1.5 font-mono text-xs font-medium text-main-200 shadow-[inset_0_-1px_0_rgb(255_255_255/0.12)]",
                className,
            )}
            {...props}
        />
    );
}

export function TypographyLink({
    className,
    ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
        <a
            className={cx(
                "font-medium text-accent-medium underline decoration-accent-medium/35 underline-offset-4 transition-colors hover:text-accent-light hover:decoration-current focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-medium/40",
                className,
            )}
            {...props}
        />
    );
}

export function TypographyQuote({
    className,
    ...props
}: HTMLAttributes<HTMLQuoteElement>) {
    return <q className={cx("text-main-200", className)} {...props} />;
}

export function TypographyStrong({
    className,
    ...props
}: HTMLAttributes<HTMLElement>) {
    return (
        <strong
            className={cx("font-semibold text-main-100", className)}
            {...props}
        />
    );
}

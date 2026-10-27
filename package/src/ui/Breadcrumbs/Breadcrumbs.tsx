import {
    Children,
    createContext,
    isValidElement,
    useContext,
    type ComponentPropsWithoutRef,
} from "react";
import { cn } from "../../lib/utils";
import { useLocale } from "../../hooks/useLocale";
import type {
    BreadcrumbsProps,
    BreadcrumbsNavProps,
    BreadcrumbsSeparatorProps,
    BreadcrumbsContextValue,
} from "./types";

const BreadcrumbsContext = createContext<BreadcrumbsContextValue | null>(null);

const useBreadcrumbs = () => {
    const context = useContext(BreadcrumbsContext);

    if (!context) {
        throw new Error(
            "Breadcrumbs components must be used inside <Breadcrumbs />",
        );
    }

    return context;
};

const BreadcrumbsRoot = ({
    separator = "/",
    children,
    className,
    ...props
}: BreadcrumbsProps) => {
    const t = useLocale().breadcrumbs;
    const items = Children.toArray(children).filter(isValidElement);

    return (
        <BreadcrumbsContext.Provider value={{ separator }}>
            <nav
                aria-label={t.label}
                className={cn("flex min-w-0 items-center", className)}
                {...props}
            >
                <ol className={"flex min-w-0 items-center gap-1.5"}>
                    {items.map((child, index) => {
                        const isLast = index === items.length - 1;

                        return (
                            <li
                                key={index}
                                className={"flex min-w-0 items-center gap-1.5"}
                            >
                                {child}

                                {!isLast && <BreadcrumbsSeparator />}
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </BreadcrumbsContext.Provider>
    );
};

const BreadcrumbsNav = ({
    label,
    active = false,
    disabled,
    href,
    target,
    rel,
    className,
    onClick,
    ...props
}: BreadcrumbsNavProps) => {
    const classes = cn(
        "min-w-0 max-w-52 truncate rounded-lg px-2 py-1 text-sm",
        "transition-colors duration-200",
        active
            ? "cursor-default text-main-100"
            : "cursor-pointer text-main-400 hover:bg-main-700/60 hover:text-main-100",
        disabled && "pointer-events-none cursor-not-allowed opacity-60",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main-300/50",
        className,
    );

    if (href !== undefined) {
        const isInert = active || disabled;

        return (
            <a
                {...(props as ComponentPropsWithoutRef<"a">)}
                href={isInert ? undefined : href}
                target={isInert ? undefined : target}
                rel={isInert ? undefined : rel}
                aria-current={active ? "page" : undefined}
                aria-disabled={disabled || undefined}
                onClick={isInert ? undefined : onClick}
                className={cn("block", classes)}
            >
                {label}
            </a>
        );
    }

    return (
        <button
            {...props}
            type="button"
            aria-current={active ? "page" : undefined}
            disabled={disabled || active}
            onClick={onClick}
            className={classes}
        >
            {label}
        </button>
    );
};

const BreadcrumbsSeparator = ({
    children,
    className,
    ...props
}: BreadcrumbsSeparatorProps) => {
    const { separator } = useBreadcrumbs();

    return (
        <span
            {...props}
            aria-hidden="true"
            className={cn("select-none text-sm text-main-500", className)}
        >
            {children ?? separator}
        </span>
    );
};

export const Breadcrumbs = Object.assign(BreadcrumbsRoot, {
    Nav: BreadcrumbsNav,
    Separator: BreadcrumbsSeparator,
});

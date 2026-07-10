import { Children, createContext, isValidElement, useContext } from "react";
import { cn } from "../../lib/utils";
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
    const items = Children.toArray(children).filter(isValidElement);

    return (
        <BreadcrumbsContext.Provider value={{ separator }}>
            <nav
                aria-label="Breadcrumb"
                className={cn("flex min-w-0 items-center", className)}
                {...props}
            >
                <ol className="flex min-w-0 items-center gap-1.5">
                    {items.map((child, index) => {
                        const isLast = index === items.length - 1;

                        return (
                            <li
                                key={index}
                                className="flex min-w-0 items-center gap-1.5"
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
    className,
    onClick,
    ...props
}: BreadcrumbsNavProps) => {
    return (
        <button
            {...props}
            type="button"
            aria-current={active ? "page" : undefined}
            disabled={disabled || active}
            onClick={onClick}
            className={cn(
                "min-w-0 max-w-52 truncate rounded-lg px-2 py-1 text-sm",
                "transition-colors duration-200",
                active
                    ? "cursor-default text-main-100"
                    : "cursor-pointer text-main-400 hover:bg-main-700/60 hover:text-main-100",
                disabled && "cursor-not-allowed opacity-60",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main-300/50",
                className,
            )}
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

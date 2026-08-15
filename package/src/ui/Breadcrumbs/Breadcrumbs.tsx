import styles from "./Breadcrumbs.module.css";
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
                className={cn(styles.s0, className)}
                {...props}
            >
                <ol className={styles.s1}>
                    {items.map((child, index) => {
                        const isLast = index === items.length - 1;

                        return (
                            <li key={index} className={styles.s2}>
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
                styles.s3,
                styles.s4,
                active ? styles.s5 : styles.s6,
                disabled && styles.s7,
                styles.s8,
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
            className={cn(styles.s9, className)}
        >
            {children ?? separator}
        </span>
    );
};

export const Breadcrumbs = Object.assign(BreadcrumbsRoot, {
    Nav: BreadcrumbsNav,
    Separator: BreadcrumbsSeparator,
});

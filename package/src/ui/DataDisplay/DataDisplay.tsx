import { cn } from "../../lib/utils";
import "./DataDisplay.css";
import type {
    DataDisplayItemPartProps,
    DataDisplayItemProps,
    DataDisplayProps,
} from "./types";

const DataDisplayRoot = ({
    children,
    bordered = true,
    rounded = "rounded-lg",
    className,
    ...props
}: DataDisplayProps) => {
    return (
        <div
            className={cn(
                "grid min-w-0 gap-2",
                bordered && "border border-main-700/70 bg-main-900/50 p-3",
                bordered && `zvs-${rounded}`,
                className,
            )}
            {...props}
        >
            {children}
        </div>
    );
};

const DataDisplayItem = ({
    children,
    className,
    ...props
}: DataDisplayItemProps) => (
    <div
        className={cn(
            "zvs-data-display-item grid min-w-0 rounded-lg px-2 py-2",
            "transition-colors hover:bg-main-800/40",
            className,
        )}
        {...props}
    >
        {children}
    </div>
);

const DataDisplayItemTopTitle = ({
    children,
    className,
    ...props
}: DataDisplayItemPartProps) => (
    <div
        className={cn(
            "zvs-data-display-item__top-title min-w-0 truncate text-xs font-medium uppercase tracking-wide text-main-500",
            className,
        )}
        {...props}
    >
        {children}
    </div>
);

const DataDisplayItemTopSubTitle = ({
    children,
    className,
    ...props
}: DataDisplayItemPartProps) => (
    <div
        className={cn(
            "zvs-data-display-item__top-subtitle min-w-0 truncate text-sm font-medium text-main-100",
            className,
        )}
        {...props}
    >
        {children}
    </div>
);

const DataDisplayItemTopBadge = ({
    children,
    className,
    ...props
}: DataDisplayItemPartProps) => (
    <div
        className={cn(
            "zvs-data-display-item__top-badge ml-auto shrink-0 text-main-400",
            className,
        )}
        {...props}
    >
        {children}
    </div>
);

const DataDisplayItemContentIcon = ({
    children,
    className,
    ...props
}: DataDisplayItemPartProps) => (
    <div
        className={cn(
            "zvs-data-display-item__icon flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-main-800 text-main-300",
            className,
        )}
        {...props}
    >
        {children}
    </div>
);

const DataDisplayItemContentTitle = ({
    children,
    className,
    ...props
}: DataDisplayItemPartProps) => (
    <div
        className={cn(
            "zvs-data-display-item__content-title min-w-0 truncate text-xs font-medium text-main-200",
            className,
        )}
        {...props}
    >
        {children}
    </div>
);

const DataDisplayItemContentDescription = ({
    children,
    className,
    ...props
}: DataDisplayItemPartProps) => (
    <div
        className={cn(
            "zvs-data-display-item__description min-w-0 text-xs leading-5 text-main-400",
            className,
        )}
        {...props}
    >
        {children}
    </div>
);

const DataDisplayItemContentBadge = ({
    children,
    className,
    ...props
}: DataDisplayItemPartProps) => (
    <div
        className={cn(
            "zvs-data-display-item__badge ml-auto shrink-0 text-main-400",
            className,
        )}
        {...props}
    >
        {children}
    </div>
);

export const DataDisplay = Object.assign(DataDisplayRoot, {
    Item: DataDisplayItem,
    ItemTopTitle: DataDisplayItemTopTitle,
    ItemTopSubTitle: DataDisplayItemTopSubTitle,
    ItemTopBadge: DataDisplayItemTopBadge,
    ItemContentTitle: DataDisplayItemContentTitle,
    ItemContentDescription: DataDisplayItemContentDescription,
    ItemContentIcon: DataDisplayItemContentIcon,
    ItemContentBadge: DataDisplayItemContentBadge,
});

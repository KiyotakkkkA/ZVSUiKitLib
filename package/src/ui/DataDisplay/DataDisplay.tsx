import { cn } from "../../lib/utils";
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
            "grid min-w-0 grid-cols-[auto_minmax(0,1fr)_auto] gap-x-3 rounded-lg px-2 py-2",
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
            "col-start-1 col-end-4 row-start-1 min-w-0 truncate text-xs font-medium uppercase tracking-wide text-main-500",
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
            "col-start-2 row-start-2 mt-0.5 min-w-0 truncate text-sm font-medium text-main-100",
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
            "col-start-1 row-start-2 row-end-5 mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-main-800 text-main-300",
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
            "col-start-2 row-start-3 min-w-0 truncate text-xs font-medium text-main-200",
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
            "col-start-2 col-end-4 row-start-4 min-w-0 text-xs leading-5 text-main-400",
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
            "col-start-3 row-start-2 row-end-5 ml-auto shrink-0 self-center text-main-400",
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
    ItemContentTitle: DataDisplayItemContentTitle,
    ItemContentDescription: DataDisplayItemContentDescription,
    ItemContentIcon: DataDisplayItemContentIcon,
    ItemContentBadge: DataDisplayItemContentBadge,
});

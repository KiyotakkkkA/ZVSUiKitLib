import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "../lib/utils";

type DataDisplayProps = ComponentPropsWithoutRef<"div"> & {
    children: ReactNode;
    bordered?: boolean;
};

type DataDisplayItemProps = ComponentPropsWithoutRef<"div"> & {
    label: ReactNode;
    value?: ReactNode;
    description?: ReactNode;
    icon?: ReactNode;
    rightSlot?: ReactNode;
};

const DataDisplayRoot = ({
    children,
    bordered = true,
    className,
    ...props
}: DataDisplayProps) => {
    return (
        <div
            {...props}
            className={cn(
                "grid min-w-0 gap-2",
                bordered &&
                    "rounded-2xl border border-main-700/70 bg-main-900/50 p-3",
                className,
            )}
        >
            {children}
        </div>
    );
};

const DataDisplayItem = ({
    label,
    value,
    description,
    icon,
    rightSlot,
    className,
    ...props
}: DataDisplayItemProps) => {
    return (
        <div
            {...props}
            className={cn(
                "flex min-w-0 items-start gap-3 rounded-xl px-2 py-2 hover:bg-main-800/40",
                className,
            )}
        >
            {icon && (
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-main-800 text-main-300">
                    {icon}
                </div>
            )}

            <div className="min-w-0 flex-1">
                <div className="truncate text-xs font-medium uppercase tracking-wide text-main-500">
                    {label}
                </div>

                {value && (
                    <div className="mt-0.5 truncate text-sm font-medium text-main-100">
                        {value}
                    </div>
                )}

                {description && (
                    <div className="mt-0.5 line-clamp-2 text-xs leading-5 text-main-400">
                        {description}
                    </div>
                )}
            </div>

            {rightSlot && (
                <div className="ml-auto shrink-0 text-main-400">
                    {rightSlot}
                </div>
            )}
        </div>
    );
};

export const DataDisplay = Object.assign(DataDisplayRoot, {
    Item: DataDisplayItem,
});

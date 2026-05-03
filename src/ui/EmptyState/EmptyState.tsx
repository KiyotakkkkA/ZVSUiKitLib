import { cn } from "../../lib/utils";
import type { EmptyStateProps } from "./types";

export const EmptyState = ({
    icon,
    title,
    description,
    action,
    className,
    classNames,
}: EmptyStateProps) => {
    return (
        <div
            className={cn(
                "flex min-h-52 flex-col items-center justify-center rounded-2xl border border-dashed border-main-700 bg-main-900/40 px-6 py-10 text-center",
                className,
            )}
        >
            {icon && (
                <div
                    className={cn(
                        "mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-main-800 text-main-300",
                        classNames?.icon,
                    )}
                >
                    {icon}
                </div>
            )}

            <div
                className={cn(
                    "text-base font-semibold text-main-100",
                    classNames?.title,
                )}
            >
                {title}
            </div>

            {description && (
                <div
                    className={cn(
                        "mt-1 max-w-md text-sm leading-6 text-main-400",
                        classNames?.description,
                    )}
                >
                    {description}
                </div>
            )}

            {action && (
                <div className={cn("mt-5", classNames?.action)}>{action}</div>
            )}
        </div>
    );
};

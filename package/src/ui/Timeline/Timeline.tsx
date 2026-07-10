import { Icon } from "@iconify/react";
import { cn } from "../../lib/utils";
import type {
    TimelineItemProps,
    TimelineItemSectionProps,
    TimelineProps,
} from "./types";

function TimelineRoot({ children, className }: TimelineProps) {
    return <div className={cn("flex flex-col", className)}>{children}</div>;
}

function TimelineItem({ children, icon, className }: TimelineItemProps) {
    return (
        <div
            className={cn(
                "relative grid grid-cols-[2.25rem_minmax(0,1fr)] gap-4 pb-7 last:pb-0",
                "after:absolute after:bottom-0 after:left-4.5 after:top-8 after:w-px after:bg-main-700 last:after:hidden",
                className,
            )}
        >
            <span className="relative z-10 mt-1 flex h-5 w-5 translate-x-2 items-center justify-center rounded-full bg-main-50 text-main-900">
                <Icon icon={icon} width={13} height={13} aria-hidden />
            </span>
            <div className="min-w-0">{children}</div>
        </div>
    );
}

function TimelineItemTitle({ children, className }: TimelineItemSectionProps) {
    return (
        <h3 className={cn("text-sm font-semibold text-main-50", className)}>
            {children}
        </h3>
    );
}

function TimelineItemSubTitle({
    children,
    className,
}: TimelineItemSectionProps) {
    return (
        <p className={cn("mt-1 text-xs text-main-400", className)}>
            {children}
        </p>
    );
}

function TimelineItemContent({
    children,
    className,
}: TimelineItemSectionProps) {
    return (
        <div className={cn("mt-3 text-sm leading-6 text-main-100", className)}>
            {children}
        </div>
    );
}

export const Timeline = Object.assign(TimelineRoot, {
    Item: TimelineItem,
    ItemTitle: TimelineItemTitle,
    ItemSubTitle: TimelineItemSubTitle,
    ItemContent: TimelineItemContent,
});

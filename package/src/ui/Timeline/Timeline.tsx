import styles from "./Timeline.module.css";
import { Icon } from "../_shared/icons";
import { cn } from "../../lib/utils";
import type {
    TimelineItemProps,
    TimelineItemSectionProps,
    TimelineProps,
} from "./types";

function TimelineRoot({ children, className }: TimelineProps) {
    return <div className={cn(styles.s0, className)}>{children}</div>;
}

function TimelineItem({ children, icon, className }: TimelineItemProps) {
    return (
        <div className={cn(styles.s1, styles.s2, className)}>
            <span className={styles.s3}>
                <Icon icon={icon} width={13} height={13} aria-hidden />
            </span>
            <div className={styles.s4}>{children}</div>
        </div>
    );
}

function TimelineItemTitle({ children, className }: TimelineItemSectionProps) {
    return <h3 className={cn(styles.s5, className)}>{children}</h3>;
}

function TimelineItemSubTitle({
    children,
    className,
}: TimelineItemSectionProps) {
    return <p className={cn(styles.s6, className)}>{children}</p>;
}

function TimelineItemContent({
    children,
    className,
}: TimelineItemSectionProps) {
    return <div className={cn(styles.s7, className)}>{children}</div>;
}

export const Timeline = Object.assign(TimelineRoot, {
    Item: TimelineItem,
    ItemTitle: TimelineItemTitle,
    ItemSubTitle: TimelineItemSubTitle,
    ItemContent: TimelineItemContent,
});

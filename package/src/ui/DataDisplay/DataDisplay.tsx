import styles from "./DataDisplay.module.css";
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
                styles.s0,
                bordered && styles.s1,
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
    <div className={cn(styles.s2, styles.s3, className)} {...props}>
        {children}
    </div>
);

const DataDisplayItemTopTitle = ({
    children,
    className,
    ...props
}: DataDisplayItemPartProps) => (
    <div className={cn(styles.s4, className)} {...props}>
        {children}
    </div>
);

const DataDisplayItemTopSubTitle = ({
    children,
    className,
    ...props
}: DataDisplayItemPartProps) => (
    <div className={cn(styles.s5, className)} {...props}>
        {children}
    </div>
);

const DataDisplayItemTopBadge = ({
    children,
    className,
    ...props
}: DataDisplayItemPartProps) => (
    <div className={cn(styles.s6, className)} {...props}>
        {children}
    </div>
);

const DataDisplayItemContentIcon = ({
    children,
    className,
    ...props
}: DataDisplayItemPartProps) => (
    <div className={cn(styles.s7, className)} {...props}>
        {children}
    </div>
);

const DataDisplayItemContentTitle = ({
    children,
    className,
    ...props
}: DataDisplayItemPartProps) => (
    <div className={cn(styles.s8, className)} {...props}>
        {children}
    </div>
);

const DataDisplayItemContentDescription = ({
    children,
    className,
    ...props
}: DataDisplayItemPartProps) => (
    <div className={cn(styles.s9, className)} {...props}>
        {children}
    </div>
);

const DataDisplayItemContentBadge = ({
    children,
    className,
    ...props
}: DataDisplayItemPartProps) => (
    <div className={cn(styles.s10, className)} {...props}>
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

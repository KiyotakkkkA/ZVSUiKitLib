import styles from "./PrettyBR.module.css";
import { Icon } from "../_shared/icons";
import { cn } from "../../lib/utils";
import type { PrettyBRProps } from "./types";

export const PrettyBR = (props: PrettyBRProps) => {
    const {
        icon,
        label = "New Section",
        size = 16,
        className,
        classNames,
    } = props;
    const resolvedIcon = icon ?? <Icon icon="script" />;

    return (
        <div className={cn(styles.s0, className)}>
            <div className={cn(styles.s1, classNames?.divider)} />
            <span
                className={cn(styles.s2, classNames?.icon)}
                style={{ fontSize: size }}
            >
                {resolvedIcon}
            </span>
            <p className={cn(styles.s3, classNames?.label)}>{label}</p>
            <div className={cn(styles.s4, classNames?.divider)} />
        </div>
    );
};

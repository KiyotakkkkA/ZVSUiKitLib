import styles from "./PrettyBR.module.css";
import { Icon } from "../_shared/icons";
import { cn } from "../../lib/utils";
import type { PrettyBRProps } from "./types";

export const PrettyBR = (props: PrettyBRProps) => {
    const {
        icon = "script",
        label = "New Section",
        size = 16,
        className,
        classNames,
    } = props;

    return (
        <div className={cn(styles.s0, className)}>
            <div className={cn(styles.s1, classNames?.divider)} />
            <Icon
                icon={icon}
                width={size}
                height={size}
                className={cn(styles.s2, classNames?.icon)}
            />
            <p className={cn(styles.s3, classNames?.label)}>{label}</p>
            <div className={cn(styles.s4, classNames?.divider)} />
        </div>
    );
};

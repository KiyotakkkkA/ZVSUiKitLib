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
        ref,
    } = props;
    const resolvedIcon = icon ?? <Icon icon="script" />;

    return (
        <div
            ref={ref}
            className={cn("my-3 flex items-center gap-3 px-1", className)}
        >
            <div
                className={cn(
                    "h-px flex-1 bg-main-600/70",
                    classNames?.divider,
                )}
            />
            <span
                className={cn("text-main-400", classNames?.icon)}
                style={{ fontSize: size }}
            >
                {resolvedIcon}
            </span>
            <p
                className={cn(
                    "text-[10px] uppercase tracking-[0.2em] text-main-400",
                    classNames?.label,
                )}
            >
                {label}
            </p>
            <div
                className={cn(
                    "h-px flex-1 bg-main-600/70",
                    classNames?.divider,
                )}
            />
        </div>
    );
};

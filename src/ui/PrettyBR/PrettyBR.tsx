import { Icon } from "@iconify/react";
import { cn } from "../../lib/utils";
import type { PrettyBRProps } from "./types";

export const PrettyBR = (props: PrettyBRProps) => {
    const {
        icon = "mdi:script",
        label = "New Section",
        size = 16,
        className,
        classNames,
    } = props;

    return (
        <div className={cn("my-3 flex items-center gap-3 px-1", className)}>
            <div
                className={cn(
                    "h-px flex-1 bg-main-600/70",
                    classNames?.divider,
                )}
            />
            <Icon
                icon={icon}
                width={size}
                height={size}
                className={cn("text-main-400", classNames?.icon)}
            />
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

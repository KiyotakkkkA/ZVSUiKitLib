import { Icon } from "@iconify/react";
import { cn } from "../lib/utils";

interface PrettyBRProps {
    icon?: string;
    label?: string;
    size?: number;
    className?: string;
}

export const PrettyBR = (props: PrettyBRProps) => {
    const {
        icon = "mdi:script",
        label = "New Section",
        size = 16,
        className,
    } = props;

    return (
        <div className={cn("my-3 flex items-center gap-3 px-1", className)}>
            <div className="h-px flex-1 bg-main-600/70" />
            <Icon
                icon={icon}
                width={size}
                height={size}
                className="text-main-400"
            />
            <p className="text-[10px] uppercase tracking-[0.2em] text-main-400">
                {label}
            </p>
            <div className="h-px flex-1 bg-main-600/70" />
        </div>
    );
};

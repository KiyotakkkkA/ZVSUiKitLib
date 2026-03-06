import { Icon } from "@iconify/react";
import { cn } from "./lib/utils";

interface PrettyBRProps {
    icon?: string;
    label?: string;
    size?: number;
    className?: string;
}

export const PrettyBR = (props: PrettyBRProps) => {
    return (
        <div
            className={cn("my-3 flex items-center gap-3 px-1", props.className)}
        >
            <div className="h-px flex-1 bg-main-600/70" />
            <Icon
                icon={props.icon || "mdi:script"}
                width={props.size || 16}
                height={props.size || 16}
                className="text-main-400"
            />
            <p className="text-[10px] uppercase tracking-[0.2em] text-main-400">
                {props.label || "New Section"}
            </p>
            <div className="h-px flex-1 bg-main-600/70" />
        </div>
    );
};

import { useState, type ReactNode } from "react";
import { Icon } from "@iconify/react";
import { cn } from "./lib/utils";

type TreeViewProps = {
    children: ReactNode;
    className?: string;
};

type TreeViewCatalogProps = {
    title: string;
    children?: ReactNode;
    defaultOpen?: boolean;
    className?: string;
};

type TreeViewElementProps = {
    label: string;
    description?: string;
    className?: string;
    onClick?: () => void;
};

const TreeViewBase = ({ children, className = "" }: TreeViewProps) => {
    return (
        <div
            className={cn(
                "min-w-0 rounded-2xl border border-main-700/70 bg-main-900/50 p-3",
                className,
            )}
        >
            <div className="space-y-1">{children}</div>
        </div>
    );
};

const TreeViewCatalog = ({
    title,
    children,
    defaultOpen = false,
    className = "",
}: TreeViewCatalogProps) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className={cn("rounded-xl", className)}>
            <button
                type="button"
                className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-main-100 hover:bg-main-800/60 cursor-pointer"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <Icon
                    icon="mdi:chevron-right"
                    width={16}
                    height={16}
                    className={cn(
                        "shrink-0 text-main-300 transition-transform",
                        isOpen ? "rotate-90" : "",
                    )}
                />
                <Icon
                    icon={
                        isOpen
                            ? "mdi:folder-open-outline"
                            : "mdi:folder-outline"
                    }
                    width={16}
                    height={16}
                    className="shrink-0 text-main-300"
                />
                <span className="truncate text-sm font-medium">{title}</span>
            </button>

            {isOpen ? (
                <div className="mt-1 space-y-1 pl-7">{children}</div>
            ) : null}
        </div>
    );
};

const TreeViewElement = ({
    label,
    description,
    className = "",
    onClick,
}: TreeViewElementProps) => {
    return (
        <button
            type="button"
            className={cn(
                "w-full cursor-pointer rounded-lg px-2 py-1.5 hover:bg-main-800/50",
                className,
            )}
            onClick={onClick}
        >
            <div className="flex items-start gap-2">
                <Icon
                    icon="mdi:cog-outline"
                    width={14}
                    height={14}
                    className="mt-0.5 shrink-0 text-main-400"
                />
                <div className="min-w-0">
                    <p className="truncate text-xs font-medium text-main-200 text-left">
                        {label}
                    </p>
                    {description ? (
                        <p className="line-clamp-2 text-[11px] text-main-400 text-left">
                            {description}
                        </p>
                    ) : null}
                </div>
            </div>
        </button>
    );
};

export const TreeView = Object.assign(TreeViewBase, {
    Catalog: TreeViewCatalog,
    Element: TreeViewElement,
});

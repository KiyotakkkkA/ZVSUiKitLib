import { Children, isValidElement, useMemo, useRef, useState } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { Icon } from "@iconify/react";
import { ScrollArea } from "../ScrollArea/ScrollArea";
import { cn } from "../../lib/utils";
import type {
    TreeViewProps,
    TreeViewCatalogProps,
    TreeViewElementProps,
    VirtualizedChildrenListProps,
} from "./types";

const DEFAULT_VIRTUAL_HEIGHT = 360;
const DEFAULT_VIRTUAL_ITEM_SIZE = 34;
const DEFAULT_VIRTUAL_OVERSCAN = 8;

const VirtualizedChildrenList = ({
    children,
    className,
    classNames,
    height,
    estimateSize,
    overscan,
}: VirtualizedChildrenListProps) => {
    const scrollElementRef = useRef<HTMLDivElement>(null);
    const items = useMemo(() => Children.toArray(children), [children]);

    // eslint-disable-next-line react-hooks/incompatible-library
    const virtualizer = useVirtualizer({
        count: items.length,
        getScrollElement: () => scrollElementRef.current,
        estimateSize: () => estimateSize,
        overscan,
        useAnimationFrameWithResizeObserver: true,
        getItemKey: (index) => {
            const item = items[index];

            return isValidElement(item) && item.key != null
                ? String(item.key)
                : index;
        },
    });

    if (items.length === 0) {
        return null;
    }

    return (
        <ScrollArea
            ref={scrollElementRef}
            className={className}
            style={{ height }}
        >
            <div
                className={cn("relative w-full", classNames?.content)}
                style={{ height: virtualizer.getTotalSize() }}
            >
                {virtualizer.getVirtualItems().map((virtualItem) => (
                    <div
                        key={virtualItem.key}
                        ref={virtualizer.measureElement}
                        data-index={virtualItem.index}
                        role="none"
                        className={cn(
                            "absolute left-0 top-0 w-full pb-1",
                            classNames?.item,
                        )}
                        style={{
                            transform: `translateY(${virtualItem.start}px)`,
                        }}
                    >
                        {items[virtualItem.index]}
                    </div>
                ))}
            </div>
        </ScrollArea>
    );
};

const TreeViewBase = ({
    children,
    className,
    virtualized = false,
    height = DEFAULT_VIRTUAL_HEIGHT,
    estimateSize = DEFAULT_VIRTUAL_ITEM_SIZE,
    overscan = DEFAULT_VIRTUAL_OVERSCAN,
    ...props
}: TreeViewProps) => {
    return (
        <div
            {...props}
            role="tree"
            className={cn(
                "min-w-0 rounded-2xl border border-main-700/70 bg-main-900/50 p-3",
                className,
            )}
        >
            {virtualized ? (
                <VirtualizedChildrenList
                    height={height}
                    estimateSize={estimateSize}
                    overscan={overscan}
                >
                    {children}
                </VirtualizedChildrenList>
            ) : (
                <div role="group" className="space-y-1">
                    {children}
                </div>
            )}
        </div>
    );
};

const TreeViewCatalog = ({
    title,
    children,

    open,
    defaultOpen = false,
    onOpenChange,

    icon,
    openIcon,
    rightSlot,

    className,
    classNames,

    virtualized = false,
    height = DEFAULT_VIRTUAL_HEIGHT,
    estimateSize = DEFAULT_VIRTUAL_ITEM_SIZE,
    overscan = DEFAULT_VIRTUAL_OVERSCAN,

    ...props
}: TreeViewCatalogProps) => {
    const [innerOpen, setInnerOpen] = useState(defaultOpen);

    const isControlled = open !== undefined;
    const isOpen = isControlled ? open : innerOpen;

    const setOpen = (nextOpen: boolean) => {
        if (!isControlled) {
            setInnerOpen(nextOpen);
        }

        onOpenChange?.(nextOpen);
    };

    return (
        <div
            {...props}
            role="treeitem"
            aria-expanded={isOpen}
            className={cn("rounded-xl", className)}
        >
            <button
                type="button"
                className={cn(
                    "flex w-full cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-left",
                    "text-main-100 transition-colors duration-200 hover:bg-main-800/60",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main-300/50",
                    classNames?.trigger,
                )}
                onClick={() => setOpen(!isOpen)}
            >
                <Icon
                    icon="mdi:chevron-right"
                    width={16}
                    height={16}
                    className={cn(
                        "shrink-0 text-main-300 transition-transform duration-200",
                        isOpen && "rotate-90",
                        classNames?.chevronIcon,
                    )}
                />

                <span
                    className={cn(
                        "shrink-0 text-main-300",
                        classNames?.folderIcon,
                    )}
                >
                    {isOpen
                        ? (openIcon ??
                          icon ?? (
                              <Icon
                                  icon="mdi:folder-open-outline"
                                  width={16}
                                  height={16}
                              />
                          ))
                        : (icon ?? (
                              <Icon
                                  icon="mdi:folder-outline"
                                  width={16}
                                  height={16}
                              />
                          ))}
                </span>

                <span
                    className={cn(
                        "min-w-0 flex-1 truncate text-sm font-medium",
                        classNames?.title,
                    )}
                >
                    {title}
                </span>

                {rightSlot && (
                    <span
                        className={cn(
                            "ml-auto shrink-0 text-main-400",
                            classNames?.rightSlot,
                        )}
                    >
                        {rightSlot}
                    </span>
                )}
            </button>

            {isOpen &&
                (virtualized ? (
                    <VirtualizedChildrenList
                        className={cn("mt-1 pl-7", classNames?.nested)}
                        classNames={{
                            content: classNames?.virtualContent,
                            item: classNames?.virtualItem,
                        }}
                        height={height}
                        estimateSize={estimateSize}
                        overscan={overscan}
                    >
                        {children}
                    </VirtualizedChildrenList>
                ) : (
                    <div
                        role="group"
                        className={cn(
                            "mt-1 space-y-1 pl-7",
                            classNames?.nested,
                        )}
                    >
                        {children}
                    </div>
                ))}
        </div>
    );
};

const TreeViewElement = ({
    label,
    description,
    children,

    selected = false,
    disabled = false,

    icon,
    rightSlot,

    className,
    classNames,
    onClick,

    ...props
}: TreeViewElementProps) => {
    return (
        <button
            {...props}
            type="button"
            role="treeitem"
            aria-selected={selected}
            aria-disabled={disabled}
            disabled={disabled}
            className={cn(
                "flex w-full min-w-0 cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-left",
                "transition-colors duration-200",
                selected
                    ? "bg-main-700/70 text-main-100"
                    : "text-main-300 hover:bg-main-800/50 hover:text-main-100",
                disabled && "cursor-not-allowed opacity-60",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main-300/50",
                className,
            )}
            onClick={onClick}
        >
            {icon && (
                <span
                    className={cn(
                        "shrink-0 text-main-400",
                        selected && "text-main-100",
                        classNames?.icon,
                    )}
                >
                    {icon}
                </span>
            )}

            <span className={cn("min-w-0 flex-1", classNames?.content)}>
                {children ?? (
                    <>
                        {label && (
                            <span
                                className={cn(
                                    "block truncate text-sm font-medium",
                                    classNames?.label,
                                )}
                            >
                                {label}
                            </span>
                        )}

                        {description && (
                            <span
                                className={cn(
                                    "mt-0.5 block truncate text-xs text-main-400",
                                    selected && "text-main-300",
                                    classNames?.description,
                                )}
                            >
                                {description}
                            </span>
                        )}
                    </>
                )}
            </span>

            {rightSlot && (
                <span
                    className={cn(
                        "ml-auto shrink-0 text-main-500",
                        classNames?.rightSlot,
                    )}
                >
                    {rightSlot}
                </span>
            )}
        </button>
    );
};

export const TreeView = Object.assign(TreeViewBase, {
    Catalog: TreeViewCatalog,
    Element: TreeViewElement,
});

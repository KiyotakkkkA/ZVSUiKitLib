import styles from "./TreeView.module.css";
import { Children, isValidElement, useMemo, useRef, useState } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { Icon } from "../_shared/icons";
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
                className={cn(styles.s0, classNames?.content)}
                style={{ height: virtualizer.getTotalSize() }}
            >
                {virtualizer.getVirtualItems().map((virtualItem) => (
                    <div
                        key={virtualItem.key}
                        ref={virtualizer.measureElement}
                        data-index={virtualItem.index}
                        role="none"
                        className={cn(
                            styles.s1,
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
                styles.s2,
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
                <div role="group" className={styles.s3}>
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
            className={cn(styles.s4, className)}
        >
            <button
                type="button"
                className={cn(
                    styles.s5,
                    styles.s6,
                    styles.s7,
                    classNames?.trigger,
                )}
                onClick={() => setOpen(!isOpen)}
            >
                <Icon
                    icon="mdi:chevron-right"
                    width={16}
                    height={16}
                    className={cn(
                        styles.s8,
                        isOpen && styles.s9,
                        classNames?.chevronIcon,
                    )}
                />

                <span
                    className={cn(
                        styles.s10,
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
                        styles.s11,
                        classNames?.title,
                    )}
                >
                    {title}
                </span>

                {rightSlot && (
                    <span
                        className={cn(
                            styles.s12,
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
                        className={cn(styles.s13, classNames?.nested)}
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
                            styles.s14,
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
                styles.s15,
                styles.s16,
                selected
                    ? styles.s17
                    : styles.s18,
                disabled && styles.s19,
                styles.s20,
                className,
            )}
            onClick={onClick}
        >
            {icon && (
                <span
                    className={cn(
                        styles.s21,
                        selected && styles.s22,
                        classNames?.icon,
                    )}
                >
                    {icon}
                </span>
            )}

            <span className={cn(styles.s23, classNames?.content)}>
                {children ?? (
                    <>
                        {label && (
                            <span
                                className={cn(
                                    styles.s24,
                                    classNames?.label,
                                )}
                            >
                                {label}
                            </span>
                        )}

                        {description && (
                            <span
                                className={cn(
                                    styles.s25,
                                    selected && styles.s26,
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
                        styles.s27,
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

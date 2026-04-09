import {
    Children,
    useEffect,
    isValidElement,
    useMemo,
    useRef,
    useState,
    type ReactNode,
} from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { Icon } from "@iconify/react";
import { cn } from "../lib/utils";

type TreeViewVirtualizationProps = {
    virtualized?: boolean;
    height?: number;
    estimateSize?: number;
    overscan?: number;
};

type TreeViewProps = TreeViewVirtualizationProps & {
    children: ReactNode;
    className?: string;
};

type TreeViewCatalogProps = TreeViewVirtualizationProps & {
    title: string;
    children?: ReactNode;
    defaultOpen?: boolean;
    className?: string;
};

type TreeViewElementProps = {
    label?: string;
    description?: string;
    children?: ReactNode;
    className?: string;
    onClick?: () => void;
};

type VirtualizedChildrenListProps = {
    children?: ReactNode;
    className?: string;
    height: number;
    estimateSize: number;
    overscan: number;
};

const DEFAULT_VIRTUAL_HEIGHT = 360;
const DEFAULT_VIRTUAL_ITEM_SIZE = 34;
const DEFAULT_VIRTUAL_OVERSCAN = 8;

const VirtualizedChildrenList = ({
    children,
    className = "",
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

    useEffect(() => {
        virtualizer.shouldAdjustScrollPositionOnItemSizeChange = () => false;
        return () => {
            virtualizer.shouldAdjustScrollPositionOnItemSizeChange = undefined;
        };
    }, [virtualizer]);

    if (items.length === 0) {
        return null;
    }

    return (
        <div
            ref={scrollElementRef}
            className={cn("overflow-y-auto", className)}
            style={{ height }}
        >
            <div
                className="relative w-full"
                style={{ height: virtualizer.getTotalSize() }}
            >
                {virtualizer.getVirtualItems().map((virtualItem) => (
                    <div
                        key={virtualItem.key}
                        ref={virtualizer.measureElement}
                        data-index={virtualItem.index}
                        className={cn("absolute left-0 top-0 w-full pb-1")}
                        style={{
                            transform: `translateY(${virtualItem.start}px)`,
                        }}
                    >
                        {items[virtualItem.index]}
                    </div>
                ))}
            </div>
        </div>
    );
};

const TreeViewBase = ({
    children,
    className = "",
    virtualized = false,
    height = DEFAULT_VIRTUAL_HEIGHT,
    estimateSize = DEFAULT_VIRTUAL_ITEM_SIZE,
    overscan = DEFAULT_VIRTUAL_OVERSCAN,
}: TreeViewProps) => {
    return (
        <div
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
                <div className="space-y-1">{children}</div>
            )}
        </div>
    );
};

const TreeViewCatalog = ({
    title,
    children,
    defaultOpen = false,
    className = "",
    virtualized = false,
    height = DEFAULT_VIRTUAL_HEIGHT,
    estimateSize = DEFAULT_VIRTUAL_ITEM_SIZE,
    overscan = DEFAULT_VIRTUAL_OVERSCAN,
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
                        isOpen && "rotate-90",
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
                virtualized ? (
                    <VirtualizedChildrenList
                        className="mt-1 pl-7"
                        height={height}
                        estimateSize={estimateSize}
                        overscan={overscan}
                    >
                        {children}
                    </VirtualizedChildrenList>
                ) : (
                    <div className={cn("mt-1 pl-7", "space-y-1")}>
                        {children}
                    </div>
                )
            ) : null}
        </div>
    );
};

const TreeViewElement = ({
    children,
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
                <div className="min-w-0 flex-1 text-left">{children}</div>
            </div>
        </button>
    );
};

export const TreeView = Object.assign(TreeViewBase, {
    Catalog: TreeViewCatalog,
    Element: TreeViewElement,
});

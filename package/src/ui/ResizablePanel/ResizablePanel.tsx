import styles from "./ResizablePanel.module.css";
import { createContext, useContext, useMemo, useState } from "react";
import { cn } from "../../lib/utils";
import type {
    ResizablePanelContextValue,
    ResizablePanelProps,
    ResizablePanelSidebarProps,
    ResizablePanelContentProps,
    ResizablePanelHandleProps,
} from "./types";

const ResizablePanelContext = createContext<ResizablePanelContextValue | null>(
    null,
);

const useResizablePanel = () => {
    const context = useContext(ResizablePanelContext);

    if (!context) {
        throw new Error(
            "ResizablePanel components must be used inside <ResizablePanel />",
        );
    }

    return context;
};

const ResizablePanelRoot = ({
    children,
    defaultSize = 280,
    minSize = 180,
    maxSize = 520,
    className,
    ...props
}: ResizablePanelProps) => {
    const [size, setSize] = useState(defaultSize);

    const value = useMemo(
        () => ({
            size,
            setSize,
            minSize,
            maxSize,
        }),
        [size, minSize, maxSize],
    );

    return (
        <ResizablePanelContext.Provider value={value}>
            <div
                {...props}
                className={cn(
                    styles.s0,
                    className,
                )}
            >
                {children}
            </div>
        </ResizablePanelContext.Provider>
    );
};

const ResizablePanelSidebar = ({
    children,
    className,
    style,
    ...props
}: ResizablePanelSidebarProps) => {
    const { size } = useResizablePanel();

    return (
        <aside
            {...props}
            className={cn(styles.s1, className)}
            style={{
                width: size,
                ...style,
            }}
        >
            {children}
        </aside>
    );
};

const ResizablePanelContent = ({
    children,
    className,
    ...props
}: ResizablePanelContentProps) => {
    return (
        <main
            {...props}
            className={cn(styles.s2, className)}
        >
            {children}
        </main>
    );
};

const ResizablePanelHandle = ({
    className,
    ...props
}: ResizablePanelHandleProps) => {
    const { setSize, minSize, maxSize } = useResizablePanel();

    return (
        <div
            {...props}
            role="separator"
            aria-orientation="vertical"
            className={cn(
                styles.s3,
                styles.s4,
                className,
            )}
            onPointerDown={(event) => {
                const startX = event.clientX;

                const parent = event.currentTarget.parentElement;
                const sidebar = parent?.firstElementChild as HTMLElement | null;

                if (!sidebar) {
                    return;
                }

                const startWidth = sidebar.getBoundingClientRect().width;

                const handlePointerMove = (moveEvent: PointerEvent) => {
                    const nextSize = startWidth + moveEvent.clientX - startX;
                    const clampedSize = Math.min(
                        Math.max(nextSize, minSize),
                        maxSize,
                    );

                    setSize(clampedSize);
                };

                const handlePointerUp = () => {
                    window.removeEventListener(
                        "pointermove",
                        handlePointerMove,
                    );
                    window.removeEventListener("pointerup", handlePointerUp);
                    document.body.style.cursor = "";
                    document.body.style.userSelect = "";
                };

                document.body.style.cursor = "col-resize";
                document.body.style.userSelect = "none";

                window.addEventListener("pointermove", handlePointerMove);
                window.addEventListener("pointerup", handlePointerUp);
            }}
        >
            <span className={styles.s5} />
        </div>
    );
};

export const ResizablePanel = Object.assign(ResizablePanelRoot, {
    Sidebar: ResizablePanelSidebar,
    Handle: ResizablePanelHandle,
    Content: ResizablePanelContent,
});

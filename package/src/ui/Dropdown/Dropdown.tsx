"use client";

import { Icon } from "@iconify/react";
import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useId,
    useLayoutEffect,
    useMemo,
    useRef,
    useState,
    type KeyboardEvent,
    type Ref,
} from "react";
import { cn } from "../../lib/utils";
import type {
    DropdownContextValue,
    DropdownProps,
    DropdownTriggerProps,
    DropdownAnchorProps,
    DropdownMenuProps,
    DropdownItemProps,
    DropdownRenderProps,
} from "./types";
import "./Dropdown.css";
import { Button } from "../Button/Button";
import type { PositionAnchor } from "../..";

const DROPDOWN_MENU_GAP = 8;
const DROPDOWN_VIEWPORT_PADDING = 8;

const DropdownContext = createContext<DropdownContextValue | null>(null);

function useDropdownContext() {
    const context = useContext(DropdownContext);

    if (!context) {
        throw new Error(
            "Dropdown.Trigger, Dropdown.Anchor, Dropdown.Menu, Dropdown.Item и Dropdown.Render должны использоваться внутри Dropdown.",
        );
    }

    return context;
}

const toCssLength = (value: number | string) =>
    typeof value === "number" ? `${value}px` : value;

const clamp = (value: number, min: number, max: number) => {
    if (max < min) return min;

    return Math.max(min, Math.min(value, max));
};

const isPopoverOpen = (element: HTMLElement) => {
    return element.matches(":popover-open");
};

const applyMenuStyle = (
    triggerElement: HTMLElement,
    menuElement: HTMLElement,
    menuPlacement: PositionAnchor,
    menuWidth: number | string,
) => {
    const triggerRect = triggerElement.getBoundingClientRect();

    menuElement.style.inset = "auto";
    menuElement.style.margin = "0";
    menuElement.style.position = "fixed";
    menuElement.style.width =
        menuWidth === "auto"
            ? `${triggerRect.width}px`
            : toCssLength(menuWidth);

    const menuWidthPx = menuElement.offsetWidth;
    const menuHeightPx = menuElement.offsetHeight;

    const isTopPlacement = menuPlacement.startsWith("top");
    const isRightPlacement = menuPlacement.endsWith("right");
    const isCenterPlacement = menuPlacement.endsWith("center");

    const preferredLeft = isCenterPlacement
        ? triggerRect.left + (triggerRect.width - menuWidthPx) / 2
        : isRightPlacement
          ? triggerRect.right - menuWidthPx
          : triggerRect.left;

    const preferredTop = isTopPlacement
        ? triggerRect.top - menuHeightPx - DROPDOWN_MENU_GAP
        : triggerRect.bottom + DROPDOWN_MENU_GAP;

    const left = clamp(
        preferredLeft,
        DROPDOWN_VIEWPORT_PADDING,
        window.innerWidth - menuWidthPx - DROPDOWN_VIEWPORT_PADDING,
    );

    const top = clamp(
        preferredTop,
        DROPDOWN_VIEWPORT_PADDING,
        window.innerHeight - menuHeightPx - DROPDOWN_VIEWPORT_PADDING,
    );

    menuElement.style.left = `${left}px`;
    menuElement.style.top = `${top}px`;
    menuElement.style.right = "";
    menuElement.style.bottom = "";
};

function DropdownRoot({
    children,
    className,
    disabled = false,
    menuWidth = 220,
    menuPlacement = "bottom-left",
    onOpenChange,
}: DropdownProps) {
    const [open, setOpen] = useState(false);
    const [triggerElement, setTriggerElement] = useState<HTMLElement | null>(
        null,
    );

    const menuElementRef = useRef<HTMLDivElement | null>(null);
    const menuToggleCleanupRef = useRef<(() => void) | null>(null);
    const ignoreNextTriggerClickRef = useRef(false);
    const menuId = useId();

    const setTriggerRef = useCallback((node: HTMLElement | null) => {
        setTriggerElement(node);
    }, []);

    const setMenuRef = useCallback((node: HTMLDivElement | null) => {
        menuToggleCleanupRef.current?.();
        menuToggleCleanupRef.current = null;

        menuElementRef.current = node;

        if (!node) return;

        const handleToggle = () => {
            setOpen(isPopoverOpen(node));
        };

        node.addEventListener("toggle", handleToggle);

        menuToggleCleanupRef.current = () => {
            node.removeEventListener("toggle", handleToggle);
        };
    }, []);

    const updateMenuPosition = useCallback(() => {
        const menuElement = menuElementRef.current;

        if (!triggerElement || !menuElement) return;

        applyMenuStyle(triggerElement, menuElement, menuPlacement, menuWidth);
    }, [menuPlacement, menuWidth, triggerElement]);

    const openMenu = useCallback(() => {
        if (disabled) return;

        setOpen(true);
    }, [disabled]);

    const close = useCallback(() => {
        setOpen(false);
    }, []);

    const toggleOpen = useCallback(() => {
        if (disabled) return;

        setOpen((current) => !current);
    }, [disabled]);

    useEffect(() => {
        onOpenChange?.(open);
    }, [onOpenChange, open]);

    useEffect(() => {
        return () => {
            menuToggleCleanupRef.current?.();
            menuToggleCleanupRef.current = null;
        };
    }, []);

    useLayoutEffect(() => {
        const menuElement = menuElementRef.current;

        if (!menuElement) return;

        const popoverElement = menuElement as HTMLDivElement & {
            showPopover: () => void;
            hidePopover: () => void;
        };

        if (!open) {
            if (isPopoverOpen(menuElement)) {
                popoverElement.hidePopover();
            }

            return;
        }

        menuElement.style.visibility = "hidden";

        if (!isPopoverOpen(menuElement)) {
            popoverElement.showPopover();
        }

        updateMenuPosition();

        menuElement.style.visibility = "";

        const onViewportChange = () => {
            updateMenuPosition();
        };

        window.addEventListener("resize", onViewportChange);
        window.addEventListener("scroll", onViewportChange, true);

        let resizeObserver: ResizeObserver | null = null;

        if (typeof ResizeObserver !== "undefined") {
            resizeObserver = new ResizeObserver(() => {
                updateMenuPosition();
            });

            resizeObserver.observe(menuElement);

            if (triggerElement) {
                resizeObserver.observe(triggerElement);
            }
        }

        return () => {
            window.removeEventListener("resize", onViewportChange);
            window.removeEventListener("scroll", onViewportChange, true);
            resizeObserver?.disconnect();
        };
    }, [open, updateMenuPosition, triggerElement]);

    const contextValue = useMemo<DropdownContextValue>(
        () => ({
            open,
            disabled,
            menuId,
            toggleOpen,
            openMenu,
            close,
            setTriggerRef,
            setMenuRef,
            ignoreNextTriggerClickRef,
            menuPlacement,
        }),
        [
            open,
            disabled,
            menuId,
            toggleOpen,
            openMenu,
            close,
            setTriggerRef,
            setMenuRef,
            ignoreNextTriggerClickRef,
            menuPlacement,
        ],
    );

    return (
        <DropdownContext.Provider value={contextValue}>
            <div className={cn("min-w-0 w-fit", className)}>{children}</div>
        </DropdownContext.Provider>
    );
}

function DropdownTrigger({
    children,
    className,
    placeholder = "Открыть",
    icon,
    disabled: disabledProp,
    onClick,
    onPointerDown,
    ...props
}: DropdownTriggerProps) {
    const {
        open,
        disabled,
        menuId,
        toggleOpen,
        setTriggerRef,
        ignoreNextTriggerClickRef,
    } = useDropdownContext();

    const isDisabled = disabled || disabledProp;

    return (
        <Button
            variant=""
            ref={setTriggerRef as Ref<HTMLButtonElement>}
            aria-expanded={open}
            aria-controls={menuId}
            disabled={isDisabled}
            onPointerDown={(event) => {
                onPointerDown?.(event);

                if (event.defaultPrevented || !open) return;

                event.preventDefault();
                ignoreNextTriggerClickRef.current = true;
                toggleOpen();
            }}
            onClick={(event) => {
                onClick?.(event);

                if (ignoreNextTriggerClickRef.current) {
                    ignoreNextTriggerClickRef.current = false;
                    return;
                }

                if (!event.defaultPrevented) {
                    toggleOpen();
                }
            }}
            className={cn(
                "min-h-10 justify-between gap-3 rounded-xl border-transparent px-3 py-2 text-main-100",
                className,
            )}
            {...props}
        >
            <span className="min-w-0 truncate text-left">
                {children ?? placeholder}
            </span>

            {icon ?? (
                <Icon
                    icon="mdi:chevron-down"
                    className={cn(
                        "shrink-0 text-main-400 transition-transform duration-200",
                        open && "rotate-180",
                    )}
                    aria-hidden
                />
            )}
        </Button>
    );
}

function DropdownAnchor({
    children,
    className,
    focusInputOnOpen,
    onClick,
    onKeyDown,
    onPointerDown,
    ...props
}: DropdownAnchorProps) {
    const {
        open,
        disabled,
        menuId,
        openMenu,
        close,
        setTriggerRef,
        ignoreNextTriggerClickRef,
    } = useDropdownContext();

    return (
        <div
            ref={setTriggerRef as Ref<HTMLDivElement>}
            role="button"
            tabIndex={disabled ? -1 : 0}
            aria-expanded={open}
            aria-controls={menuId}
            aria-disabled={disabled}
            className={className}
            onPointerDown={(event) => {
                onPointerDown?.(event);

                if (event.defaultPrevented || !open) return;

                event.preventDefault();
                ignoreNextTriggerClickRef.current = true;
                close();
            }}
            onClick={(event) => {
                onClick?.(event);

                if (ignoreNextTriggerClickRef.current) {
                    ignoreNextTriggerClickRef.current = false;
                    return;
                }

                if (event.defaultPrevented || disabled) return;

                openMenu();
                focusInputOnOpen?.();
            }}
            onKeyDown={(event) => {
                onKeyDown?.(event);

                if (event.defaultPrevented || disabled) return;

                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openMenu();
                    focusInputOnOpen?.();
                }
            }}
            {...props}
        >
            {children}
        </div>
    );
}

function DropdownMenu({
    children,
    className,
    rounded = "rounded-lg",
    ...props
}: DropdownMenuProps) {
    const { menuId, setMenuRef, menuPlacement } = useDropdownContext();

    return (
        <div
            id={menuId}
            tabIndex={-1}
            ref={setMenuRef}
            popover="auto"
            data-placement={menuPlacement}
            className={cn(
                "zvs-dropdown-popover fixed z-60 border-0 bg-main-800 p-1.5",
                `zvs-${rounded}`,
                "max-w-[calc(100vw-1rem)]",
                className,
            )}
            {...props}
        >
            {children}
        </div>
    );
}

function DropdownItem({
    children,
    className,
    closeOnClick = true,
    active = false,
    icon,
    onClick,
    onKeyDown,
    type = "button",
    ...props
}: DropdownItemProps) {
    const { close } = useDropdownContext();

    const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
        onKeyDown?.(event);

        if (event.defaultPrevented) return;

        if (event.key === "Enter") {
            event.preventDefault();
            event.currentTarget.click();
        }
    };

    return (
        <button
            type={type}
            onClick={(event) => {
                onClick?.(event);

                if (!event.defaultPrevented && closeOnClick) {
                    close();
                }
            }}
            onKeyDown={handleKeyDown}
            className={cn(
                "flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-sm",
                "text-main-200 transition-colors hover:bg-main-700/70 hover:text-main-50",
                "focus-visible:bg-main-700/70 focus-visible:text-main-50 focus-visible:outline-none",
                active && "bg-main-700/70 text-main-50",
                className,
            )}
            {...props}
        >
            {icon && <span className="shrink-0 text-main-400">{icon}</span>}

            <span className="min-w-0 flex-1 truncate">{children}</span>
        </button>
    );
}

function DropdownRender({ children }: DropdownRenderProps) {
    const { open, close, toggleOpen, openMenu } = useDropdownContext();

    return children({ open, close, toggleOpen, openMenu });
}

export const Dropdown = Object.assign(DropdownRoot, {
    Trigger: DropdownTrigger,
    Anchor: DropdownAnchor,
    Menu: DropdownMenu,
    Item: DropdownItem,
    Render: DropdownRender,
});

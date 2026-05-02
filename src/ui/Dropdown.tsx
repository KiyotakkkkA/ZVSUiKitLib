import { Icon } from "@iconify/react";
import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useId,
    useMemo,
    useRef,
    useState,
    type ButtonHTMLAttributes,
    type CSSProperties,
    type HTMLAttributes,
    type KeyboardEvent,
    type ReactNode,
    type Ref,
} from "react";
import { createPortal } from "react-dom";
import { cn } from "../lib/utils";
import { Button } from "./Button";

type DropdownMenuPlacement = "bottom" | "top";

type DropdownMenuRole = "menu" | "listbox";

type DropdownContextValue = {
    open: boolean;
    disabled: boolean;
    menuId: string;
    menuRole: DropdownMenuRole;
    popupRole: DropdownMenuRole;
    toggleOpen: () => void;
    openMenu: () => void;
    close: () => void;
    setTriggerRef: Ref<HTMLElement>;
    setMenuRef: Ref<HTMLDivElement>;
    menuStyle: CSSProperties;
    menuPlacement: DropdownMenuPlacement;
};

type DropdownProps = {
    children: ReactNode;
    className?: string;
    disabled?: boolean;
    menuWidth?: number | string;
    menuPlacement?: DropdownMenuPlacement;
    menuRole?: DropdownMenuRole;
    onOpenChange?: (open: boolean) => void;
};

type DropdownTriggerProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    placeholder?: ReactNode;
    icon?: ReactNode;
};

type DropdownAnchorProps = HTMLAttributes<HTMLDivElement> & {
    focusInputOnOpen?: () => void;
};

type DropdownMenuProps = HTMLAttributes<HTMLDivElement>;

type DropdownItemProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    closeOnClick?: boolean;
    active?: boolean;
    icon?: ReactNode;
};

type DropdownRenderProps = {
    children: (args: {
        open: boolean;
        close: () => void;
        toggleOpen: () => void;
        openMenu: () => void;
    }) => ReactNode;
};

const DROPDOWN_MENU_GAP = 8;

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

const getMenuStyle = (
    triggerElement: HTMLElement,
    menuPlacement: DropdownMenuPlacement,
    menuWidth: number | string,
): CSSProperties => {
    const rect = triggerElement.getBoundingClientRect();
    const viewportPadding = 8;
    const widthValue = typeof menuWidth === "number" ? menuWidth : null;

    let left = rect.left;

    if (widthValue !== null) {
        left = Math.max(
            viewportPadding,
            Math.min(left, window.innerWidth - widthValue - viewportPadding),
        );
    }

    const style: CSSProperties = {
        left,
        position: "fixed",
        width: menuWidth,
    };

    if (menuPlacement === "top") {
        style.bottom = window.innerHeight - rect.top + DROPDOWN_MENU_GAP;
    } else {
        style.top = rect.bottom + DROPDOWN_MENU_GAP;
    }

    return style;
};

function DropdownRoot({
    children,
    className,
    disabled = false,
    menuWidth = 220,
    menuPlacement = "bottom",
    menuRole = "menu",
    onOpenChange,
}: DropdownProps) {
    const [open, setOpen] = useState(false);
    const [menuStyle, setMenuStyle] = useState<CSSProperties>({});
    const [triggerElement, setTriggerElement] = useState<HTMLElement | null>(
        null,
    );

    const rootRef = useRef<HTMLDivElement>(null);
    const menuElementRef = useRef<HTMLDivElement | null>(null);
    const menuId = useId();

    const popupRole = menuRole === "listbox" ? "listbox" : "menu";

    const setTriggerRef = useCallback((node: HTMLElement | null) => {
        setTriggerElement(node);
    }, []);

    const setMenuRef = useCallback((node: HTMLDivElement | null) => {
        menuElementRef.current = node;
    }, []);

    const updateMenuPosition = useCallback(() => {
        if (!triggerElement) return;

        setMenuStyle(getMenuStyle(triggerElement, menuPlacement, menuWidth));
    }, [menuPlacement, menuWidth, triggerElement]);

    const openMenu = useCallback(() => {
        if (disabled) return;

        setOpen(true);
    }, [disabled]);

    const toggleOpen = useCallback(() => {
        if (disabled) return;

        setOpen((current) => !current);
    }, [disabled]);

    const close = useCallback(() => {
        setOpen(false);
    }, []);

    useEffect(() => {
        onOpenChange?.(open);
    }, [onOpenChange, open]);

    useEffect(() => {
        if (!open) return;

        const onOutsidePointer = (event: PointerEvent) => {
            const target = event.target;

            if (!(target instanceof Node)) return;

            if (
                rootRef.current?.contains(target) ||
                menuElementRef.current?.contains(target)
            ) {
                return;
            }

            close();
        };

        const onEscape = (event: globalThis.KeyboardEvent) => {
            if (event.key === "Escape") {
                close();
            }
        };

        window.addEventListener("pointerdown", onOutsidePointer);
        window.addEventListener("keydown", onEscape);

        return () => {
            window.removeEventListener("pointerdown", onOutsidePointer);
            window.removeEventListener("keydown", onEscape);
        };
    }, [close, open]);

    useEffect(() => {
        if (!open) return;

        const rafId = window.requestAnimationFrame(() => {
            updateMenuPosition();
        });

        const onViewportChange = () => {
            updateMenuPosition();
        };

        window.addEventListener("resize", onViewportChange);
        window.addEventListener("scroll", onViewportChange, true);

        return () => {
            window.cancelAnimationFrame(rafId);
            window.removeEventListener("resize", onViewportChange);
            window.removeEventListener("scroll", onViewportChange, true);
        };
    }, [open, updateMenuPosition]);

    const contextValue = useMemo<DropdownContextValue>(
        () => ({
            open,
            disabled,
            menuId,
            menuRole,
            popupRole,
            toggleOpen,
            openMenu,
            close,
            setTriggerRef,
            setMenuRef,
            menuStyle,
            menuPlacement,
        }),
        [
            open,
            disabled,
            menuId,
            menuRole,
            popupRole,
            toggleOpen,
            openMenu,
            close,
            setTriggerRef,
            setMenuRef,
            menuStyle,
            menuPlacement,
        ],
    );

    return (
        <DropdownContext.Provider value={contextValue}>
            <div ref={rootRef} className={cn("min-w-0 w-fix", className)}>
                {children}
            </div>
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
    ...props
}: DropdownTriggerProps) {
    const { open, disabled, menuId, popupRole, toggleOpen, setTriggerRef } =
        useDropdownContext();

    const isDisabled = disabled || disabledProp;

    return (
        <Button
            variant=""
            ref={setTriggerRef as Ref<HTMLButtonElement>}
            aria-haspopup={popupRole}
            aria-expanded={open}
            aria-controls={menuId}
            disabled={isDisabled}
            onClick={(event) => {
                onClick?.(event);

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
                        open ? "rotate-180" : "",
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
    ...props
}: DropdownAnchorProps) {
    const { open, disabled, menuId, popupRole, openMenu, setTriggerRef } =
        useDropdownContext();

    return (
        <div
            ref={setTriggerRef as Ref<HTMLDivElement>}
            role="button"
            tabIndex={disabled ? -1 : 0}
            aria-haspopup={popupRole}
            aria-expanded={open}
            aria-controls={menuId}
            aria-disabled={disabled}
            className={className}
            onClick={(event) => {
                onClick?.(event);

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

function DropdownMenu({ children, className, ...props }: DropdownMenuProps) {
    const { open, menuId, menuRole, setMenuRef, menuStyle, menuPlacement } =
        useDropdownContext();

    const menuPositionClassName =
        menuPlacement === "top"
            ? cn(
                  "origin-bottom",
                  open
                      ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                      : "pointer-events-none translate-y-1 scale-98 opacity-0",
              )
            : cn(
                  "origin-top",
                  open
                      ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                      : "pointer-events-none -translate-y-1 scale-98 opacity-0",
              );

    return createPortal(
        <div
            id={menuId}
            role={menuRole}
            tabIndex={-1}
            ref={setMenuRef}
            style={menuStyle}
            className={cn(
                "fixed z-60 rounded-xl bg-main-800 p-1.5 transition-all duration-180",
                "max-w-[calc(100vw-1rem)]",
                menuPositionClassName,
                className,
            )}
            {...props}
        >
            {children}
        </div>,
        document.body,
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
    const { close, menuRole } = useDropdownContext();

    const itemRole = menuRole === "listbox" ? "option" : "menuitem";

    const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
        onKeyDown?.(event);

        if (event.defaultPrevented) return;

        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            event.currentTarget.click();
        }
    };

    return (
        <button
            type={type}
            role={itemRole}
            aria-selected={menuRole === "listbox" ? active : undefined}
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

type DropdownCompound = {
    (props: DropdownProps): ReactNode;
    Trigger: (props: DropdownTriggerProps) => ReactNode;
    Anchor: (props: DropdownAnchorProps) => ReactNode;
    Menu: (props: DropdownMenuProps) => ReactNode;
    Item: (props: DropdownItemProps) => ReactNode;
    Render: (props: DropdownRenderProps) => ReactNode;
};

export const Dropdown = Object.assign(DropdownRoot, {
    Trigger: DropdownTrigger,
    Anchor: DropdownAnchor,
    Menu: DropdownMenu,
    Item: DropdownItem,
    Render: DropdownRender,
}) as DropdownCompound;

export type {
    DropdownProps,
    DropdownTriggerProps,
    DropdownAnchorProps,
    DropdownMenuProps,
    DropdownItemProps,
    DropdownRenderProps,
    DropdownMenuPlacement,
    DropdownMenuRole,
};

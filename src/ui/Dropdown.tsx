import { Icon } from "@iconify/react";
import { createPortal } from "react-dom";
import {
    useCallback,
    useEffect,
    useId,
    useMemo,
    useRef,
    useState,
    type CSSProperties,
    type ReactNode,
    type Ref,
} from "react";
import { cn } from "../lib/utils";
import { Button } from "./Button";

type DropdownRenderArgs = {
    open: boolean;
    close: () => void;
};

type DropdownProps = {
    children: ReactNode | ((args: DropdownRenderArgs) => ReactNode);
    label?: ReactNode;
    placeholder?: string;
    className?: string;
    menuWidth?: number | string;
    classNames?: {
        trigger?: string;
        menu?: string;
    };
    disabled?: boolean;
    ariaLabel?: string;
    menuPlacement?: "bottom" | "top";
    menuRole?: "menu" | "listbox";
    onOpenChange?: (open: boolean) => void;
    renderTrigger?: (args: {
        open: boolean;
        toggleOpen: () => void;
        triggerRef: Ref<HTMLButtonElement>;
        disabled: boolean;
        ariaProps: {
            "aria-haspopup": "menu" | "listbox";
            "aria-expanded": boolean;
            "aria-controls": string;
            "aria-label"?: string;
        };
    }) => ReactNode;
};

const DROPDOWN_MENU_GAP = 8;

const getMenuStyle = (
    triggerElement: HTMLButtonElement,
    menuPlacement: "bottom" | "top",
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

export function Dropdown({
    children,
    label,
    placeholder = "Открыть",
    className,
    menuWidth = 220,
    classNames,
    disabled = false,
    ariaLabel,
    menuPlacement = "bottom",
    menuRole = "menu",
    onOpenChange,
    renderTrigger,
}: DropdownProps) {
    const [open, setOpen] = useState(false);
    const [menuStyle, setMenuStyle] = useState<CSSProperties>({});
    const [triggerElement, setTriggerElement] =
        useState<HTMLButtonElement | null>(null);
    const rootRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const menuId = useId();
    const popupRole = menuRole === "listbox" ? "listbox" : "menu";

    const setTriggerRef = useCallback((node: HTMLButtonElement | null) => {
        setTriggerElement(node);
    }, []);

    const updateMenuPosition = useCallback(() => {
        if (!triggerElement) {
            return;
        }

        setMenuStyle(getMenuStyle(triggerElement, menuPlacement, menuWidth));
    }, [menuPlacement, menuWidth, triggerElement]);

    useEffect(() => {
        onOpenChange?.(open);
    }, [onOpenChange, open]);

    useEffect(() => {
        if (!open) {
            return;
        }
        const onOutsidePointer = (event: PointerEvent) => {
            const target = event.target;
            if (!(target instanceof Node)) {
                return;
            }

            if (
                rootRef.current?.contains(target) ||
                menuRef.current?.contains(target)
            ) {
                return;
            }

            setOpen(false);
        };

        const onEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setOpen(false);
            }
        };

        window.addEventListener("pointerdown", onOutsidePointer);
        window.addEventListener("keydown", onEscape);
        return () => {
            window.removeEventListener("pointerdown", onOutsidePointer);
            window.removeEventListener("keydown", onEscape);
        };
    }, [open]);

    useEffect(() => {
        if (!open) {
            return;
        }

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

    const toggleOpen = () => {
        if (disabled) {
            return;
        }
        setOpen((current) => !current);
    };

    const close = useCallback(() => {
        setOpen(false);
    }, []);

    const content = useMemo(() => {
        if (typeof children === "function") {
            return children({ open, close });
        }

        return children;
    }, [children, close, open]);

    const menuPositionClassName =
        menuPlacement === "top"
            ? `origin-bottom ${
                  open
                      ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                      : "pointer-events-none translate-y-1 scale-98 opacity-0"
              }`
            : `origin-top ${
                  open
                      ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                      : "pointer-events-none -translate-y-1 scale-98 opacity-0"
              }`;

    const menuNode = (
        <div
            id={menuId}
            role={menuRole}
            tabIndex={-1}
            ref={menuRef}
            style={menuStyle}
            className={cn(
                "fixed z-60 rounded-xl bg-main-800 p-1.5 transition-all duration-180",
                "max-w-[calc(100vw-1rem)]",
                menuPositionClassName,
                classNames?.menu,
            )}
        >
            {content}
        </div>
    );

    return (
        <div ref={rootRef} className={cn("min-w-0 w-fix", className)}>
            {renderTrigger ? (
                renderTrigger({
                    open,
                    toggleOpen,
                    triggerRef: setTriggerRef,
                    disabled,
                    ariaProps: {
                        "aria-haspopup": popupRole,
                        "aria-expanded": open,
                        "aria-controls": menuId,
                        "aria-label": ariaLabel,
                    },
                })
            ) : (
                <Button
                    variant=""
                    ref={setTriggerRef}
                    aria-haspopup={popupRole}
                    aria-expanded={open}
                    aria-controls={menuId}
                    aria-label={ariaLabel}
                    disabled={disabled}
                    onClick={toggleOpen}
                    className={cn(
                        "min-h-10 justify-between gap-3 rounded-xl border-transparent px-3 py-2 text-main-100",
                        classNames?.trigger,
                    )}
                >
                    <span className="min-w-0 truncate text-left">
                        {label ?? placeholder}
                    </span>
                    <Icon
                        icon="mdi:chevron-down"
                        className={cn(
                            "shrink-0 text-main-400 transition-transform duration-200",
                            open ? "rotate-180" : "",
                        )}
                        aria-hidden
                    />
                </Button>
            )}

            {createPortal(menuNode, document.body)}
        </div>
    );
}

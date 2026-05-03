import type {
    ButtonHTMLAttributes,
    CSSProperties,
    HTMLAttributes,
    ReactNode,
    Ref,
} from "react";

export type DropdownMenuPlacement = "bottom" | "top";
export type DropdownMenuRole = "menu" | "listbox";

export type DropdownContextValue = {
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

export type DropdownProps = {
    children: ReactNode;
    className?: HTMLAttributes<HTMLDivElement>["className"];
    disabled?: boolean;
    menuWidth?: number | string;
    menuPlacement?: DropdownMenuPlacement;
    menuRole?: DropdownMenuRole;
    onOpenChange?: (open: boolean) => void;
};

export type DropdownTriggerProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    placeholder?: ReactNode;
    icon?: ReactNode;
};

export type DropdownAnchorProps = HTMLAttributes<HTMLDivElement> & {
    focusInputOnOpen?: () => void;
};

export type DropdownMenuProps = HTMLAttributes<HTMLDivElement>;

export type DropdownItemProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    closeOnClick?: boolean;
    active?: boolean;
    icon?: ReactNode;
};

export type DropdownRenderProps = {
    children: (args: {
        open: boolean;
        close: () => void;
        toggleOpen: () => void;
        openMenu: () => void;
    }) => ReactNode;
};

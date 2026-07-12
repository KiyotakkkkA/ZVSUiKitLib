import type {
    ButtonHTMLAttributes,
    HTMLAttributes,
    MutableRefObject,
    ReactNode,
    Ref,
} from "react";
import type { DivClassName, PositionAnchor } from "../_shared/types";

export type DropdownContextValue = {
    open: boolean;
    disabled: boolean;
    menuId: string;
    toggleOpen: () => void;
    openMenu: () => void;
    close: () => void;
    setTriggerRef: Ref<HTMLElement>;
    setMenuRef: Ref<HTMLDivElement>;
    ignoreNextTriggerClickRef: MutableRefObject<boolean>;
    menuPlacement: PositionAnchor;
};

export type DropdownProps = {
    children: ReactNode;
    className?: DivClassName;
    disabled?: boolean;
    menuWidth?: number | string;
    menuPlacement?: PositionAnchor;
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

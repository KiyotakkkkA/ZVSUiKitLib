import type {
    ButtonHTMLAttributes,
    HTMLAttributes,
    MutableRefObject,
    ReactNode,
    Ref,
} from "react";
import type {
    DivClassName,
    PositionAnchor,
    RoundVariants,
} from "../_shared/types";

export type DropdownContextValue = {
    /** Indicates whether the popup menu is open. */
    open: boolean;
    /** Indicates whether the dropdown trigger is disabled. */
    disabled: boolean;
    /** Identifies the popup menu for ARIA relationships. */
    menuId: string;
    /** Opens the menu when closed and closes it when open. */
    toggleOpen: () => void;
    /** Opens the popup menu. */
    openMenu: () => void;
    /** Closes the popup menu. */
    close: () => void;
    /** Receives the dropdown trigger element. */
    setTriggerRef: Ref<HTMLElement>;
    /** Receives the popup menu element. */
    setMenuRef: Ref<HTMLDivElement>;
    /** Tracks whether the next trigger click must be ignored after an external open action. */
    ignoreNextTriggerClickRef: MutableRefObject<boolean>;
    /** Specifies the preferred popup position relative to the trigger. */
    menuPlacement: PositionAnchor;
};

export type DropdownProps = {
    /** Receives the dropdown root element. */
    ref?: Ref<HTMLDivElement>;
    /** Renders the dropdown trigger, menu, and optional render-prop parts. */
    children: ReactNode;
    /** Applies CSS classes to the dropdown root wrapper. */
    className?: DivClassName;
    /** Prevents the dropdown from opening through its trigger. */
    disabled?: boolean;
    /** Sets the popup width; `"auto"` matches the trigger width. */
    menuWidth?: number | string;
    /** Specifies the preferred popup position relative to the trigger. */
    menuPlacement?: PositionAnchor;
    /** Runs whenever the popup open state changes. */
    onOpenChange?: (open: boolean) => void;
};

export type DropdownTriggerProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    /** Renders fallback trigger content when no children are supplied. Defaults to the `dropdown.triggerPlaceholder` string from the active locale dictionary. */
    placeholder?: ReactNode;
    /** Replaces the default trailing chevron. */
    icon?: ReactNode;
    /** Selects the trigger button border radius. */
    rounded?: RoundVariants | "";
};

export type DropdownAnchorProps = HTMLAttributes<HTMLDivElement> & {
    /** Runs after the anchor opens the menu, typically to focus a nested input. */
    focusInputOnOpen?: () => void;
};

export type DropdownMenuProps = HTMLAttributes<HTMLDivElement> & {
    /** Selects the popup menu border radius. */
    rounded?: RoundVariants | "";
};

export type DropdownItemProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    /** Closes the popup after the item click unless the event is prevented. */
    closeOnClick?: boolean;
    /** Applies the active item appearance. */
    active?: boolean;
    /** Renders a leading icon inside the menu item. */
    icon?: ReactNode;
    /** Selects the border radius for the menu item. */
    rounded?: RoundVariants | "";
};

export type DropdownRenderProps = {
    /** Receives the current dropdown state and control functions. */
    children: (args: {
        /** Indicates whether the popup menu is open. */
        open: boolean;
        /** Closes the popup menu. */
        close: () => void;
        /** Opens the menu when closed and closes it when open. */
        toggleOpen: () => void;
        /** Opens the popup menu. */
        openMenu: () => void;
    }) => ReactNode;
};

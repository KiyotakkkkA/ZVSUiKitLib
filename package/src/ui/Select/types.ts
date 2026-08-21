import type { ReactNode } from "react";
import type {
    DivClassName,
    InputClassName,
    PositionAnchor,
    RoundVariants,
} from "../_shared/types";

export type SelectOption = {
    /** The value used by the component. */
    value: string;
    /** Text used for the label. */
    label: string;
    /** Content rendered for the icon. */
    icon?: ReactNode;
    /** Callback invoked when click occurs. */
    onClick?: () => void;
};

export type SelectClassNames = {
    /** The search used by the component. */
    search?: InputClassName;
};

export type SelectProps = {
    /** The value used by the component. */
    value: string;
    /** Callback invoked when change occurs. */
    onChange: (value: string) => void;
    /** The options used by the component. */
    options: SelectOption[];
    /** The content rendered inside the component. */
    children: ReactNode;
    /** Text used for the placeholder. Defaults to the `select.placeholder` string from the active locale dictionary. */
    placeholder?: string;
    /** Whether searchable is enabled. */
    searchable?: boolean;
    /** Text used for the search placeholder. Defaults to the `select.searchPlaceholder` string from the active locale dictionary. */
    searchPlaceholder?: string;
    /** Text used for the empty message. Defaults to the `select.emptyMessage` string from the active locale dictionary. */
    emptyMessage?: string;
    /** Whether disabled is enabled. */
    disabled?: boolean;
    /** CSS classes applied to the root element. */
    className?: DivClassName;
    /** CSS classes applied to the component slots. */
    classNames?: SelectClassNames;
    /** The width of the popup menu. */
    menuWidth?: number | string;
    /** The popup menu position relative to its trigger. */
    menuPlacement?: PositionAnchor;
    /** Function used to close on select. */
    closeOnSelect?: boolean;
};

export type SelectTriggerProps = {
    /** CSS classes applied to the root element. */
    className?: string;
    /** The border-radius preset applied to the component. */
    rounded?: RoundVariants | "";
};

export type SelectMenuProps = {
    /** The content rendered inside the component. */
    children: ReactNode;
    /** Accessible name for the option list. */
    label?: string;
    /** CSS classes applied to the root element. */
    className?: DivClassName;
    /** The border-radius preset applied to the component. */
    rounded?: RoundVariants | "";
};

export type SelectOptionProps = SelectOption & {
    /** CSS classes applied to the root element. */
    className?: string;
    /** The border-radius preset applied to the component. */
    rounded?: RoundVariants | "";
};

export type SelectContextValue = {
    /** The value used by the component. */
    value: string;
    /** Whether selected option is enabled. */
    selectedOption?: SelectOption;
    /** Text used for the placeholder. */
    placeholder: string;
    /** The query used by the component. */
    query: string;
    /** Indicates whether the popup menu is open. */
    open: boolean;
    /** Whether searchable is enabled. */
    searchable: boolean;
    /** Text used for the search placeholder. */
    searchPlaceholder: string;
    /** Text used for the empty message. */
    emptyMessage: string;
    /** CSS classes applied to the component slots. */
    classNames?: SelectClassNames;
    /** Function used to close on select. */
    closeOnSelect: boolean;
    /** Function used to set query. */
    setQuery: (query: string) => void;
    /** The select used by the component. */
    select: (option: SelectOption) => void;
    /** Whether is visible is enabled. */
    isVisible: (option: SelectOption) => boolean;
    /** The visible options count used by the component. */
    visibleOptionsCount: number;
};

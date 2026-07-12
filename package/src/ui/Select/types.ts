import type { ReactNode } from "react";
import type {
    DivClassName,
    InputClassName,
    PositionAnchor,
    RoundVariants,
} from "../_shared/types";

export type SelectOption = {
    value: string;
    label: string;
    icon?: ReactNode;
    onClick?: () => void;
};

export type SelectClassNames = {
    search?: InputClassName;
};

export type SelectProps = {
    value: string;
    onChange: (value: string) => void;
    options: SelectOption[];
    children: ReactNode;
    placeholder?: string;
    searchable?: boolean;
    searchPlaceholder?: string;
    emptyMessage?: string;
    disabled?: boolean;
    className?: DivClassName;
    classNames?: SelectClassNames;
    menuWidth?: number | string;
    menuPlacement?: PositionAnchor;
    closeOnSelect?: boolean;
};

export type SelectTriggerProps = {
    className?: string;
    rounded?: RoundVariants | "";
};

export type SelectMenuProps = {
    children: ReactNode;
    className?: DivClassName;
    rounded?: RoundVariants | "";
};

export type SelectOptionProps = SelectOption & {
    className?: string;
    rounded?: RoundVariants | "";
};

export type SelectContextValue = {
    value: string;
    selectedOption?: SelectOption;
    placeholder: string;
    query: string;
    searchable: boolean;
    searchPlaceholder: string;
    emptyMessage: string;
    classNames?: SelectClassNames;
    closeOnSelect: boolean;
    setQuery: (query: string) => void;
    select: (option: SelectOption) => void;
    isVisible: (option: SelectOption) => boolean;
    visibleOptionsCount: number;
};

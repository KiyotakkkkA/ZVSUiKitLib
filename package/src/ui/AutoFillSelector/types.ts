import type React from "react";
import type { HTMLAttributes, InputHTMLAttributes, ReactNode } from "react";
import type {
    ButtonClassName,
    DivClassName,
    SpanClassName,
    SvgClassName,
} from "../_shared/types";

export type AutoFillOption = {
    value: string;
    label: string;
    description?: string;
    icon?: ReactNode;
};

export type AutoFillSelectorProps = Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "onChange"
> & {
    options: AutoFillOption[];
    value?: string[];
    onChange?: (value: string[]) => void;
    disabled?: boolean;
    menuWidth?: number | string;
    children: ReactNode;
    onOpenChange?: (open: boolean) => void;
};

export type AutoFillSelectorTriggerProps = HTMLAttributes<HTMLDivElement>;

export type AutoFillSelectorTagsProps = HTMLAttributes<HTMLDivElement> & {
    tagClassName?: SpanClassName;
    tagRemoveClassName?: ButtonClassName;
};

export type AutoFillSelectorInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange" | "disabled"
>;

export type AutoFillSelectorMenuProps = HTMLAttributes<HTMLDivElement> & {
    scrollClassName?: DivClassName;
};

export type AutoFillSelectorOptionsProps = HTMLAttributes<HTMLDivElement> & {
    optionClassName?: ButtonClassName;
    optionLabelClassName?: SpanClassName;
    optionDescriptionClassName?: SpanClassName;
    optionIconClassName?: SvgClassName;
};

export type AutoFillSelectorEmptyProps = HTMLAttributes<HTMLDivElement> & {
    children?: ReactNode;
};

export type AutoFillSelectorContextValue = {
    options: AutoFillOption[];
    value: string[];
    selectedSet: Set<string>;
    query: string;
    setQuery: (query: string) => void;
    filteredOptions: AutoFillOption[];
    disabled: boolean;
    inputRef: React.RefObject<HTMLInputElement | null>;
    toggleValue: (value: string) => void;
    removeValue: (value: string) => void;
};

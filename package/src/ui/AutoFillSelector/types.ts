import type React from "react";
import type {
    HTMLAttributes,
    InputHTMLAttributes,
    ReactNode,
    Ref,
} from "react";
import type {
    ButtonClassName,
    RoundVariants,
    SpanClassName,
    SvgClassName,
} from "../_shared/types";

export type AutoFillOption = {
    /** The value used by the component. */
    value: string;
    /** Text used for the label. */
    label: string;
    /** Text used for the description. */
    description?: string;
    /** Content rendered for the icon. */
    icon?: ReactNode;
};

export type AutoFillSelectorProps = Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "onChange"
> & {
    /** Receives the selector root element. */
    ref?: Ref<HTMLDivElement>;
    /** The options used by the component. */
    options: AutoFillOption[];
    /** The value used by the component. */
    value?: string[];
    /** Callback invoked when change occurs. */
    onChange?: (value: string[]) => void;
    /** Whether disabled is enabled. */
    disabled?: boolean;
    /** The width of the popup menu. */
    menuWidth?: number | string;
    /** The content rendered inside the component. */
    children: ReactNode;
    /** Callback invoked when open change occurs. */
    onOpenChange?: (open: boolean) => void;
};

export type AutoFillSelectorTriggerProps = HTMLAttributes<HTMLDivElement> & {
    /** The border-radius preset applied to the component. */
    rounded?: RoundVariants;
};

export type AutoFillSelectorTagsProps = HTMLAttributes<HTMLDivElement> & {
    /** The border-radius preset applied to the component. */
    rounded?: RoundVariants;
    /** CSS classes applied to the tag element. */
    tagClassName?: SpanClassName;
    /** CSS classes applied to the tag remove element. */
    tagRemoveClassName?: ButtonClassName;
};

export type AutoFillSelectorInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange" | "disabled"
> & {
    /** The border-radius preset applied to the component. */
    rounded?: RoundVariants;
};

export type AutoFillSelectorMenuProps = HTMLAttributes<HTMLDivElement> & {
    /** The border-radius preset applied to the component. */
    rounded?: RoundVariants;
};

export type AutoFillSelectorOptionsProps = HTMLAttributes<HTMLDivElement> & {
    /** CSS classes applied to the option element. */
    optionClassName?: ButtonClassName;
    /** CSS classes applied to the option label element. */
    optionLabelClassName?: SpanClassName;
    /** CSS classes applied to the option description element. */
    optionDescriptionClassName?: SpanClassName;
    /** CSS classes applied to the option icon element. */
    optionIconClassName?: SvgClassName;
    /** The border-radius preset applied to the component. */
    rounded?: RoundVariants;
};

export type AutoFillSelectorEmptyProps = HTMLAttributes<HTMLDivElement> & {
    /** The content rendered inside the component. */
    children?: ReactNode;
};

export type AutoFillSelectorContextValue = {
    /** The options used by the component. */
    options: AutoFillOption[];
    /** The value used by the component. */
    value: string[];
    /** Whether selected set is enabled. */
    selectedSet: Set<string>;
    /** The query used by the component. */
    query: string;
    /** Function used to set query. */
    setQuery: (query: string) => void;
    /** Function used to filtered options. */
    filteredOptions: AutoFillOption[];
    /** Whether disabled is enabled. */
    disabled: boolean;
    /** Reference to the input ref. */
    inputRef: React.RefObject<HTMLInputElement | null>;
    /** Function used to toggle value. */
    toggleValue: (value: string) => void;
    /** Function used to remove value. */
    removeValue: (value: string) => void;
};

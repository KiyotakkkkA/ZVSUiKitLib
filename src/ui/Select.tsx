import { Dropdown } from "./Dropdown";
import { cn } from "../lib/utils";

type SelectOption = {
    value: string;
    label: string;
};

type SelectProps = {
    value: string;
    onChange: (value: string) => void;
    options: SelectOption[];
    placeholder?: string;
    searchable?: boolean;
    searchPlaceholder?: string;
    emptyMessage?: string;
    disabled?: boolean;
    className?: string;
    wrapperClassName?: string;
};

export function Select({
    value,
    onChange,
    options,
    placeholder,
    searchable = false,
    searchPlaceholder,
    emptyMessage,
    disabled,
    className = "",
    wrapperClassName = "",
}: SelectProps) {
    return (
        <div
            className={cn(
                "flex items-center gap-2 text-sm text-main-200",
                wrapperClassName,
            )}
        >
            <Dropdown
                value={value}
                onChange={onChange}
                options={options}
                placeholder={placeholder}
                searchable={searchable}
                searchPlaceholder={searchPlaceholder}
                emptyMessage={emptyMessage}
                disabled={disabled}
                triggerClassName={cn(className)}
            />
        </div>
    );
}

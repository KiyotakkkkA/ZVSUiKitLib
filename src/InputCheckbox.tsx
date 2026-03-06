import { cn } from "./lib/utils";

type InputCheckboxProps = {
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    type?: "slided";
    className?: string;
};

export const InputCheckbox = ({
    checked,
    onChange,
    disabled = false,
    className = "",
}: InputCheckboxProps) => {
    return (
        <button
            type="button"
            role="switch"
            aria-checked={checked}
            disabled={disabled}
            onClick={() => onChange(!checked)}
            className={cn(
                "relative inline-flex h-6 w-11 items-center rounded-full border border-main-600",
                "transition-colors duration-200",
                checked ? "bg-main-500/70" : "bg-main-800",
                disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer",
                className,
            )}
        >
            <span
                className={cn(
                    "inline-block h-4 w-4 transform rounded-full bg-main-100 transition-transform duration-200",
                    checked ? "translate-x-6" : "translate-x-1",
                )}
            />
        </button>
    );
};

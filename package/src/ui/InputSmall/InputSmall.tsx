import { Icon } from "@iconify/react";
import {
    forwardRef,
    useImperativeHandle,
    useRef,
    useState,
    type ChangeEvent,
} from "react";
import { cn } from "../../lib/utils";
import type { InputPreset, InputSmallProps } from "./types";

type PresetConfig = {
    type: InputSmallProps["type"];
    inputMode?: InputSmallProps["inputMode"];
    autoComplete?: string;
    icon?: string;
};

const presetConfig: Record<InputPreset, PresetConfig> = {
    password: {
        type: "password",
        autoComplete: "current-password",
    },
    search: {
        type: "search",
        inputMode: "search",
        autoComplete: "off",
        icon: "mdi:magnify",
    },
    email: {
        type: "email",
        inputMode: "email",
        autoComplete: "email",
        icon: "mdi:email-outline",
    },
    phone: {
        type: "tel",
        inputMode: "tel",
        autoComplete: "tel",
        icon: "mdi:phone-outline",
    },
    url: {
        type: "url",
        inputMode: "url",
        autoComplete: "url",
        icon: "mdi:link-variant",
    },
};

export const InputSmall = forwardRef<HTMLInputElement, InputSmallProps>(
    function InputSmall(
        {
            className,
            classNames,
            type,
            preset,
            value,
            defaultValue,
            autoComplete,
            inputMode,
            onChange,
            onKeyDown,
            onClear,
            disabled,
            readOnly,
            rounded = "rounded-full",
            ...props
        },
        forwardedRef,
    ) {
        const inputRef = useRef<HTMLInputElement>(null);
        useImperativeHandle(forwardedRef, () => inputRef.current!);

        const config = preset ? presetConfig[preset] : undefined;
        const isPasswordPreset = preset === "password";
        const isSearchPreset = preset === "search";
        const isControlled = value !== undefined;
        const [passwordVisible, setPasswordVisible] = useState(false);
        const [internalValue, setInternalValue] = useState(() =>
            String(defaultValue ?? ""),
        );

        const currentValue = isControlled ? String(value ?? "") : internalValue;
        const hasValue = currentValue.length > 0;
        const resolvedType = isPasswordPreset
            ? passwordVisible
                ? "text"
                : "password"
            : (type ?? config?.type);
        const hasLeadingIcon = Boolean(config?.icon);
        const hasTrailingAction =
            isPasswordPreset || (isSearchPreset && hasValue);

        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
            if (!isControlled) setInternalValue(event.target.value);
            onChange?.(event);
        };

        const clear = () => {
            const input = inputRef.current;
            if (!input || disabled || readOnly) return;

            const valueSetter = Object.getOwnPropertyDescriptor(
                HTMLInputElement.prototype,
                "value",
            )?.set;

            valueSetter?.call(input, "");
            input.dispatchEvent(new Event("input", { bubbles: true }));
            if (!isControlled) setInternalValue("");
            onClear?.();
            input.focus();
        };

        return (
            <div className={cn("relative", classNames?.wrapper)}>
                {config?.icon && (
                    <Icon
                        icon={config.icon}
                        aria-hidden
                        className={cn(
                            "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-base text-main-400",
                            classNames?.leadingIcon,
                            classNames?.icon,
                        )}
                    />
                )}

                <input
                    {...props}
                    ref={inputRef}
                    type={resolvedType}
                    value={value}
                    defaultValue={defaultValue}
                    disabled={disabled}
                    readOnly={readOnly}
                    inputMode={inputMode ?? config?.inputMode}
                    autoComplete={autoComplete ?? config?.autoComplete}
                    onChange={handleChange}
                    onKeyDown={(event) => {
                        onKeyDown?.(event);
                        if (
                            !event.defaultPrevented &&
                            isSearchPreset &&
                            event.key === "Escape" &&
                            hasValue
                        ) {
                            event.preventDefault();
                            clear();
                        }
                    }}
                    className={cn(
                        "h-9 w-full border border-main-700 bg-main-800 px-3 text-sm text-main-100",
                        rounded && `zvs-${rounded}`,
                        "outline-none transition-colors duration-200 placeholder:text-main-500",
                        "focus-visible:border-main-500/70 focus-visible:ring-2 focus-visible:ring-main-500/25",
                        "disabled:cursor-not-allowed disabled:opacity-60 read-only:cursor-not-allowed",
                        hasLeadingIcon && "pl-9",
                        hasTrailingAction && "pr-9",
                        isSearchPreset &&
                            "[&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden",
                        className,
                    )}
                />

                {isPasswordPreset && (
                    <button
                        type="button"
                        disabled={disabled}
                        aria-label={
                            passwordVisible ? "Hide password" : "Show password"
                        }
                        aria-pressed={passwordVisible}
                        className={cn(
                            "absolute right-1 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-md text-main-400 transition-colors",
                            "hover:bg-main-700/70 hover:text-main-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main-400/40 disabled:pointer-events-none",
                            classNames?.trailingButton,
                        )}
                        onPointerDown={(event) => event.preventDefault()}
                        onClick={() =>
                            setPasswordVisible((visible) => !visible)
                        }
                    >
                        <Icon
                            icon={
                                passwordVisible
                                    ? "mdi:eye-off-outline"
                                    : "mdi:eye-outline"
                            }
                            aria-hidden
                            className={cn("text-base", classNames?.icon)}
                        />
                    </button>
                )}

                {isSearchPreset && hasValue && (
                    <button
                        type="button"
                        disabled={disabled || readOnly}
                        aria-label="Clear search"
                        className={cn(
                            "absolute right-1 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-md text-main-400 transition-colors",
                            "hover:bg-main-700/70 hover:text-main-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main-400/40 disabled:pointer-events-none",
                            classNames?.trailingButton,
                        )}
                        onPointerDown={(event) => event.preventDefault()}
                        onClick={clear}
                    >
                        <Icon
                            icon="mdi:close"
                            aria-hidden
                            className={cn("text-base", classNames?.icon)}
                        />
                    </button>
                )}
            </div>
        );
    },
);

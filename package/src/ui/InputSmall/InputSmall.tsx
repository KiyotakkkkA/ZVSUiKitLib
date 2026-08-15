import styles from "./InputSmall.module.css";
import { Icon } from "../_shared/icons";
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
            <div className={cn(styles.s0, className)}>
                {config?.icon && (
                    <Icon
                        icon={config.icon}
                        aria-hidden
                        className={cn(
                            styles.s1,
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
                        styles.s2,
                        `zvs-${rounded}`,
                        styles.s3,
                        styles.s4,
                        styles.s5,
                        hasLeadingIcon && styles.s6,
                        hasTrailingAction && styles.s7,
                        isSearchPreset &&
                            styles.s8,
                        classNames?.input,
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
                            styles.s9,
                            styles.s10,
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
                            className={cn(styles.s11, classNames?.icon)}
                        />
                    </button>
                )}

                {isSearchPreset && hasValue && (
                    <button
                        type="button"
                        disabled={disabled || readOnly}
                        aria-label="Clear search"
                        className={cn(
                            styles.s12,
                            styles.s13,
                            classNames?.trailingButton,
                        )}
                        onPointerDown={(event) => event.preventDefault()}
                        onClick={clear}
                    >
                        <Icon
                            icon="mdi:close"
                            aria-hidden
                            className={cn(styles.s14, classNames?.icon)}
                        />
                    </button>
                )}
            </div>
        );
    },
);

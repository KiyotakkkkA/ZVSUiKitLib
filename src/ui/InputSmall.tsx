import { Icon } from "@iconify/react";
import { forwardRef, useState, type InputHTMLAttributes } from "react";
import { cn } from "../lib/utils";

type InputSmallProps = InputHTMLAttributes<HTMLInputElement>;

export const InputSmall = forwardRef<HTMLInputElement, InputSmallProps>(
    function InputSmall({ className = "", type, ...props }, ref) {
        const isPassword = type === "password";
        const [passwordVisible, setPasswordVisible] = useState(false);

        const inputType = isPassword
            ? passwordVisible
                ? "text"
                : "password"
            : type;

        return (
            <div className="relative">
                <input
                    ref={ref}
                    type={inputType}
                    className={cn(
                        "h-9 w-full rounded-lg border border-main-700 bg-main-800 px-3 text-sm text-main-100",
                        "outline-none transition-colors duration-200 placeholder:text-main-500",
                        "focus-visible:border-main-500/70 focus-visible:ring-2 focus-visible:ring-main-500/25",
                        "read-only:cursor-not-allowed",
                        isPassword ? "pr-10" : "",
                        className,
                    )}
                    {...props}
                />
                {isPassword && (
                    <Icon
                        icon={passwordVisible ? "mdi:eye-off" : "mdi:eye"}
                        className="absolute top-2.5 right-3 cursor-pointer text-main-200 transition-opacity hover:opacity-50"
                        onClick={() => setPasswordVisible((prev) => !prev)}
                    />
                )}
            </div>
        );
    },
);

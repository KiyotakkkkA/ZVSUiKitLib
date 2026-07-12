import {
    useCallback,
    useEffect,
    useMemo,
    useState,
    type PropsWithChildren,
} from "react";
import { Icon } from "@iconify/react";
import {
    ToastContext,
    type ToastContextValue,
    type ToastInput,
} from "../lib/context";
import type { ColorVariantsBase } from "../ui";

type ToastItem = {
    id: string;
    type: ColorVariantsBase;
    title: string;
    description?: string;
    durationMs: number;
};

const DEFAULT_DURATION = 3500;
const MIN_DURATION = 1200;
const MAX_DURATION = 20000;
const EXIT_ANIMATION_MS = 220;
const MAX_TOASTS = 5;

const normalizeDuration = (durationMs?: number) => {
    if (typeof durationMs !== "number" || Number.isNaN(durationMs)) {
        return DEFAULT_DURATION;
    }

    return Math.min(MAX_DURATION, Math.max(MIN_DURATION, durationMs));
};

const makeToastId = () => {
    if (
        typeof crypto !== "undefined" &&
        typeof crypto.randomUUID === "function"
    ) {
        return crypto.randomUUID();
    }

    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

const toastStyles: Record<
    ColorVariantsBase,
    { icon: string; accent: string; progress: string; border: string }
> = {
    primary: {
        icon: "mdi:information-outline",
        accent: "text-main-800",
        progress: "bg-main-800",
        border: "border-transparent",
    },
    secondary: {
        icon: "mdi:information-outline",
        accent: "text-main-200",
        progress: "bg-main-500",
        border: "border-main-600",
    },
    tertiary: {
        icon: "mdi:information-outline",
        accent: "text-accent-light",
        progress: "bg-accent-medium",
        border: "border-accent-dark/70",
    },
    info: {
        icon: "mdi:information",
        accent: "text-info-light",
        progress: "bg-info-medium",
        border: "border-info-dark/70",
    },
    warning: {
        icon: "mdi:alert-outline",
        accent: "text-warning-light",
        progress: "bg-warning-medium",
        border: "border-warning-dark/70",
    },
    success: {
        icon: "mdi:check-circle-outline",
        accent: "text-success-light",
        progress: "bg-success-medium",
        border: "border-success-dark/70",
    },
    danger: {
        icon: "mdi:close-circle-outline",
        accent: "text-danger-light",
        progress: "bg-danger-medium",
        border: "border-danger-dark/70",
    },
};

type ToastCardProps = {
    item: ToastItem;
    onDone: (id: string) => void;
};

const ToastCard = ({ item, onDone }: ToastCardProps) => {
    const [entered, setEntered] = useState(false);
    const [progressStarted, setProgressStarted] = useState(false);
    const style = toastStyles[item.type];
    const isPrimary = item.type === "primary";

    useEffect(() => {
        const rafId = window.requestAnimationFrame(() => {
            setEntered(true);
            setProgressStarted(true);
        });

        let removeTimeout: number | undefined;

        const timeout = window.setTimeout(() => {
            setEntered(false);

            removeTimeout = window.setTimeout(() => {
                onDone(item.id);
            }, EXIT_ANIMATION_MS);
        }, item.durationMs);

        return () => {
            window.cancelAnimationFrame(rafId);
            window.clearTimeout(timeout);

            if (removeTimeout !== undefined) {
                window.clearTimeout(removeTimeout);
            }
        };
    }, [item.durationMs, item.id, onDone]);

    return (
        <div
            className={`relative overflow-hidden rounded-xl border ${style.border} ${isPrimary ? "bg-main-100 text-main-800" : "bg-main-900 text-main-100"} px-4 py-3 shadow-xl transition-all duration-200 ${
                entered
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
            }`}
        >
            <div className="flex items-start gap-2 pr-2">
                <Icon
                    icon={style.icon}
                    width="24"
                    height="24"
                    className={style.accent}
                />

                <div className="min-w-0">
                    <p className="text-sm font-semibold">{item.title}</p>
                    {item.description && (
                        <p
                            className={`mt-1 text-xs ${isPrimary ? "text-main-600" : "text-main-300"}`}
                        >
                            {item.description}
                        </p>
                    )}
                </div>
            </div>

            <div
                className={`mt-3 h-1 w-full overflow-hidden rounded-full ${isPrimary ? "bg-main-300" : "bg-main-800"}`}
            >
                <div
                    className={`h-full ${style.progress}`}
                    style={{
                        width: progressStarted ? "0%" : "100%",
                        transition: `width ${item.durationMs}ms linear`,
                    }}
                />
            </div>
        </div>
    );
};

export const ToastProvider = ({ children }: PropsWithChildren) => {
    const [toasts, setToasts] = useState<ToastItem[]>([]);

    const removeToast = useCallback((id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, []);

    const push = useCallback((type: ColorVariantsBase, input: ToastInput) => {
        const id = makeToastId();
        setToasts((prev) => [
            ...prev.slice(-(MAX_TOASTS - 1)),
            {
                id,
                type,
                title: input.title,
                description: input.description,
                durationMs: normalizeDuration(input.durationMs),
            },
        ]);
    }, []);

    const contextValue = useMemo<ToastContextValue>(
        () => ({
            push,
            primary: (input) => push("primary", input),
            secondary: (input) => push("secondary", input),
            tertiary: (input) => push("tertiary", input),
            info: (input) => push("info", input),
            warning: (input) => push("warning", input),
            success: (input) => push("success", input),
            danger: (input) => push("danger", input),
        }),
        [push],
    );

    return (
        <ToastContext.Provider value={contextValue}>
            {children}

            <div
                role="region"
                aria-live="polite"
                aria-label="Notifications"
                className="pointer-events-none fixed bottom-4 right-4 z-70 flex w-90 max-w-[calc(100vw-2rem)] flex-col gap-2"
            >
                {toasts.map((item) => (
                    <ToastCard key={item.id} item={item} onDone={removeToast} />
                ))}
            </div>
        </ToastContext.Provider>
    );
};

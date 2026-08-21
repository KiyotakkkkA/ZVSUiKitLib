import styles from "./ToastProvider.module.css";
import {
    useCallback,
    useEffect,
    useMemo,
    useState,
    type PropsWithChildren,
} from "react";
import { Icon } from "../ui/_shared/icons";
import {
    ToastContext,
    type ToastContextValue,
    type ToastInput,
} from "../lib/context";
import { cn } from "../lib/utils";
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
        icon: "information-outline",
        accent: styles.iconPrimary,
        progress: styles.barPrimary,
        border: styles.borderPrimary,
    },
    secondary: {
        icon: "information-outline",
        accent: styles.iconSecondary,
        progress: styles.barSecondary,
        border: styles.borderSecondary,
    },
    tertiary: {
        icon: "information-outline",
        accent: styles.iconTertiary,
        progress: styles.barTertiary,
        border: styles.borderTertiary,
    },
    info: {
        icon: "information",
        accent: styles.iconInfo,
        progress: styles.barInfo,
        border: styles.borderInfo,
    },
    warning: {
        icon: "alert-outline",
        accent: styles.iconWarning,
        progress: styles.barWarning,
        border: styles.borderWarning,
    },
    success: {
        icon: "check-circle-outline",
        accent: styles.iconSuccess,
        progress: styles.barSuccess,
        border: styles.borderSuccess,
    },
    danger: {
        icon: "close-circle-outline",
        accent: styles.iconDanger,
        progress: styles.barDanger,
        border: styles.borderDanger,
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
            className={cn(
                styles.card,
                style.border,
                isPrimary ? styles.surfacePrimary : styles.surfaceDefault,
                entered && styles.cardEntered,
            )}
        >
            <div className={styles.body}>
                <Icon
                    icon={style.icon}
                    width="24"
                    height="24"
                    className={style.accent}
                />

                <div className={styles.content}>
                    <p className={styles.title}>{item.title}</p>
                    {item.description && (
                        <p
                            className={cn(
                                styles.description,
                                isPrimary
                                    ? styles.descriptionPrimary
                                    : styles.descriptionDefault,
                            )}
                        >
                            {item.description}
                        </p>
                    )}
                </div>
            </div>

            <div
                className={cn(
                    styles.track,
                    isPrimary ? styles.trackPrimary : styles.trackDefault,
                )}
            >
                <div
                    className={cn(styles.bar, style.progress)}
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
                className={styles.viewport}
            >
                {toasts.map((item) => (
                    <ToastCard key={item.id} item={item} onDone={removeToast} />
                ))}
            </div>
        </ToastContext.Provider>
    );
};

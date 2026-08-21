import styles from "./Tabs.module.css";
import { useRef, type KeyboardEvent } from "react";
import { cn } from "../../lib/utils";
import type { TabsProps } from "./types";

export function Tabs({
    value,
    onChange,
    options,
    orientation = "horizontal",
    label,
    className,
    classNames,
    tabProps,
    ...props
}: TabsProps) {
    const listRef = useRef<HTMLDivElement>(null);

    const focusTabAt = (index: number) => {
        const tabs = listRef.current?.querySelectorAll<HTMLButtonElement>(
            "[role='tab']:not([disabled])",
        );

        tabs?.[index]?.focus();
        tabs?.[index]?.click();
    };

    const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        const tabs = Array.from(
            listRef.current?.querySelectorAll<HTMLButtonElement>(
                "[role='tab']:not([disabled])",
            ) ?? [],
        );

        if (tabs.length === 0) return;

        const previousKey =
            orientation === "vertical" ? "ArrowUp" : "ArrowLeft";
        const nextKey = orientation === "vertical" ? "ArrowDown" : "ArrowRight";
        const current = tabs.indexOf(document.activeElement as HTMLButtonElement);

        if (event.key === previousKey) {
            event.preventDefault();
            focusTabAt(current <= 0 ? tabs.length - 1 : current - 1);
            return;
        }

        if (event.key === nextKey) {
            event.preventDefault();
            focusTabAt(current === tabs.length - 1 ? 0 : current + 1);
            return;
        }

        if (event.key === "Home") {
            event.preventDefault();
            focusTabAt(0);
            return;
        }

        if (event.key === "End") {
            event.preventDefault();
            focusTabAt(tabs.length - 1);
        }
    };

    const activeIndex = options.findIndex(
        (option) => option.value === value && !option.disabled,
    );
    const fallbackIndex = options.findIndex((option) => !option.disabled);
    const focusableIndex = activeIndex === -1 ? fallbackIndex : activeIndex;

    return (
        <div className={cn(styles.s0, className)} {...props}>
            <div
                ref={listRef}
                role="tablist"
                aria-label={label}
                aria-orientation={orientation}
                onKeyDown={onKeyDown}
                className={cn(styles.s1, classNames?.list)}
            >
                {options.map((option, index) => {
                    const active = option.value === value;

                    return (
                        <button
                            key={option.value}
                            {...tabProps}
                            type="button"
                            role="tab"
                            id={option.tabId}
                            aria-selected={active}
                            aria-controls={option.panelId}
                            tabIndex={index === focusableIndex ? 0 : -1}
                            disabled={option.disabled}
                            onClick={() => onChange(option.value)}
                            className={cn(
                                styles.s2,
                                styles.s3,
                                styles.s4,
                                active && styles.s5,
                                classNames?.tab,
                                active && classNames?.activeTab,
                                tabProps?.className,
                            )}
                        >
                            {option.label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

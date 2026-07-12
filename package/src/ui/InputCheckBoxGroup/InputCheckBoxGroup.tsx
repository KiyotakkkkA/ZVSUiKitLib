"use client";

import { useMemo, useState } from "react";
import { cn } from "../../lib/utils";
import type { BooleanModel, InputCheckBoxGroupProps } from "./types";
import {
    InputCheckBoxGroupContext,
    type InputCheckBoxGroupContextValue,
} from "./context";

export function InputCheckBoxGroup<T extends BooleanModel>({
    model,
    onModelChange,
    default: defaultKey,
    multiple = true,
    orientation = "horizontal",
    disabled = false,
    className,
    children,
    ...props
}: InputCheckBoxGroupProps<T>) {
    const [hasInteracted, setHasInteracted] = useState(false);
    const hasSelection = Object.values(model).some(Boolean);
    const effectiveModel = useMemo<BooleanModel>(
        () =>
            !hasInteracted && !hasSelection && defaultKey
                ? { ...model, [defaultKey]: true }
                : model,
        [defaultKey, hasInteracted, hasSelection, model],
    );

    const value = useMemo<InputCheckBoxGroupContextValue>(
        () => ({
            model: effectiveModel,
            disabled,
            toggle: (key) => {
                setHasInteracted(true);

                const next = multiple
                    ? { ...effectiveModel, [key]: !effectiveModel[key] }
                    : Object.fromEntries(
                          Object.keys(effectiveModel).map((modelKey) => [
                              modelKey,
                              modelKey === key ? !effectiveModel[key] : false,
                          ]),
                      );

                onModelChange(next as T);
            },
        }),
        [disabled, effectiveModel, multiple, onModelChange],
    );

    return (
        <InputCheckBoxGroupContext.Provider value={value}>
            <div
                {...props}
                role="group"
                aria-orientation={orientation}
                aria-disabled={disabled || undefined}
                className={cn(
                    "flex gap-3",
                    orientation === "vertical"
                        ? "flex-col items-start"
                        : "flex-row flex-wrap items-center",
                    className,
                )}
            >
                {children}
            </div>
        </InputCheckBoxGroupContext.Provider>
    );
}

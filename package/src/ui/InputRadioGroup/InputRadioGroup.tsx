"use client";

import { useId, useMemo } from "react";
import { cn } from "../../lib/utils";
import type { BooleanModel } from "../InputCheckBoxGroup";
import type { InputRadioGroupProps } from "./types";
import {
    InputRadioGroupContext,
    type InputRadioGroupContextValue,
} from "./context";

export function InputRadioGroup<T extends BooleanModel>({
    model,
    onModelChange,
    default: defaultKey,
    orientation = "horizontal",
    disabled = false,
    name,
    className,
    children,
    ...props
}: InputRadioGroupProps<T>) {
    const generatedName = useId();
    const hasSelection = Object.values(model).some(Boolean);
    const effectiveModel = useMemo<BooleanModel>(
        () =>
            !hasSelection && defaultKey
                ? { ...model, [defaultKey]: true }
                : model,
        [defaultKey, hasSelection, model],
    );

    const value = useMemo<InputRadioGroupContextValue>(
        () => ({
            model: effectiveModel,
            disabled,
            name: name ?? generatedName,
            select: (key) => {
                const next = Object.fromEntries(
                    Object.keys(effectiveModel).map((modelKey) => [
                        modelKey,
                        modelKey === key,
                    ]),
                );

                onModelChange(next as T);
            },
        }),
        [disabled, effectiveModel, generatedName, name, onModelChange],
    );

    return (
        <InputRadioGroupContext.Provider value={value}>
            <div
                {...props}
                role="radiogroup"
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
        </InputRadioGroupContext.Provider>
    );
}

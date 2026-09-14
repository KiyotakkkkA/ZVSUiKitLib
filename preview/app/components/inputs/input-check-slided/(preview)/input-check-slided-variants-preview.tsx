"use client";

import {
    InputCheckSlided,
    type ColorVariantsBase,
} from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

const variants: ColorVariantsBase[] = [
    "primary",
    "secondary",
    "tertiary",
    "success",
    "warning",
    "danger",
    "info",
];

export function DemoInputCheckSlidedVariants() {
    const [checked, setChecked] = useState<
        Partial<Record<ColorVariantsBase, boolean>>
    >({});

    return (
        <div className="flex flex-wrap gap-6">
            {variants.map((variant) => (
                <div key={variant} className="flex flex-col gap-3">
                    <InputCheckSlided
                        variant={variant}
                        checked={checked[variant] ?? true}
                        onChange={(value) =>
                            setChecked((current) => ({ ...current, [variant]: value }))
                        }
                    >
                        {variant}
                    </InputCheckSlided>
                    <InputCheckSlided
                        variant={variant}
                        checked
                        disabled
                        onChange={() => {}}
                    >
                        Disabled on
                    </InputCheckSlided>
                    <InputCheckSlided
                        variant={variant}
                        checked={false}
                        disabled
                        onChange={() => {}}
                    >
                        Disabled off
                    </InputCheckSlided>
                </div>
            ))}
        </div>
    );
}

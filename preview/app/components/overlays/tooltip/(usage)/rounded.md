```tsx
"use client";
import {
    Button,
    Tooltip,
    type RoundVariants,
} from "@kiyotakkkka/zvs-uikit-lib";

const roundedVariants: RoundVariants[] = [
    "rounded-none",
    "rounded-sm",
    "rounded",
    "rounded-md",
    "rounded-lg",
    "rounded-xl",
    "rounded-2xl",
    "rounded-3xl",
    "rounded-4xl",
    "rounded-full",
];

export function DemoTooltipRounded() {
    return (
        <div className="flex flex-wrap items-center gap-3">
            {roundedVariants.map((rounded) => (
                <Tooltip key={rounded} label={rounded} rounded={rounded}>
                    <Button variant="secondary">
                        {rounded.replace(/^rounded-?/, "") || "base"}
                    </Button>
                </Tooltip>
            ))}
        </div>
    );
}
```

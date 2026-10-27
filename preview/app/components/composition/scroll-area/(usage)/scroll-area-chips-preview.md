```tsx
"use client";
import { ScrollArea } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

const categories = [
    "All",
    "Design systems",
    "React",
    "TypeScript",
    "Accessibility",
    "Performance",
    "Testing",
    "Animations",
    "Dark mode",
    "Forms",
    "Data tables",
    "Charts",
];

export function DemoScrollAreaChips() {
    const [active, setActive] = useState("All");

    return (
        <div className="w-full max-w-md space-y-2">
            <ScrollArea
                orientation="horizontal"
                showScrollbar={false}
                className="flex gap-2 pb-1"
            >
                {categories.map((category) => (
                    <button
                        key={category}
                        type="button"
                        onClick={() => setActive(category)}
                        className={
                            category === active
                                ? "shrink-0 cursor-pointer rounded-lg border border-main-100 bg-main-100 px-3 py-1.5 text-xs font-medium text-main-900"
                                : "shrink-0 cursor-pointer rounded-lg border border-main-700 px-3 py-1.5 text-xs text-main-300 hover:border-main-500 hover:text-main-100"
                        }
                    >
                        {category}
                    </button>
                ))}
            </ScrollArea>
            <p className="font-mono text-xs text-main-500">
                Category: {active} · scroll horizontally, scrollbar hidden
            </p>
        </div>
    );
}
```

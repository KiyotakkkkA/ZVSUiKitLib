```tsx
"use client";
import { Button, Dropdown, Icon } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

const sortOptions = [
    { value: "newest", label: "Newest first" },
    { value: "oldest", label: "Oldest first" },
    { value: "popular", label: "Most popular" },
    { value: "price-asc", label: "Price: low to high" },
    { value: "price-desc", label: "Price: high to low" },
];

export function DemoDropdownSort() {
    const [sort, setSort] = useState("popular");
    const current = sortOptions.find((option) => option.value === sort);

    return (
        <div className="flex w-full max-w-xl flex-wrap items-center justify-between gap-3 rounded-xl border border-main-700/70 bg-main-900/50 px-4 py-3">
            <p className="text-sm text-main-300">
                <span className="font-semibold text-main-50">128</span>{" "}
                products
            </p>
            <div className="flex items-center gap-2">
                <Dropdown
                    menuWidth={200}
                    menuPlacement="bottom-right"
                    className="w-52"
                >
                    <Dropdown.Trigger className="h-9">
                        <span className="text-main-400">Sort:</span>{" "}
                        {current?.label}
                    </Dropdown.Trigger>
                    <Dropdown.Menu>
                        {sortOptions.map((option) => (
                            <Dropdown.Item
                                key={option.value}
                                active={option.value === sort}
                                icon={
                                    option.value === sort ? (
                                        <Icon icon="check" />
                                    ) : (
                                        <span className="w-[1em]" />
                                    )
                                }
                                onClick={() => setSort(option.value)}
                            >
                                {option.label}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <Button
                    variant="secondary"
                    label="Filters"
                    className="size-9 shrink-0 px-0 text-base"
                >
                    <Icon icon="tune-variant" />
                </Button>
            </div>
        </div>
    );
}
```

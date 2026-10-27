```tsx
"use client";
import { Badge, TreeView } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

const sections = [
    {
        title: "Getting started",
        pages: ["Introduction", "Installation", "Theming"],
    },
    {
        title: "Components",
        pages: ["Button", "Card", "Switcher", "Accordion Group"],
    },
    {
        title: "Guides",
        pages: ["Forms", "Data tables", "Migrating to 8.6"],
    },
];

const isNew = (page: string) =>
    page === "Accordion Group" || page === "Migrating to 8.6";

export function DemoTreeViewDocsNav() {
    const [page, setPage] = useState("Installation");

    return (
        <nav aria-label="Documentation" className="w-full max-w-xs">
            <TreeView className="border-0 bg-transparent p-0">
                {sections.map((section) => (
                    <TreeView.Catalog
                        key={section.title}
                        title={section.title}
                        defaultOpen={section.pages.includes(page)}
                    >
                        {section.pages.map((item) => (
                            <TreeView.Element
                                key={item}
                                label={item}
                                selected={page === item}
                                onClick={() => setPage(item)}
                                rightSlot={
                                    isNew(item) ? (
                                        <Badge size="sm" variant="tertiary">
                                            New
                                        </Badge>
                                    ) : undefined
                                }
                            />
                        ))}
                    </TreeView.Catalog>
                ))}
            </TreeView>
        </nav>
    );
}
```

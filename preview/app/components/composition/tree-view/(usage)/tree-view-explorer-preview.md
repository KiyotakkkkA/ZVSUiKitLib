```tsx
"use client";
import { Icon, TreeView } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

const size = (value: string) => (
    <span className="text-[11px] tabular-nums text-main-500">{value}</span>
);

export function DemoTreeViewExplorer() {
    const [selected, setSelected] = useState("Button.tsx");

    const file = (name: string, kb: string) => (
        <TreeView.Element
            key={name}
            icon={<Icon icon="script" />}
            label={name}
            selected={selected === name}
            onClick={() => setSelected(name)}
            rightSlot={size(kb)}
        />
    );

    return (
        <div className="grid w-full max-w-3xl gap-4 sm:grid-cols-[22rem_1fr]">
            <TreeView>
                <TreeView.Catalog
                    title="zvs-uikit-lib"
                    icon={<Icon icon="folder-open-outline" />}
                    defaultOpen
                >
                    <TreeView.Catalog
                        title="src"
                        icon={<Icon icon="folder-outline" />}
                        defaultOpen
                    >
                        <TreeView.Catalog
                            title="ui"
                            icon={<Icon icon="folder-outline" />}
                            defaultOpen
                        >
                            {file("Button.tsx", "3.1 KB")}
                            {file("Card.tsx", "1.8 KB")}
                            {file("Switcher.tsx", "4.2 KB")}
                        </TreeView.Catalog>
                        {file("index.ts", "0.4 KB")}
                    </TreeView.Catalog>
                    <TreeView.Element
                        icon={<Icon icon="file-outline" />}
                        label="package.json"
                        selected={selected === "package.json"}
                        onClick={() => setSelected("package.json")}
                        rightSlot={size("1.2 KB")}
                    />
                    <TreeView.Element
                        icon={<Icon icon="file-image-outline" />}
                        label="logo.png"
                        description="Binary file"
                        disabled
                    />
                </TreeView.Catalog>
            </TreeView>
            <div className="flex min-h-60 items-center justify-center rounded-xl border border-dashed border-main-700 text-sm text-main-400">
                Opened: <span className="ml-1 text-main-100">{selected}</span>
            </div>
        </div>
    );
}
```

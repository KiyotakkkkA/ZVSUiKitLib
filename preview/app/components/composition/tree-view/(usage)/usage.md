```tsx
"use client";
import { Icon } from "@iconify/react";
import { TreeView } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoTreeView() {
    const [selected, setSelected] = useState("react");

    return (
        <TreeView className="w-full max-w-sm">
            <TreeView.Catalog title="Frontend" defaultOpen>
                <TreeView.Element
                    icon={<Icon icon="react" />}
                    label="React"
                    description="UI library"
                    selected={selected === "react"}
                    onClick={() => setSelected("react")}
                    rightSlot={
                        <span className="text-xs text-main-500">.tsx</span>
                    }
                />
                <TreeView.Element
                    icon={<Icon icon="language-typescript" />}
                    label="TypeScript"
                    selected={selected === "typescript"}
                    onClick={() => setSelected("typescript")}
                />
            </TreeView.Catalog>
            <TreeView.Catalog title="Backend">
                <TreeView.Element
                    icon={<Icon icon="nodejs" />}
                    label="Node.js"
                    disabled
                    description="Locked by admin"
                />
            </TreeView.Catalog>
        </TreeView>
    );
}
```

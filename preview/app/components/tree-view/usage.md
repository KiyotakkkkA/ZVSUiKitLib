```tsx
import { TreeView } from "@kiyotakkkka/zvs-uikit-lib/ui";
export function TreeViewExample() {
    return (
        <TreeView>
            <TreeView.Catalog title="Frontend" defaultOpen>
                <TreeView.Element label="React" description="Library" />
                <TreeView.Element label="TypeScript" />
            </TreeView.Catalog>
        </TreeView>
    );
}
```

import { TreeView } from "@kiyotakkkka/zvs-uikit-lib";
export function TreeViewPreview() {
    return (
        <div className="w-full p-6">
            <TreeView>
                <TreeView.Catalog title="Frontend" defaultOpen>
                    <TreeView.Element label="React" description="Library" />
                    <TreeView.Element label="TypeScript" />
                </TreeView.Catalog>
            </TreeView>
        </div>
    );
}

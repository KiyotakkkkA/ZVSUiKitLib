"use client";
import { TreeView } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoTreeView() {
    return (
        <TreeView>
            <TreeView.Catalog title="Frontend" defaultOpen>
                <TreeView.Element>React</TreeView.Element>
                <TreeView.Element>TypeScript</TreeView.Element>
            </TreeView.Catalog>
            <TreeView.Catalog title="Backend">
                <TreeView.Element>Node.js</TreeView.Element>
            </TreeView.Catalog>
        </TreeView>
    );
}

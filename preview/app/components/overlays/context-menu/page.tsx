import type { Metadata } from "next";
import { APIProps } from "../../../../_shared/api-props";
import {
    DocumentationPage,
    SectionAPI,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoContextMenuEditor } from "./(preview)/context-menu-editor-preview";
import { DemoContextMenuFiles } from "./(preview)/context-menu-files-preview";
import { DemoContextMenuTable } from "./(preview)/context-menu-table-preview";
import editorUsage from "./(usage)/editor.md";
import filesUsage from "./(usage)/files.md";
import tableUsage from "./(usage)/table.md";
import { contextMenuProps } from "./props";

export const metadata: Metadata = {
    title: "ContextMenu",
    description: "Right-click menu with items and submenus.",
};

export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview
                nav={{
                    id: "overview",
                    headerTitle: "ContextMenu overview",
                    navTitle: "Overview",
                }}
            >
                <SectionOverview.MetaTitle>Overlays</SectionOverview.MetaTitle>
                <SectionOverview.Title>ContextMenu</SectionOverview.Title>
                <SectionOverview.Description>
                    Open contextual actions from a right-click target, including
                    labels, separators, destructive items, and nested submenus.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview
                nav={{
                    id: "file-manager",
                    headerTitle: "File manager actions",
                    navTitle: "Files",
                }}
            >
                <SectionPreview.Component>
                    <DemoContextMenuFiles />
                </SectionPreview.Component>
                <SectionPreview.Code label="ContextMenuFiles.tsx">
                    {filesUsage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionPreview
                nav={{
                    id: "table-rows",
                    headerTitle: "Table row actions",
                    navTitle: "Table rows",
                }}
            >
                <SectionPreview.Component>
                    <DemoContextMenuTable />
                </SectionPreview.Component>
                <SectionPreview.Code label="ContextMenuTable.tsx">
                    {tableUsage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionPreview
                nav={{
                    id: "editor",
                    headerTitle: "Editor with shortcuts and disabled trigger",
                    navTitle: "Editor",
                }}
            >
                <SectionPreview.Component>
                    <DemoContextMenuEditor />
                </SectionPreview.Component>
                <SectionPreview.Code label="ContextMenuEditor.tsx">
                    {editorUsage}
                </SectionPreview.Code>
            </SectionPreview>
            <SectionAPI
                nav={{
                    id: "api",
                    headerTitle: "ContextMenu API",
                    navTitle: "API",
                }}
            >
                <SectionAPI.Group
                    title={contextMenuProps.root.name}
                    description={contextMenuProps.root.description}
                >
                    <SectionAPI.Table>
                        <APIProps props={contextMenuProps.root.props} />
                    </SectionAPI.Table>
                </SectionAPI.Group>
                {contextMenuProps.compound.map((part) => (
                    <SectionAPI.Group
                        key={part.name}
                        title={`${contextMenuProps.root.name}.${part.name}`}
                        description={part.description}
                    >
                        <SectionAPI.Table>
                            <APIProps props={part.props} />
                        </SectionAPI.Table>
                    </SectionAPI.Group>
                ))}
            </SectionAPI>
        </DocumentationPage>
    );
}

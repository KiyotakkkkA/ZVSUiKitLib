import type { Metadata } from "next";
import { APIProps } from "../../../../_shared/api-props";
import {
    DocumentationPage,
    SectionAPI,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoContextMenu } from "./(preview)/context-menu-preview";
import usage from "./(usage)/usage.md";
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
                    id: "interactive-menu",
                    headerTitle: "Interactive context menu",
                    navTitle: "Context menu",
                }}
            >
                <SectionPreview.Component>
                    <DemoContextMenu />
                </SectionPreview.Component>
                <SectionPreview.Code label="ContextMenuExample.tsx">
                    {usage}
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

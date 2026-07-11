"use client";
import { CompositionAPI } from "../composition-api";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoTreeView } from "./tree-view-preview";
import usage from "./usage.md";

export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>TreeView</SectionOverview.Title>
                <SectionOverview.Description>
                    Hierarchical and virtualized tree.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <DemoTreeView />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="TreeViewExample.tsx"
            >
                {usage}
            </SectionCode>
            <CompositionAPI component="TreeView" />
        </DocumentationPage>
    );
}
